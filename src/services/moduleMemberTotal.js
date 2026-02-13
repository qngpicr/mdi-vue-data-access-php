// src/services/moduleMemberTotal.js
import { ref, onMounted } from 'vue'

export function useModuleMemberTotal(port) {
  const members = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(`https://localhost:${port}/api/members`)
      members.value = await res.json()
    } catch (err) {
      console.error('Member API 호출 오류:', err)
    } finally {
      loading.value = false
    }
  })

  return { members, loading }
}
