<template>
   <q-page padding>
      <div class="column">
         <div class="col">
            <div class="text-h5">Axios Test</div>
            <div class="q-pa-md" style="width: 500px; height: 500px">
               <textarea rows="15" cols="60">{{ data }}</textarea>
            </div>
         </div>
         <div class="col">
            <div class="text-h5">Pinia Test</div>
            <div class="row">
               <div class="col">
                  <div>
                     <span class="text-h6">현재 count : {{ store.count }} / {{ store.doubleCount }}</span
                     >&nbsp;
                     <q-btn @click="store.increment" color="primary" label="count ++"></q-btn>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import { useCounterStore } from '../../stores/counter'

const axios = inject('$axios')
const data = ref([])
const store = useCounterStore()

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
