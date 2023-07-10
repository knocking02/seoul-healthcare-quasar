<template>
   <q-layout view="hHh lpR fFf">
      <Header title="Admin"></Header>
      <AdminNav></AdminNav>

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
</script>
