<template>
   <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6"> Bar Chart </q-card-section>
      <q-card-section>
         <div class="chart" ref="chartdiv"></div>
      </q-card-section>
   </q-card>
</template>

<script setup>
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { ref, onMounted } from 'vue'

const props = defineProps({
   options: {
      type: Object,
   },
})

const chartdiv = ref(null)

const createChart = () => {
   let root = am5.Root.new(chartdiv.value)

   root.setThemes([am5themes_Animated.new(root)])

   let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
         panY: false,
         layout: root.verticalLayout,
      }),
   )

   // Define data
   let data = props.options.data

   // Create Y-axis
   let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
         renderer: am5xy.AxisRendererY.new(root, {}),
      }),
   )

   // Create X-Axis
   let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
         renderer: am5xy.AxisRendererX.new(root, {}),
         categoryField: 'category',
      }),
   )
   xAxis.data.setAll(data)

   // Create series
   let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
         name: 'Series',
         xAxis: xAxis,
         yAxis: yAxis,
         valueYField: 'value1',
         categoryXField: 'category',
      }),
   )
   series1.data.setAll(data)

   let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
         name: 'Series',
         xAxis: xAxis,
         yAxis: yAxis,
         valueYField: 'value2',
         categoryXField: 'category',
      }),
   )
   series2.data.setAll(data)

   // Add legend
   let legend = chart.children.push(am5.Legend.new(root, {}))
   legend.data.setAll(chart.series.values)

   // Add cursor
   chart.set('cursor', am5xy.XYCursor.new(root, {}))
}

onMounted(() => {
   createChart()
})
</script>
<style scoped>
.chart {
   width: 100%;
   height: 350px;
}
</style>
