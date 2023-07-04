import { useAuthStore } from './auth/useAuth.js'

const useStore = () => ({
   auth: useAuthStore(),
})

export default useStore
