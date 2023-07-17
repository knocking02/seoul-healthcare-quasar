<template>
   <q-page class="q-pa-sm">
      <div class="row q-col-gutter-sm q-py-sm">
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <echart type="line" :options="lineOptions"></echart>
         </div>
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <echart type="bar" :options="barOptions"></echart>
         </div>
         <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <echart type="pie" :options="pieOptions"></echart>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue'
import { ref } from 'vue'

/** Line Chart Options */
const lineOptions = ref({
   data: [
      {
         name: 'Email',
         type: 'line',
         stack: 'Total',
         areaStyle: {},
         emphasis: {
            focus: 'series',
         },
         data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
         name: 'Union Ads',
         type: 'line',
         stack: 'Total',
         areaStyle: {},
         emphasis: {
            focus: 'series',
         },
         data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
         name: 'Video Ads',
         type: 'line',
         stack: 'Total',
         areaStyle: {},
         emphasis: {
            focus: 'series',
         },
         data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
         name: 'Direct',
         type: 'line',
         stack: 'Total',
         areaStyle: {},
         emphasis: {
            focus: 'series',
         },
         data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
         name: 'Search Engine',
         type: 'line',
         stack: 'Total',
         label: {
            show: true,
            position: 'top',
         },
         areaStyle: {},
         emphasis: {
            focus: 'series',
         },
         data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
   ],
})

/** Bar Chart Options */
const barOptions = ref({
   title: [
      {
         textStyle: {
            color: 'red',
         },
      },
   ],
   xAxis: {
      type: 'category',
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   series: {
      data: [120, 200, 150, 80, 70, 110, 130],
   },
})

/** Pie Chart Options */
const pieOptions = ref({
   data: [
      { value: 335, name: 'Direct' },
      { value: 310, name: 'Email' },
      { value: 234, name: 'Ad Networks' },
      { value: 135, name: 'Video Ads' },
      { value: 1548, name: 'Search Engines' },
   ],
})
</script>

<style scoped></style>
