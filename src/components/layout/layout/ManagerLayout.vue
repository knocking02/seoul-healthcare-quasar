<template>
   <q-layout view="lHh Lpr lFf">
      <Header title="Manager" @navOpen="open" class="bg-secondary"></Header>
      <ManagerNav :leftDrawerOpen="leftDrawerOpen"></ManagerNav>

      <q-page-container>
         <Breadcrumbs homepath="manager"></Breadcrumbs>
         <slot></slot>
      </q-page-container>

      <Footer></Footer>
   </q-layout>
</template>

<script setup>
import Header from '@/components/layout/header/Header.vue'
import ManagerNav from '../nav/ManagerNav.vue'
import Footer from '../footer/Footer.vue'
import Breadcrumbs from '../Breadcrumbs.vue'
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
const open = (val) => {
   leftDrawerOpen.value = val
}
</script>
