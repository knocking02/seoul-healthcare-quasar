<template>
   <component :is="components[currentChart]" :options="options"> </component>
</template>

<script setup>
import LineChart from './components/LineChart.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'
import { computed, ref } from 'vue'

const props = defineProps({
   type: {
      type: String, // options.type = Bar | Line | Pie ...
      default: '',
   },
   options: {
      type: Object,
   },
})

const components = {
   lineChart: LineChart,
   barChart: BarChart,
   pieChart: PieChart,
}
const currentChart = computed(() => props.type + 'Chart')
</script>

<style scoped></style>
