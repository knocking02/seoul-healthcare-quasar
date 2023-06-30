<template>
   <q-dialog ref="dialogRef" @hide="onDialogHide">
      <q-card style="width: 500px">
         <q-card-section :class="headerVariant">
            <div class="text-h6">{{ $util.capitalize(type) }}</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            {{ message }}
         </q-card-section>

         <q-card-actions align="right">
            <q-btn color="primary" label="Cancel" @click="onDialogCancel" v-if="isCancelShow" />
            <q-btn color="primary" label="OK" @click="onOKClick" />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { useDialogPluginComponent } from 'quasar'

const props = defineProps({
   type: {
      type: String,
      default: 'alert',
   },
   message: {
      type: String,
   },
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const isCancelShow = computed(() => props.type === 'confirm')

const headerVariant = computed(() => {
   let variant = ''
   switch (props.type) {
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

function onOKClick() {
   //console.log('ok')
   // on OK, it is REQUIRED to
   // call onDialogOK (with optional payload)
   onDialogOK()
   // or with payload: onDialogOK({ ... })
   // ...and it will also hide the dialog automatically
}
</script>
