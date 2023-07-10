<template>
   <q-layout view="hHh lpR fFf">
      <Header title="Manager" class="bg-secondary"></Header>
      <ManagerNav></ManagerNav>

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
</script>
