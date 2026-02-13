<template>
  <div class="container mt-4">
    <h2 class="mb-3">cpu 테이블 (Symfony CSR)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-danger">
        <tr>
          <th>id_cpu</th>
          <th>name_cpu</th>
          <th>release_cpu</th>
          <th>core_cpu</th>
          <th>thread_cpu</th>
          <th>maxghz_cpu</th>
          <th>minghz_cpu</th>
          <th>type_code_cpu</th>
          <th>manf_code_cpu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="9" class="text-center text-muted">데이터 로딩 중...</td>
        </tr>
        <tr v-for="cpu in cpus" :key="cpu.id_cpu">
          <td>{{ cpu.id_cpu }}</td>
          <td>{{ cpu.name_cpu }}</td>
          <td>{{ cpu.release_cpu }}</td>
          <td>{{ cpu.core_cpu }}</td>
          <td>{{ cpu.thread_cpu }}</td>
          <td>{{ cpu.maxghz_cpu }}</td>
          <td>{{ cpu.minghz_cpu }}</td>
          <td>{{ cpu.type_code_cpu }}</td>
          <td>{{ cpu.manf_code_cpu }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useModuleCpuTotal } from 'src/services/moduleCpuTotal.js'

const { cpus, loading } = useModuleCpuTotal(9204) // Symfony
</script>

