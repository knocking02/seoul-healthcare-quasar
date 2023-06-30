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

const { proxy } = getCurrentInstance()

const alertDialog = () => {
   proxy.$dialog.open('alert', 'Some message..')
}

const createMember = () => {
   alert('success')
}

const confirm = () => {
   proxy.$dialog.open('confirm', 'Would you like to turn on the wifi?', createMember)
}

const error = () => {
   proxy.$dialog.open('error', '403 Error')
}
</script>

<style></style>
