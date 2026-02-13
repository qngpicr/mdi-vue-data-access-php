<template>
  <div class="container mt-4">
    <h2 class="mb-3">member 테이블 (CSR)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>id_member</th>
          <th>id</th>
          <th>pass</th>
          <th>name</th>
          <th>email</th>
          <th>regist_day</th>
          <th>role</th>
          <th>status</th>
          <th>email_verified</th>
          <th>fail_count</th>
          <th>last_login</th>
          <th>updated_at</th>
          <th>deleted_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="13" class="text-center text-muted">데이터 로딩 중...</td>
        </tr>
        <tr v-for="member in members" :key="member.id_member">
          <td>{{ member.id_member }}</td>
          <td>{{ member.id }}</td>
          <td>{{ member.pass }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.regist_day }}</td>
          <td>{{ member.role }}</td>
          <td>{{ member.status }}</td>
          <td>{{ member.email_verified }}</td>
          <td>{{ member.fail_count }}</td>
          <td>{{ member.last_login }}</td>
          <td>{{ member.updated_at }}</td>
          <td>{{ member.deleted_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useModuleMemberTotal } from 'src/services/moduleMemberTotal.js'

const { members, loading } = useModuleMemberTotal(9201) // CI3
</script>


<style>
.table {
  font-size: 0.9rem;
}
</style>
