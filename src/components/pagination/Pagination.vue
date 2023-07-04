<template>
   <q-page padding>
      <q-pagination
         v-model="current"
         :max="max"
         direction-links
         boundary-links
         icon-first="skip_previous"
         icon-last="skip_next"
         icon-prev="fast_rewind"
         icon-next="fast_forward"
         push
         color="teal"
         active-design="push"
         active-color="orange"
         :max-pages="size"
         :ellipses="true"
         :boundary-numbers="true"
         @update:model-value="onChangePage"
      ></q-pagination>
   </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
   page: {
      type: Number,
      default: 1,
   },
   total: {
      type: Number,
      default: 0,
   },
   size: {
      type: Number,
      default: 5,
   },
   rowsPerPage: {
      type: Number,
      default: 10,
   },
})

const emit = defineEmits(['pageChanged'])

const current = ref(props.page)
const max = computed(() => {
   return Math.ceil(props.total / props.rowsPerPage)
})

const onChangePage = (page) => {
   emit('pageChanged', page)
}
</script>

<style scoped></style>
