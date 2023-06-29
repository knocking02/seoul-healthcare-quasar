<template>
   <q-layout view="hHh lpR fFf">
      <Header></Header>
      <Nav></Nav>

      <q-page-container>
         <router-view />
      </q-page-container>

      <Footer></Footer>
   </q-layout>
</template>

<script setup>
import Header from '@/components/layout/header/Header.vue'
import Nav from './nav/Nav.vue'
import Footer from './footer/Footer.vue'
</script>
