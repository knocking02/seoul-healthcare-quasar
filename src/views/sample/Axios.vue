<template>
   <q-page padding>
      <div class="column">
         <div class="col">
            <div class="text-h5">Axios Test</div>
            <div class="q-pa-md" style="width: 500px; height: 500px">
               <textarea rows="15" cols="60">{{ data }}</textarea>
            </div>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { getCurrentInstance, inject, onMounted, ref } from 'vue'

//const axios = inject('$axios')
const { proxy } = getCurrentInstance()
const data = ref([])

const getData = () => {
   console.log(proxy.$axios)
   proxy.$axios.sample
      .getSampleDatas()
      .then((res) => {
         data.value = res.data
      })
      .catch((error) => {
         console.log(error)
      })
}

onMounted(() => {
   getData()
})
</script>

<style></style>
