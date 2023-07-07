import axios from './axios'

const sample = {
   getSampleDatas() {
      return axios.get('/json/test.json')
   },

   getTableDatas() {
      return axios.get('https://jsonplaceholder.typicode.com/todos')
   },
}

export default { sample }
