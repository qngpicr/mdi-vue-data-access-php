<template>
  <div class="container mt-4">
    <h2 style="margin-top:20px">RouteInfoController(Laravel)</h2>

    <!-- 기타 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-dark">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in otherRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <router-link :to="`/laravel/${r.uri}`">
              /laravel/{{ r.uri }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- API 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-dark">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in apiRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <a :href="`https://localhost:9203/${r.uri}`" target="_blank">
              /laravel/{{ r.uri }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- CSR 라우트 -->
    <table class="table table-bordered table-sm table-hover">
      <thead class="table-dark">
        <tr><th class="method-col">HTTP Method</th><th class="uri-col">URI</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in csrRoutes" :key="r.uri + r.method">
          <td>{{ r.method }}</td>
          <td>
            <router-link :to="`/laravel/${r.uri}`">
              /laravel/{{ r.uri }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useModuleIndex } from 'src/services/moduleIndex.js'

const { otherRoutes, apiRoutes, csrRoutes } = useModuleIndex(9203) // Laravel
</script>


<style>
th.method-col, td.method-col { width: 10%; }
th.uri-col, td.uri-col { width: 80%; }
</style>
