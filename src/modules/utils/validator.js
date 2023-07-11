import { util } from './util'

const validator = {
   checkEmpty: (val, message) => !util.isEmpty(val) || message,
   checkId: (val, message) => {
      let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/
      return regPass.test(val) || '영문, 숫자 조합으로 8~20자리 입력해주세요'
   },
   checkPassword: (val, message) => {
      let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
      return regPass.test(val) || '영문, 숫자, 특수기호 조합으로 8~20자리 입력해주세요'
   },
   checkEmail: (val, message) => {
      let regPass = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      return regPass.test(val) || '이메일 형식이 아닙니다.'
   },
   checkAge: (val, message) => (val > 0 && val < 100) || message,
   checkMobile: (val, message) => {
      let regPass = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
      return regPass.test(val) || '핸드폰 번호 형식이 아닙니다.'
   },
}

export default {
   install: (app) => {
      app.config.globalProperties.$validator = validator
   },
}
