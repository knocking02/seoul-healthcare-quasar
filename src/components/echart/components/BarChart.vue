<template>
   <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6"> Bar Chart </q-card-section>
      <q-card-section>
         <v-chart class="chart" :option="option" autoresize />
      </q-card-section>
   </q-card>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'
import _merge from 'lodash/merge'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

const props = defineProps({
   options: {
      type: Object,
   },
})

//provide(THEME_KEY, 'dark')

const basicOption = {
   title: [
      {
         text: 'Basic Bar',
      },
   ],
   xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   },
   yAxis: {
      type: 'value',
   },
   series: {
      type: 'bar',
   },
}

const option = _merge(basicOption, props.options)
</script>

<style scoped>
.chart {
   height: 40vh;
}
</style>
