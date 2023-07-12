<template>
   <q-page padding>
      <div class="q-pa-md">
         <div class="column">
            <div class="col" style="padding: 15px">
               <q-select
                  outlined
                  v-model="locale"
                  :options="supportedLocales"
                  @update:model-value="Tr.switchLanguage"
                  label="언어선택"
                  style="width: 200px"
               />
            </div>
            <div class="col" style="padding: 15px">
               <div class="text-h7">{{ $t('label.name') }}</div>
               <div class="text-h7">{{ $t('title.T0001') }}</div>
               <div class="text-h7">{{ $t('message.M0001', { item: t('label.name') }) }}</div>
               <div class="text-h7">{{ $t('error.internal1') }}</div>
            </div>
            <q-separator></q-separator>
            <div class="col" style="padding: 15px">
               <q-btn color="primary" label="Message" @click="alertDialog"></q-btn>
            </div>
            <q-separator></q-separator>
            <div class="col" style="padding: 15px">
               <div class="text-h7">
                  숫자와 통화 : {{ $t('message.donations', { donations: $n(100, 'currencyFormat') }) }}
               </div>
            </div>
            <q-separator></q-separator>
            <div class="col" style="padding: 15px">
               <div class="text-h7">
                  날짜와 시간 : {{ $d(new Date(), 'longFormat') }} && {{ $d(new Date(), 'shortFormat') }}
               </div>
            </div>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/modules/i18n/translation'

const { t, locale } = useI18n()
const supportedLocales = Tr.supportedLocales
const { proxy } = getCurrentInstance()

const alertDialog = () => {
   proxy.$dialog.open({
      type: 'alert',
      message: t('message.M0001', { item: t('label.name') }),
   })
}
</script>

<style scoped></style>
