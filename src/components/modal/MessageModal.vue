<template>
   <q-dialog ref="dialog" v-model="messageModalStore.isShow" @hide="close">
      <q-card style="width: 500px">
         <q-card-section :class="headerVariant">
            <div class="text-h6">{{ $util.capitalize(messageModalStore.options.type) }}</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            {{ messageModalStore.options.message }}
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="cancel" color="primary" v-close-popup v-if="isCancelShow"></q-btn>
            <q-btn flat label="OK" color="primary" @click="confirm"></q-btn>
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMessageModalStore } from '../../stores/messageModal'

const messageModalStore = useMessageModalStore()

const dialog = ref(null)

const headerVariant = computed(() => {
   let variant = ''
   switch (messageModalStore.options.type) {
      case 'alert':
         variant = 'text-primary'
         break
      case 'confirm':
         variant = 'text-secondary'
         break
      case 'error':
         variant = 'text-deep-orange'
         break
      default:
         variant = 'text-light'
   }
   return variant
})
const isCancelShow = computed(() => messageModalStore.options.type === 'confirm')

const confirm = () => {
   dialog.value.hide()
   if (messageModalStore.options.type == 'confirm' && typeof messageModalStore.options.callFnc === 'function') {
      messageModalStore.options.callFnc()
   }
}

const close = () => {
   messageModalStore.close()
}
</script>

<style></style>
