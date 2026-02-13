<template>
  <div class="container mt-4">
    <h2 style="margin-top:20px">RouteInfoController(CI4)</h2>

    <!-- 기타 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-secondary">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in otherRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <router-link :to="`/ci4/${r.uri}`">
              /ci4/{{ r.uri }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- API 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-secondary">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in apiRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <!-- API는 외부 호출이므로 router-link 대신 a 태그 유지 -->
            <a :href="`https://localhost:9202/${r.uri}`" target="_blank">
              /ci4/{{ r.uri }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- CSR 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-secondary">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in csrRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <router-link :to="`/ci4/${r.uri}`">
              /ci4/{{ r.uri }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const otherRoutes = ref([])
const apiRoutes = ref([])
const csrRoutes = ref([])

onMounted(async () => {
  const res = await fetch('https://localhost:9202/routes') // CI4 REST API 호출
  const data = await res.json()

  data.forEach(r => {
    if (r.uri.startsWith('api/')) apiRoutes.value.push(r)
    else if (r.uri.startsWith('csr/')) csrRoutes.value.push(r)
    else if (r.uri.startsWith('ssr/')) {
      // SSR 라우트는 필요시 별도 처리
    }
    else otherRoutes.value.push(r)
  })
})
</script>

<style>
th.method-col, td.method-col { width: 10%; }
th.uri-col, td.uri-col { width: 80%; }
</style>
