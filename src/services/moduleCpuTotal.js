// src/services/moduleCpuTotal.js
import { ref, onMounted } from 'vue'

export function useModuleCpuTotal(port) {
  const cpus = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(`https://localhost:${port}/api/cpus`)
      cpus.value = await res.json()
    } catch (err) {
      console.error('CPU API 호출 오류:', err)
    } finally {
      loading.value = false
    }
  })

  return { cpus, loading }
}
