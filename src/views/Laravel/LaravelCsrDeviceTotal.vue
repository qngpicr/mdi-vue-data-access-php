<template>
  <div class="container mt-4">
    <h2 class="mb-3">device 테이블 (Laravel CSR)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>id_device</th>
          <th>name_device</th>
          <th>id_cpu</th>
          <th>lineup_device</th>
          <th>release_device</th>
          <th>weight_device</th>
          <th>type_code_device</th>
          <th>manf_code_device</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="8" class="text-center text-muted">데이터 로딩 중...</td>
        </tr>
        <tr v-for="device in devices" :key="device.id_device">
          <td>{{ device.id_device }}</td>
          <td>{{ device.name_device }}</td>
          <td>{{ device.id_cpu }}</td>
          <td>{{ device.lineup_device }}</td>
          <td>{{ device.release_device }}</td>
          <td>{{ device.weight_device }}</td>
          <td>{{ device.type_code_device }}</td>
          <td>{{ device.manf_code_device }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const devices = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://localhost:9203/api/devices')
    devices.value = await res.json()
  } catch (err) {
    console.error('API 호출 오류:', err)
  } finally {
    loading.value = false
  }
})
</script>
