<template>
   <!-- Navigation -->
   <q-header elevated class="text-white">
      <q-toolbar>
         <q-btn dense flat round icon="menu" />

         <q-toolbar-title>
            <q-avatar>
               <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
            </q-avatar>
            {{ title }}
         </q-toolbar-title>
      </q-toolbar>
   </q-header>
</template>
<script setup>
defineProps(['title'])
</script>

<style></style>
