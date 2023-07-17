<template>
   <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6"> Pie Chart </q-card-section>
      <q-card-section>
         <v-chart class="chart" :option="option" autoresize />
      </q-card-section>
   </q-card>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const props = defineProps({
   options: {
      type: Object,
   },
})

//provide(THEME_KEY, 'dark')

const option = ref({
   title: {
      text: 'Traffic Sources',
      left: 'center',
   },
   tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
   },
   legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
   },
   series: [
      {
         name: 'Traffic Sources',
         type: 'pie',
         radius: '55%',
         center: ['50%', '60%'],
         data: props.options.data,
         emphasis: {
            itemStyle: {
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
         },
      },
   ],
})
</script>

<style scoped>
.chart {
   height: 40vh;
}
</style>
