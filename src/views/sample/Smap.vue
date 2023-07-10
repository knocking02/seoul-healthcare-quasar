<template>
   <q-page padding>
      <div class="row">
         <div class="col">
            <div class="q-pa-md q-gutter-sm">
               <q-btn color="primary" label="일반지도" @click="onMapChange('BASEMAP_GEN')"></q-btn>
               <q-btn color="primary" label="위성지도" @click="onMapChange('BASEMAP_SATE')"></q-btn>
               <q-btn color="primary" label="Marker 삭제" @click="onClearMarker"></q-btn>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-7">
            <div id="map_" style="height: 600px"></div>
         </div>
         <div class="col-5" style="padding-left: 10px">
            <q-card-section>
               <div class="text-h6">총거리 {{ totalDistant }}m, 총걸음 {{ totalWalkings.toFixed(1) }}</div>
               <div class="text-subtitle2">예상 시간 : {{ totalTimes }}분</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
               <q-markup-table>
                  <thead>
                     <tr>
                        <th class="text-center">좌표</th>
                        <th class="text-center">주소</th>
                        <th class="text-right">거리(m)</th>
                        <th class="text-right">예상걸음수</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="point in selectedPoints">
                        <td class="text-left">lat: {{ point.lat }}<br />lng: {{ point.lng }}</td>
                        <td class="text-left">{{ point.address.NEW_ADDR }}<br />{{ point.address.LEGAL_ADDR }}</td>
                        <td class="text-right">{{ point.dst.toFixed(1) }}</td>
                        <td class="text-right">{{ point.walkings }}</td>
                     </tr>
                  </tbody>
               </q-markup-table>
            </q-card-section>
            <!--div class="text-h6">총거리 {{ totalDistant }} m</!--div>
            <textarea cols="30" rows="39" style="font-size: 0.8em">{{ selectedPoints }}</textarea -->
         </div>
      </div>
      <q-dialog v-model="popup" transition-show="rotate" transition-hide="rotate">
         <q-card>
            <q-card-section>
               <div class="text-h6">{{ detail.title }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
               <p v-for="n in 5" :key="n">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas
                  eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus
                  minima, porro labore.
               </p>
            </q-card-section>

            <q-card-actions align="right">
               <q-btn flat label="Close" color="primary" v-close-popup></q-btn>
            </q-card-actions>
         </q-card>
      </q-dialog>
      <q-inner-loading
         :showing="isLoading"
         label="Please wait..."
         label-class="text-teal"
         label-style="font-size: 1.1em"
      ></q-inner-loading>
   </q-page>
</template>

<script setup>
import { computed, getCurrentInstance, onMounted, onUnmounted, ref, reactive, inject } from 'vue'
import { loadScript, unloadScript } from 'vue-plugin-load-script'

const isLoading = ref(false)
const { proxy } = getCurrentInstance()

const currentPosition = ref([37.56649, 126.97831]) // 사용자 현재 위치. default: 서울시청
const selectedPoints = ref([]) // 마커 좌표..
const totalDistant = ref(0) // 마커 총 거리
const totalWalkings = ref(0) // 예상 걸음
const popup = ref(false)
const detail = ref(null)

const totalTimes = computed(() => ((totalDistant.value / 4000) * 60).toFixed(1)) // 에상 시간(분)
// 1.4 km
/** S-MAP 불러오기 */
let map = null // map 객체
let markers = [] // marker
let lineLayer = null // polyline 객체
let polylineLayers = [] // polyline 객체

const createMap = () => {
   isLoading.value = true
   loadScript('http://map.seoul.go.kr/smgis/apps/mapsvr.do?cmd=gisMapJs&key=')
      .then(() => {
         map = L.map('map_', {
            continuousWorld: true,
            worldCopyJump: false,
            zoomControl: false, // zoomControl바 출력여부
            zoomAnimation: true,
            fadeAnimation: true,
            inertia: false,
            closePopupOnClick: false,
            attributionControl: true,
            minZoom: 2, // 지도 최소 레벨
         })

         map.setView(currentPosition.value, 9) //지도 좌표 이동

         BaseMapChange(map, L.Dawul.BASEMAP_GEN) // 일반지도

         // 스케일바
         var scaleBar = new L.Control.Scale({ position: 'bottomright' })
         map.addControl(scaleBar)

         // 레벨바
         var slider = new L.Control.Zoomslider({ position: 'topright' })
         map.addControl(slider)

         map.on('click', async (e) => {
            await setSelectedPoints(e.latlng)
            createMarker(e.latlng)
         })

         // var tileUrl = "https://map.seoul.go.kr/smgis/apps/mapsvr.do?cmd=getTileMap&key=bf5ab1d4a3294328a5957ac14244eb25&URL=http://98.33.2.95:7070/MapAppServer/Service?timg=emap_ldong/{z}/{j}/{k}/{x}_{y}.png";  //타일 url

         // var_orverUserImageTaggingLayer = new L.Proj.TileLayer.DAWULGIS(tileUrl,{maxZoom:13, opacity:1, zIndex:3});
         // map.addLayer(_orverUserImageTaggingLayer);

         isLoading.value = false
      })
      .catch((error) => {
         isLoading.value = false
         console.log(error)
      })
}

/** 일반지도, 위성지도 Change */
const onMapChange = (mapType) => BaseMapChange(map, L.Dawul[mapType])

/** 좌표 정보로 거리 계산 및 정보 저장 */
const setSelectedPoints = async ({ lat, lng }) => {
   let distance = 0
   let walkings = 0
   let address = null
   if (selectedPoints.value.length > 0) {
      let selectedPoint = selectedPoints.value[selectedPoints.value.length - 1]
      distance = getDistance([selectedPoint.lat, selectedPoint.lng], [lat, lng])
      totalDistant.value += distance
      walkings = getWalkings(distance)
      totalWalkings.value += walkings
   } else {
      totalDistant.value = 0
      distance = 0
      totalWalkings.value = 0
      walkings = 0
   }

   await proxy.$axios.smap.useGetAddress(lat, lng).then((res) => {
      address = res.data.head
   })
   //address = (await getAddressInfo(lat, lng)) || {}
   //console.log(address)

   selectedPoints.value.push({
      lat: lat,
      lng: lng,
      address: address || {},
      dst: distance,
      walkings: walkings,
   })
}

/** Marker 생성 */
const createMarker = ({ lat, lng }) => {
   let pointInfo = selectedPoints.value[selectedPoints.value.length - 1]
   let content = pointInfo.dst + 'm<br/>총 : ' + totalDistant.value + 'm'
   let marker = new L.Marker(new L.LatLng(lat, lng), {
      icon: new L.Icon({
         iconUrl: '/images/icons/pin_2.png',
         iconAnchor: [11, 30], // 오프셋 (핀의 끝이 좌표로 매칭하기 위해 적용)
      }),
      title: content,
   }).addTo(map)

   marker.bindPopup(content, { minWidth: 20, offset: [0, -30] })
   marker.togglePopup()
   marker.on('click', function (e) {
      detail.value = {
         title: pointInfo.address.NEW_ADDR,
      }
      popup.value = true
   })

   markers.push(marker)

   //testBound()

   createPolyline()
}

/** 바운드 테스트 */
const testBound = () => {
   let southwest = L.latLng(40.712, -74.227)
   let northEast = L.latLng(40.774, -74.125)
   let bounds = L.latLngBounds(southwest, northEast)
   console.log(bounds.getWest())
   console.log(bounds.getEast())
}

/** marker 삭제 */
const onClearMarker = () => {
   // 클릭한 좌표 모두 삭제
   selectedPoints.value = []
   totalDistant.value = 0
   totalWalkings.value = 0
   // marker 삭제
   for (i = 0; i < markers.length; i++) {
      map.removeLayer(markers[i])
   }
   onClearPolyline()
}

/** polyline 삭제 */
const onClearPolyline = () => {
   for (i = 0; i < polylineLayers.length; i++) {
      map.removeLayer(polylineLayers[i])
   }
}

/** Polyline 그리기 */
const onCreatePolyline = () => {
   createPolyline()
}

/** Polyline 생성 */
/*
const createPolyline = (latlng) => {

	let coordinates = selectedPoints.value.map((item) => {
		return [item.lat, item.lng]
	})

	let linedata = {
		type: "Feature",
		geometry: {
			type: 'LineString',
			coordinates: coordinates
		},
	}

	// linedata 지도에 표현
	lineLayer = new L.GeoJSON(linedata, {
		style: () => {
			return {
				weight: 3,   				// 라인굵기
				color : "#0100FF",  // 라인컬러
				opacity : 1   			// 투명도
			}
		}
	}).addTo(map)

	//map.fitBounds(lineLayer.getBounds(),{ padding: [100, 100] });  // 레이어 크기만큼 지도 레벨조정및 위치이동	

}
*/

const createPolyline = () => {
   let latlngs = selectedPoints.value.map((item) => {
      return [item.lat, item.lng]
   })

   let polylineLayer = L.polyline(latlngs, {
      color: 'blue',
      weight: 4,
   }).addTo(map)
   polylineLayers.push(polylineLayer)
   //map.fitBounds(polyline.getBounds());
}

// 현재 자신의 위치 정보 가져오기
const getCurrentPosition = () => {
   navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
         currentPosition.value = [position.coords.latitude, position.coords.longitude]
         console.log(currentPosition.value)
      }
   })
}

// 거리 구하기
const getDistance = (a, b) => {
   var lat1 = a[0]
   var lng1 = a[1]
   var lat2 = b[0]
   var lng2 = b[1]

   function deg2rad(deg) {
      return deg * (Math.PI / 180)
   }
   var r = 6371 //지구의 반지름(km)
   var dLat = deg2rad(lat2 - lat1)
   var dLon = deg2rad(lng2 - lng1)
   var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
   var d = r * c // Distance in km
   return Math.round(d * 1000)
}

/** 예상 걸음수 */
const getWalkings = (dst) => {
   return (1400 * dst) / 1000
}

onMounted(async () => {
   await getCurrentPosition()
   await createMap()
})

onUnmounted(() => {
   // 지도 개체 해제, 관련 모든 이벤트 제거
   if (map) map.remove()

   // load된 script 제거

   unloadScript('http://map.seoul.go.kr/smgis/apps/mapsvr.do?cmd=gisMapJs&key=')
      .then(() => {
         console.log('map unload')
      })
      .catch((error) => {
         console.log(error)
      })
})
</script>

<style scoped>
@import 'http://map.seoul.go.kr/smgis/apps/mapsvr.do?cmd=gisMapCss';
</style>
