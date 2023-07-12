<template>
   <!-- Navigation -->
   <q-header elevated class="text-white">
      <q-toolbar>
         <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu"> </q-btn>

         <q-toolbar-title>
            {{ title }}
         </q-toolbar-title>
         <q-btn label="Logout" @click="onLogout"></q-btn>
      </q-toolbar>
   </q-header>
</template>
<script setup>
import useStore from '@/stores'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

defineProps(['title'])
const emits = defineEmits(['navOpen'])

const store = useStore()
const leftDrawerOpen = ref(true)

const toggleLeftDrawer = () => {
   leftDrawerOpen.value = !leftDrawerOpen.value
   emits('navOpen', leftDrawerOpen.value)
}

const onLogout = () => {
   store.auth.logout()
}
</script>

<style></style>
