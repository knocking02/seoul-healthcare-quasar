<template>
   <q-page padding>
      <div class="q-pa-md">
         <div class="q-gutter-y-md" style="max-width: 1000px">
            <q-select
               filled
               v-model="tabs"
               multiple
               :options="tabsDefinition"
               label="Tab 선택"
               style="width: 400px"
            ></q-select>

            <q-card>
               <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
                  narrow-indicator
                  style="height: 50px"
               >
                  <q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab"></q-tab>
                  >
               </q-tabs>

               <q-separator></q-separator>

               <q-tab-panels v-model="tab" animated>
                  <q-tab-panel v-for="item in tabsDefinition" :key="item.name" :name="item.name">
                     <component :is="item.component" :title="item.label"> </component>
                  </q-tab-panel>
               </q-tab-panels>
            </q-card>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import Mail from './components/Mail.vue'
import Alarm from './components/Alarm.vue'
import Address from './components/Address.vue'
import Movie from './components/Movie.vue'
import Photo from './components/Photo.vue'
import Video from './components/Video.vue'
import _findIndex from 'lodash/findIndex'

const tabsDefinition = [
   { name: 'mails', icon: 'mail', label: 'Mails', component: Mail },
   { name: 'alarms', icon: 'alarm', label: 'Alarms', component: Alarm },
   { name: 'movies', icon: 'movie', label: 'Movies', component: Movie },
   { name: 'photos', icon: 'photo', label: 'Photos', component: Photo },
   { name: 'videos', icon: 'slow_motion_video', label: 'Videos', component: Video },
   { name: 'addressbook', icon: 'people', label: 'Address Book', component: Address },
]

const tab = ref('mails')
const tabs = ref(tabsDefinition.slice(0, 1))

watch(tabs, (newVals) => {
   if (_findIndex(newVals, { name: tab.value }) === -1) tab.value = ''
})
</script>

<style scoped></style>
