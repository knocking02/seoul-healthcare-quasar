<template>
   <q-page class="q-pa-sm">
      <div class="row q-col-gutter-sm q-py-sm">
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <amd-chart :options="barOptions"></amd-chart>
         </div>
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <amd-chart :options="lineOptions"></amd-chart>
         </div>
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <amd-chart :options="pieOptions"></amd-chart>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import AmdChart from '../../components/chart/AmdChart.vue'

/** Bar chart Options */
const barOptions = reactive({
   type: 'Bar',
   data: [
      {
         category: 'Research',
         value1: 1000,
         value2: 588,
      },
      {
         category: 'Marketing',
         value1: 1200,
         value2: 1800,
      },
      {
         category: 'Sales',
         value1: 850,
         value2: 1230,
      },
   ],
})

/** Line Chart Options */
const lineOptions = reactive({
   type: 'Line',
   data: [], // Test 컴포넌트에서 데이타 생성
})

/** Pie Chart Options */
const pieOptions = reactive({
   type: 'Pie',
   data: [
      {
         category: 'Lithuania',
         value: 501.9,
      },
      {
         category: 'Czechia',
         value: 301.9,
      },
      {
         category: 'Ireland',
         value: 201.1,
      },
      {
         category: 'Germany',
         value: 165.8,
      },
      {
         category: 'Australia',
         value: 139.9,
      },
      {
         category: 'Austria',
         value: 128.3,
      },
      {
         category: 'UK',
         value: 99,
      },
   ],
})
</script>

<style scoped></style>
