// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import IssuesList from '@/issues-list/index.vue'

// 2. 定义路由规则
const routes = [
  {
    path: '/issues-list',
    component: IssuesList,
    children: [
      {
        path: 'issues1',
        component: () => import('@/issues-list/issues01.vue'),
      },
    ],
  },
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 4. 导出路由实例
export default router
