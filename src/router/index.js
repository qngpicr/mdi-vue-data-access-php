import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Ci3Index from '../views/Ci3/Ci3Index.vue'
import Ci3CsrCpuTotal from '../views/Ci3/Ci3CsrCpuTotal.vue'
import Ci3CsrDeviceTotal from '../views/Ci3/Ci3CsrDeviceTotal.vue'
import Ci3CsrMemberTotal from '../views/Ci3/Ci3CsrMemberTotal.vue'

import Ci4Index from '../views/Ci4/Ci4Index.vue'
import Ci4CsrCpuTotal from '../views/Ci4/Ci4CsrCpuTotal.vue'
import Ci4CsrDeviceTotal from '../views/Ci4/Ci4CsrDeviceTotal.vue'
import Ci4CsrMemberTotal from '../views/Ci4/Ci4CsrMemberTotal.vue'

import LaravelIndex from '../views/Laravel/LaravelIndex.vue'
import LaravelCsrCpuTotal from '../views/Laravel/LaravelCsrCpuTotal.vue'
import LaravelCsrDeviceTotal from '../views/Laravel/LaravelCsrDeviceTotal.vue'
import LaravelCsrMemberTotal from '../views/Laravel/LaravelCsrMemberTotal.vue'

import SymfonyIndex from '../views/Symfony/SymfonyIndex.vue'
import SymfonyCsrCpuTotal from '../views/Symfony/SymfonyCsrCpuTotal.vue'
import SymfonyCsrDeviceTotal from '../views/Symfony/SymfonyCsrDeviceTotal.vue'
import SymfonyCsrMemberTotal from '../views/Symfony/SymfonyCsrMemberTotal.vue'

const routes = [
  { path: '/', component: HomeView },   // 기본 웰컴 화면

  { path: '/ci3', component: Ci3Index },
  { path: '/ci3/csr/cpus', component: Ci3CsrCpuTotal },
  { path: '/ci3/csr/devices', component: Ci3CsrDeviceTotal },
  { path: '/ci3/csr/members', component: Ci3CsrMemberTotal },

  { path: '/ci4', component: Ci4Index },
  { path: '/ci4/csr/cpus', component: Ci4CsrCpuTotal },
  { path: '/ci4/csr/devices', component: Ci4CsrDeviceTotal },
  { path: '/ci4/csr/members', component: Ci4CsrMemberTotal },

  { path: '/laravel', component: LaravelIndex },
  { path: '/laravel/csr/cpus', component: LaravelCsrCpuTotal },
  { path: '/laravel/csr/devices', component: LaravelCsrDeviceTotal },
  { path: '/laravel/csr/members', component: LaravelCsrMemberTotal },

  { path: '/symfony', component: SymfonyIndex },
  { path: '/symfony/csr/cpus', component: SymfonyCsrCpuTotal },
  { path: '/symfony/csr/devices', component: SymfonyCsrDeviceTotal },
  { path: '/symfony/csr/members', component: SymfonyCsrMemberTotal },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router