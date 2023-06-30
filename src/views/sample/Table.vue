<template>
   <q-page padding>
      <div class="q-pa-md">
         <q-table
            flat
            bordered
            title="Table Test"
            :rows="rows"
            :columns="columns"
            row-key="id"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            v-model:selected="selected"
            v-model:pagination="pagination"
            :loading="loading"
         >
            <template v-slot:top-right>
               <q-btn color="primary" icon-right="archive" label="Export to csv" no-caps @click="exportTable"></q-btn>
            </template>

            <template v-slot:body-cell-detail="props">
               <q-td :props="props">
                  <div>
                     <q-btn size="sm" color="secondary" label="상세보기" @click="onDetail(props.row)"></q-btn>
                  </div>
               </q-td>
            </template>

            <template v-slot:loading>
               <q-inner-loading showing color="primary"></q-inner-loading>
            </template>

            <template v-slot:no-data>
               <div class="full-width row flex-center text-accent q-gutter-sm">No datas....</div>
            </template>
         </q-table>
         <!--div class="row justify-center q-mt-md">
            <q-pagination v-model="pagination.page" color="grey-8" :max="pagesNumber" size="sm"></q-pagination>
         </!--div -->

         <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>

         <q-dialog v-model="isDetailPopup">
            <q-card style="width: 700px; max-width: 80vw">
               <q-card-section>
                  <div class="text-h6">상세보기</div>
               </q-card-section>

               <q-card-section class="q-pt-none"> {{ contents }} </q-card-section>

               <q-card-actions align="right" class="bg-white text-teal">
                  <q-btn flat label="OK" v-close-popup></q-btn>
               </q-card-actions>
            </q-card>
         </q-dialog>
      </div>
   </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
import { exportFile, useQuasar } from 'quasar'

const $q = useQuasar()

const columns = [
   { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
   { name: 'title', align: 'left', label: 'Title', field: 'title', sortable: true },
   { name: 'userId', align: 'center', label: 'USER ID', field: 'userId', sortable: true },
   {
      name: 'completed',
      required: true,
      label: 'Completed',
      align: 'center',
      field: (row) => row.completed,
      format: (val) => (val === true ? '예' : '아니오'),
      sortable: true,
   },
   { name: 'detail', align: 'center', label: '' },
]

const pagination = ref({
   sortBy: 'desc',
   descending: false,
   page: 1,
   rowsPerPage: 10,
   // rowsNumber: xx if getting data from a server
})

const rows = ref([])
const selected = ref([])
const pagesNumber = computed(() => Math.ceil(rows.value.length / pagination.value.rowsPerPage))
const loading = ref(false)

const getSelectedString = () => {
   return selected.value.length === 0
      ? ''
      : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.value.length}`
}

// 상세보기
const isDetailPopup = ref(false)
const contents = ref('')
const onDetail = (row) => {
   isDetailPopup.value = true
   contents.value = row.title
}

// Table data export

function wrapCsvValue(val, formatFn, row) {
   let formatted = formatFn !== void 0 ? formatFn(val, row) : val

   formatted = formatted === void 0 || formatted === null ? '' : String(formatted)

   formatted = formatted.split('"').join('""')
   /**
    * Excel accepts \n and \r in strings, but some other CSV parsers do not
    * Uncomment the next two lines to escape new lines
    */
   // .split('\n').join('\\n')
   // .split('\r').join('\\r')

   return `"${formatted}"`
}

const exportTable = () => {
   // naive encoding to csv format
   const content = [columns.map((col) => wrapCsvValue(col.label))]
      .concat(
         rows.value.map((row) =>
            columns
               .map((col) =>
                  wrapCsvValue(
                     typeof col.field === 'function'
                        ? col.field(row)
                        : row[col.field === void 0 ? col.name : col.field],
                     col.format,
                     row,
                  ),
               )
               .join(','),
         ),
      )
      .join('\r\n')

   const status = exportFile('table-export.csv', content, 'text/csv')

   if (status !== true) {
      $q.notify({
         message: 'Browser denied file download...',
         color: 'negative',
         icon: 'warning',
      })
   }
}

// Table data loading
const { proxy } = getCurrentInstance()
const getDatas = () => {
   loading.value = true
   proxy.$axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      rows.value = res.data
      loading.value = false
   })
}

onMounted(() => {
   loading.value = true
   setTimeout(getDatas, 1000)
})
</script>

<style scoped></style>
