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
         <q-btn label="Logout" @click="onLogout"></q-btn>
      </q-toolbar>
   </q-header>
</template>
<script setup>
import useStore from '@/stores'

defineProps(['title'])

const store = useStore()

const onLogout = () => {
   store.auth.logout()
}
</script>

<style></style>
