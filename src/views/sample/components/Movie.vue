<template>
   <div>
      <q-card flat bordered class="my-card" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
         <q-card-section>
            <div class="row items-center no-wrap">
               <div class="col">
                  <div class="text-h6">{{ title }} Tab</div>
                  <div class="text-subtitle2">by John Doe</div>
               </div>

               <div class="col-auto">
                  <q-btn color="grey-7" round flat icon="more_vert">
                     <q-menu cover auto-close>
                        <q-list>
                           <q-item clickable>
                              <q-item-section>Remove Card</q-item-section>
                           </q-item>
                           <q-item clickable>
                              <q-item-section>Send Feedback</q-item-section>
                           </q-item>
                           <q-item clickable>
                              <q-item-section>Share</q-item-section>
                           </q-item>
                        </q-list>
                     </q-menu>
                  </q-btn>
               </div>
            </div>
         </q-card-section>

         <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
         </q-card-section>

         <q-separator></q-separator>

         <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
         </q-card-actions>
      </q-card>
   </div>
</template>

<script setup>
const props = defineProps({
   title: {
      type: String,
   },
})
</script>

<style scoped></style>
