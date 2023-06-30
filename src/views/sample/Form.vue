<template>
   <q-page padding>
      <div class="q-pa-md" style="max-width: 400px">
         <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
               filled
               v-model="name"
               label="Your name *"
               hint="Name and surname"
               lazy-rules
               :rules="validator.name"
            ></q-input>

            <q-input filled type="number" v-model="age" label="Your age *" lazy-rules :rules="validator.age"></q-input>

            <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

            <div>
               <q-btn label="Submit" type="submit" color="primary"></q-btn>
               <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
            </div>
         </q-form>
      </div>
   </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()
const $q = useQuasar()
const name = ref(null)
const age = ref(null)
const accept = ref(false)

const validator = {
   name: [(val) => proxy.$validator.checkEmpty(val, 'Please input name')],
   age: [
      (val) => proxy.$validator.checkEmpty(val, 'Please input age'),
      (val) => proxy.$validator.checkAge(val, 'Please type a real age'),
   ],
}

const onSubmit = () => {
   if (accept.value !== true) {
      $q.notify({
         color: 'red-5',
         textColor: 'white',
         icon: 'warning',
         message: 'You need to accept the license and terms first',
      })
   } else {
      $q.notify({
         color: 'green-4',
         textColor: 'white',
         icon: 'cloud_done',
         message: 'Submitted',
      })
   }
}

const onReset = () => {
   name.value = null
   age.value = null
   accept.value = false
}
</script>

<style scoped></style>
