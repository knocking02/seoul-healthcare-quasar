<template>
   <q-page padding>
      <div class="q-pa-md" style="max-width: 300px">
         <q-input filled v-model="calendarDate1">
            <template v-slot:append>
               <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                     <q-date v-model="calendarDate1" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                           <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                     </q-date>
                  </q-popup-proxy>
               </q-icon>
            </template>
         </q-input>
      </div>

      <div class="q-pa-md" style="max-width: 300px">
         <q-input filled v-model="calendarDate2">
            <template v-slot:prepend>
               <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                     <q-date v-model="calendarDate2" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                           <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                        </div>
                     </q-date>
                  </q-popup-proxy>
               </q-icon>
            </template>

            <template v-slot:append>
               <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                     <q-time v-model="calendarDate2" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                           <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                        </div>
                     </q-time>
                  </q-popup-proxy>
               </q-icon>
            </template>
         </q-input>
      </div>

      <div class="q-pa-md">
         <q-date v-model="calendarDate3" range></q-date>
      </div>
   </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { date } from 'quasar'

const timestamp = Date.now()
const calendarDate1 = ref(date.formatDate(timestamp, 'YYYY-MM-DD'))
const calendarDate2 = ref(date.formatDate(timestamp, 'YYYY-MM-DD HH:mm'))
const calendarDate3 = ref({ from: '2023/06/08', to: '2023/06/17' })
</script>

<style scoped></style>
