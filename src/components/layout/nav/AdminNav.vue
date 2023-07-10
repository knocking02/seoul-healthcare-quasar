<script setup></script>

<template>
   <q-drawer show-if-above side="left" bordered>
      <div class="q-pa-md" style="max-width: 350px">
         <q-list bordered separator>
            <q-item clickable v-ripple to="/admin/amdchart">
               <q-item-section>
                  <q-item-label>AMD CHART</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/smap">
               <q-item-section>
                  <q-item-label>S-MAP</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/tab">
               <q-item-section>
                  <q-item-label>Dynamic Tab </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/table">
               <q-item-section>
                  <q-item-label>Table </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/pagination">
               <q-item-section>
                  <q-item-label>Pagination </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/editor">
               <q-item-section>
                  <q-item-label>Quasar Editor </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/form">
               <q-item-section>
                  <q-item-label>Form </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/calendar">
               <q-item-section>
                  <q-item-label>Calendar </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/date">
               <q-item-section>
                  <q-item-label>Date </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/message">
               <q-item-section>
                  <q-item-label>공통 메세지 </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/axios">
               <q-item-section>
                  <q-item-label>AXIOS</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/util">
               <q-item-section>
                  <q-item-label>UTIL</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </div>
   </q-drawer>
</template>

<style scoped></style>
