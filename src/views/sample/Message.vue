<template>
   <q-page padding>
      <h4>공통 Message</h4>
      <br />
      <div class="q-pa-md q-gutter-sm">
         <q-btn color="primary" label="Alert" @click="alertDialog"></q-btn>
         <q-btn color="secondary" label="Confirm" @click="confirm"></q-btn>
         <q-btn color="deep-orange" glossy label="Error" @click="error"></q-btn>
      </div>
   </q-page>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const proxy = getCurrentInstance().proxy
console.log(proxy)

const alertDialog = () => {
   proxy.$dialog.open({
      type: 'alert',
      message: 'Some message..',
   })
}

const createMember = () => {
   alert('success')
}

const confirm = () => {
   proxy.$dialog.open({
      type: 'confirm',
      message: 'Would you like to turn on the wifi?',
      action: createMember,
   })
}

const error = () => {
   proxy.$dialog.open({
      type: 'error',
      message: '403 Error',
   })
}
</script>

<style></style>
