import axios from './axios'

const smap = {
   /** 좌표 => 주소 변환 */
   useGetAddress(lat, lng) {
      let param = {
         cmd: 'getReverseGeocoding',
         key: '',
         address_type: 'S',
         coord_x: lng,
         coord_y: lat,
         req_lang: 'KOR',
         res_lang: 'KOR',
      }
      return axios.get('https://map.seoul.go.kr/smgis/apps/geocoding.do', param)
   },
}

export default { smap }
