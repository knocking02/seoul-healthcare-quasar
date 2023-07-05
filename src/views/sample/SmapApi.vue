<template>
   <q-page padding>API</q-page>
</template>

<script setup>
import { inject, onMounted } from 'vue'

const axios = inject('$axios')

const searchAddress = () => {
   let param = {
      cmd: 'getGeocoding',
      full_address: '서울특별시 관악구 난곡로 167',
      address_type: 'S',
      req_lang: 'KOR',
      res_lang: 'KOR',
   }
   axios.get('https://map.seoul.go.kr/smgis/apps/geocoding.do', param).then((res) => {
      console.log(res)
   })
}

onMounted(() => {
   searchAddress()
})
</script>

<style scoped></style>
