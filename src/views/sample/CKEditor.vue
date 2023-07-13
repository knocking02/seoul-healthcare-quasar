<template>
   <q-page padding>
      <ckeditor :editor="editor" v-model="editorData" @ready="onReady" :config="editorConfig"></ckeditor>
   </q-page>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
const editor = ref(ClassicEditor)
const editorData = ref('<p>Content of the editor.</p>')
const editorConfig = {}

const onReady = (editor) => {
   // Insert the toolbar before the editable area.
   editor.ui.view.editable.element.style.height = '500px'
   editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement())
}
</script>

<style scoped>
.ck-editor__editable_inline {
   min-height: 400px;
}
</style>
