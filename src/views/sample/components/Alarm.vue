<template>
   <div>
      <q-card class="my-card">
         <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-subtitle2 text-center">Title</div>
         </q-img>
      </q-card>
   </div>
</template>

<script setup>
const props = defineProps({
   title: {
      type: String,
   },
})
</script>

<style scoped></style>
