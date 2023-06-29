<template>
   <q-page padding>
      <h4>공통 Message</h4>
      <br />
      <div class="q-pa-md q-gutter-sm">
         <q-btn color="primary" label="Alert" @click="alertPopup"></q-btn>
         <q-btn color="secondary" label="Confirm" @click="confirmPopup"></q-btn>
         <q-btn color="deep-orange" glossy label="Error" @click="errorPopup"></q-btn>
      </div>
   </q-page>
</template>

<script setup>
import { useMessageModalStore } from '../../stores/messageModal.js'
const messageModalStore = useMessageModalStore()

const alertPopup = () => {
   messageModalStore.open({
      type: 'alert',
      message: '이름을 입력해주세요.',
   })
}

const createMember = () => {
   alert('Success')
}

const confirmPopup = () => {
   messageModalStore.open({
      type: 'confirm',
      message: '회원가입 하시겠습니까?',
      callFnc: createMember,
   })
}

const errorPopup = () => {
   messageModalStore.open({
      type: 'error',
      message: '403 Error',
   })
}
</script>

<style></style>
