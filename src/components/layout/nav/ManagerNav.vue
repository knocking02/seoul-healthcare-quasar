<template>
   <q-drawer v-model="isDrawerOpen" show-if-above side="left" bordered>
      <div class="q-pa-md" style="max-width: 350px">
         <q-list bordered separator>
            <q-item clickable v-ripple to="/manager/about">
               <q-item-section>
                  <q-item-label>About</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </div>
   </q-drawer>
</template>
<script setup>
import { toRef } from 'vue'

const props = defineProps({
   leftDrawerOpen: {
      type: Boolean,
      default: true,
   },
})
const isDrawerOpen = toRef(props, 'leftDrawerOpen')
</script>

<style scoped></style>
