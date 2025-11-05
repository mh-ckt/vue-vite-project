// src/router/index.js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

// 2. 定义路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/issues-list',
    component: () => import('@/views/issues.vue'),
  },
  {
    path: '/issues/:id',
    name: 'IssueDetail',
    component: () => import('@/issues-list/issueDetail.vue'),
  },
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 4. 导出路由实例
export default router
