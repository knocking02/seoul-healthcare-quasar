<script setup></script>

<template>
   <q-drawer show-if-above side="left" bordered>
      <div class="q-pa-md" style="max-width: 350px">
         <q-list bordered separator>
            <q-item clickable v-ripple to="/amdchart">
               <q-item-section>
                  <q-item-label>AMD CHART</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/smap">
               <q-item-section>
                  <q-item-label>S-MAP</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/tab">
               <q-item-section>
                  <q-item-label>Dynamic Tab </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/table">
               <q-item-section>
                  <q-item-label>Table </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/message">
               <q-item-section>
                  <q-item-label>공통 메세지 </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/axios">
               <q-item-section>
                  <q-item-label>AXIOS</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/util">
               <q-item-section>
                  <q-item-label>UTIL</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </div>
   </q-drawer>
</template>

<style scoped></style>
