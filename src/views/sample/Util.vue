<template>
   <q-page padding>
      <div class="column">
         <div class="col">
            <div class="text-h5">UTIL Test</div>
            <div class="column" style="height: 150px">
               <div class="col">CONSTANT TEST : {{ $const.SITE_NAME }}</div>
               <div class="col">util TEST : {{ $util.capitalize(title) }}</div>
               <div class="col">CONSTANT TEST : lodash TEST : {{ lodashTest }}</div>
            </div>
         </div>
         <div class="col">
            <div class="text-h5">Pinia Test</div>
            <div class="q-pa-md">
               <div class="text-h6">현재 count : {{ store.count }} / {{ store.doubleCount }}</div>
               <q-btn @click="store.increment" color="primary" label="count ++"></q-btn>
            </div>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { _range } from 'lodash/range'
import { useCounterStore } from '../../stores/counter'

const title = 'hello~~~~'
const lodashTest = _range(1, 3)
const store = useCounterStore()
</script>

<style></style>
