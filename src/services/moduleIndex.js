// src/services/moduleIndex.js
import { ref, onMounted } from 'vue'

export function useModuleIndex(port) {
  const otherRoutes = ref([])
  const apiRoutes = ref([])
  const csrRoutes = ref([])

  onMounted(async () => {
    try {
      const res = await fetch(`https://localhost:${port}/routes`)
      const data = await res.json()

      data.forEach(r => {
        if (r.uri.startsWith('api/')) {
          apiRoutes.value.push(r)
        } else if (r.uri.startsWith('csr/')) {
          csrRoutes.value.push(r)
        } else if (r.uri.startsWith('ssr/')) {
          // SSR 라우트는 필요시 별도 처리
        } else {
          otherRoutes.value.push(r)
        }
      })
    } catch (err) {
      console.error('API 호출 오류:', err)
    }
  })

  return { otherRoutes, apiRoutes, csrRoutes }
}
