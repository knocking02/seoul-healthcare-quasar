import axios from 'axios'
import { dialog } from '../utils/dialog'
import { LocalStorage } from 'quasar'

// axios default 설정 추가 (header, timeout...... )
axios.defaults.timeout = 40000

const seviceAxios = {
   process(axiosFunc) {
      // 로딩바 Start
      return new Promise((resolve, reject) => {
         axiosFunc
            .then((data) => {
               resolve(data)
            })
            .catch((error) => {
               // 에러 처리
               reject(error)
               dialog.open({
                  type: 'error',
                  message: error.message,
               })
            })
            .finally(() => {
               // 로딩바 End
            })
      })
   },

   get(url, param = {}, isAuth = true) {
      this.setHeaders(isAuth)
      return this.process(axios.get(url, { params: param }), isAuth)
   },

   post(url, param = {}, isAuth = true) {
      this.setHeaders(isAuth)
      return this.process(axios.post(url, param))
   },

   put(url, param = {}, isAuth = true) {
      this.setHeaders(isAuth)
      return this.process(axios.put(url, param))
   },

   delete(url, param = {}, isAuth = true) {
      this.setHeaders(isAuth)
      return this.process(axios.delete(url, { params: param }))
   },

   // header 정보 추가
   setHeaders(isAuth) {
      if (isAuth && LocalStorage.getItem('authToken'))
         axios.defaults.headers.common['Authorization'] = `Bearer ${LocalStorage.getItem('authToken')}`
      else delete axios.defaults.headers.common.Authorization
   },

   // header 토큰 정보 추가
   setAuthTokens(token) {
      if (token) {
         LocalStorage.set('authToken', token)
         axios.defaults.headers.common['Authorization'] = `Bearer ${LocalStorage.getItem('authToken')}`
      } else {
         this.removeAuthTokens()
      }
   },

   // header 토근 정보 삭제
   removeAuthTokens(token) {
      LocalStorage.remove('authToken')
      delete axios.defaults.headers.common.Authorization
   },
}

export default seviceAxios
