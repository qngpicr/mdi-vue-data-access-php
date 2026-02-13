// src/services/moduleDeviceTotal.js
import { ref, onMounted } from 'vue'

export function useModuleDeviceTotal(port) {
  const devices = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(`https://localhost:${port}/api/devices`)
      devices.value = await res.json()
    } catch (err) {
      console.error('Device API 호출 오류:', err)
    } finally {
      loading.value = false
    }
  })

  return { devices, loading }
}
