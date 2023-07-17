<template>
   <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6"> Line Chart </q-card-section>
      <q-card-section>
         <v-chart class="chart" :option="option" autoresize />
      </q-card-section>
   </q-card>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent, GridComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent, GridComponent])

const props = defineProps({
   options: {
      type: Object,
   },
})

//provide(THEME_KEY, 'dark')

const option = ref({
   title: {
      text: 'Stacked Area',
   },
   tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: 'cross',
         label: {
            backgroundColor: '#6a7985',
         },
      },
   },
   legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
   },
   toolbox: {
      feature: {
         saveAsImage: {},
      },
   },
   grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
   },
   xAxis: [
      {
         type: 'category',
         boundaryGap: false,
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
   ],
   yAxis: [
      {
         type: 'value',
      },
   ],
   series: props.options.data,
})
</script>

<style scoped>
.chart {
   height: 40vh;
}
</style>
