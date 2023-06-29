<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import MessageModal from './components/modal/MessageModal.vue'
import { useMessageModalStore } from './stores/messageModal'

const messageModalStore = useMessageModalStore()
onMounted(() => {
   window.onpopstate = () => {
      messageModalStore.close()
   }
})
</script>

<template>
   <router-view></router-view>
   <MessageModal></MessageModal>
</template>

<style scoped></style>
