<template>
   <q-page padding>
      <div class="q-pa-md">
         <div class="column">
            <div class="col">
               <q-select
                  outlined
                  v-model="$i18n.locale"
                  :options="$i18n.availableLocales"
                  label="언어선택"
                  style="width: 200px"
               />
            </div>
            <div class="col">
               <div class="text-h6">{{ $t('label.name') }}</div>
               <div class="text-h6">{{ $t('title.T0001') }}</div>
               <div class="text-h6">{{ $t('message.M0001') }}</div>
               <div class="text-h6">{{ $t('error.internal1') }}</div>
            </div>
            <div class="col">
               <q-btn color="primary" label="Message" @click="alertDialog"></q-btn>
            </div>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { proxy } = getCurrentInstance()

const alertDialog = () => {
   proxy.$dialog.open({
      type: 'alert',
      message: t('message.M0001', { item: t('label.name') }),
   })
}
</script>

<style scoped></style>
