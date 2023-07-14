import { nextTick } from 'vue'

export function useSmap() {
   /** Marker 생성 */
   const createMarker = (map, point, callback) => {
      let marker = new L.Marker(new L.LatLng(point.lat, point.lng), {
         icon: new L.Icon({
            iconUrl: '/images/icons/pin_2.png',
            iconAnchor: [11, 30], // 오프셋 (핀의 끝이 좌표로 매칭하기 위해 적용)
         }),
      }).addTo(map)

      marker.id = Math.random().toString(36).substring(2, 16)

      let addr = point.address.NEW_ADDR || '주소없음'
      let contents = '<div class="marker_popup">'
      contents += addr
      contents += '<div>'
      contents += '<button id="marker_menu_create">컨텐츠 등록</button>&nbsp;'
      contents += '<button id="marker_menu_remove">삭제</button>'
      contents += '</ul>'
      contents += '</div>'

      marker.bindPopup(contents, { minWidth: 40, offset: [0, -30] }).on('popupopen', (e) => {
         document.getElementById('marker_menu_create').addEventListener('click', () => callback('create', point))
         document
            .getElementById('marker_menu_remove')
            .addEventListener('click', () => callback('remove', point, marker))
      })

      marker.on('click', (e) => {
         nextTick(() => {
            map.closePopup()
         })
         callback('detail', point)
      })

      marker.on('contextmenu', () => {
         marker.openPopup()
      })
      //marker.togglePopup()

      return marker
   }

   /** Polyline 그리기 */
   const createPolyline = (map, points) => {
      let latlngs = points.map((item) => {
         return [item.lat, item.lng]
      })

      let polylineLayer = L.polyline(latlngs, {
         color: 'blue',
         weight: 4,
      }).addTo(map)
      return polylineLayer
      //map.fitBounds(polyline.getBounds());
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

   return { createMarker, createPolyline, getDistance, getWalkings }
}
