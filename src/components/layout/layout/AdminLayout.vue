<template>
   <q-layout view="lHh Lpr lFf">
      <Header title="Admin" @navOpen="open"></Header>
      <AdminNav :leftDrawerOpen="leftDrawerOpen"></AdminNav>

      <q-page-container>
         <Breadcrumbs homepath="admin"></Breadcrumbs>
         <slot></slot>
      </q-page-container>

      <Footer></Footer>
   </q-layout>
</template>

<script setup>
import Header from '@/components/layout/header/Header.vue'
import AdminNav from '../nav/AdminNav.vue'
import Footer from '../footer/Footer.vue'
import Breadcrumbs from '../Breadcrumbs.vue'
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
const open = (val) => {
   leftDrawerOpen.value = val
}
</script>
