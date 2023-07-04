<script setup></script>

<template>
   <q-drawer show-if-above side="left" bordered>
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

<style scoped></style>
