import axios from '../axios'
import { constant } from '@/modules/utils/constant'

const sample = {
   getSampleDatas() {
      return axios.get('/json/test.json')
   },

   getTableDatas() {
      return axios.get('https://jsonplaceholder.typicode.com/todos')
   },

   // 서울시 등록 휴대폰 조회
   getMemberPhoneNum(id) {
      let param = {
         ServiceKey: constant.SEOUL_API_KEY,
         userId: id,
      }
      return axios.get('https://www.seoul.go.kr/member/info/api/getMemberPhoneNum.do', param, false)
   },

   // 푸쉬 알림 및 문자 API (API 문서 확인할것)
   sendMessage() {
      let param = {
         hostIP: '',
         hostUrl: '',
         userIp: '',
         title: 'Test',
         content: 'Message Test',
      }
      return axios.post('https://api194.eseoul.go.kr:5443/UPServer', param, false)
   },
}

export default { sample }
