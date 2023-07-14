export function useSmap() {
   /** Marker 생성 */
   const createMarker = (map, pointInfo) => {
      let content = pointInfo.dst // + 'm<br/>총 : ' + totalDistant.value + 'm'
      let marker = new L.Marker(new L.LatLng(pointInfo.lat, pointInfo.lng), {
         icon: new L.Icon({
            iconUrl: '/images/icons/pin_2.png',
            iconAnchor: [11, 30], // 오프셋 (핀의 끝이 좌표로 매칭하기 위해 적용)
         }),
         title: content,
      }).addTo(map)

      // marker.bindPopup(content, { minWidth: 20, offset: [0, -30] })
      marker.togglePopup()
      marker.on('click', function (e) {
         detail.value = {
            title: pointInfo.address.NEW_ADDR,
         }
         popup.value = true
      })

      return marker
   }

   /** Polyline 그리기 */
   const createPolyline = (map, pointInfos) => {
      let latlngs = pointInfos.map((item) => {
         return [item.lat, item.lng]
      })

      let polylineLayer = L.polyline(latlngs, {
         color: 'blue',
         weight: 4,
      }).addTo(map)
      //polylineLayers.push(polylineLayer)
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
