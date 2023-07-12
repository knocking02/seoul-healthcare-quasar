<template>
   <q-breadcrumbs style="padding: 13px 0px 0px 30px">
      <q-breadcrumbs-el label="Home" icon="home" :to="'/' + `${homepath}`"></q-breadcrumbs-el>
      <!--q-breadcrumbs-el label="Components" icon="widgets"></!--q-breadcrumbs-el -->
      <q-breadcrumbs-el :label="title"></q-breadcrumbs-el>
   </q-breadcrumbs>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

defineProps(['homepath'])

const router = useRoute()
const { t, te } = useI18n()

const title = computed(() => {
   return router.meta.name && te(router.meta.name) ? t(router.meta.name) : router.meta.name
})
</script>

<style scoped></style>
