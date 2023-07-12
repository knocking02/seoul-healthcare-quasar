import { ref, toRef, watch } from 'vue'

export function useNav(props) {
   const propsDrawerOpen = toRef(props, 'leftDrawerOpen')
   const isDrawerOpen = ref(true)

   watch(propsDrawerOpen, (value) => {
      isDrawerOpen.value = value
   })

   return { isDrawerOpen }
}
