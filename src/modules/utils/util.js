export const util = {
   /** 첫글자 대문자 변환 */
   capitalize(str) {
      return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
   },

   isEmpty(str) {
      return str === null || str === undefined || str === ''
   },

   /** 필요한 공통합수 서술 */
}

export default {
   install: (app) => {
      app.config.globalProperties.$util = util
   },
}
