import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ci3Index from '../views/Ci3/Ci3Index.vue'
import Ci3CsrCpuTotal from '../views/Ci3/Ci3CsrCpuTotal.vue'
import Ci3CsrDeviceTotal from '../views/Ci3/Ci3CsrDeviceTotal.vue'
import Ci3CsrMemberTotal from '../views/Ci3/Ci3CsrMemberTotal.vue'

const routes = [
  { path: '/', component: HomeView },   // 기본 웰컴 화면
  { path: '/ci3', component: Ci3Index },  // CI3 라우트 테이블 화면
  { path: '/csr/cpus', component: Ci3CsrCpuTotal },
  { path: '/csr/devices', component: Ci3CsrDeviceTotal },
  { path: '/csr/members', component: Ci3CsrMemberTotal },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
