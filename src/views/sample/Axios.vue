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
import { inject, onMounted, ref } from 'vue'

const axios = inject('$axios')
const data = ref([])

const getData = async () => {
   await axios.get('/json/test.json').then((res) => {
      data.value = res.data
   })
}

onMounted(() => {
   getData()
})
</script>

<style></style>
