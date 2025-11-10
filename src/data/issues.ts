import issues01 from '@/issues-list/issues01.vue'
import issues02 from '@/issues-list/issues02.vue'
import issues03 from '@/issues-list/issues03.vue'

let issuesList = [
  {
    title: 'vue如何监听键盘事件？',
    link: '/issues',
    id: '01',
    component: issues01,
  },
  {
    title: '怎么给vue定义全局的方法？',
    link: '/issues',
    id: '02',
    component: issues02,
  },
  {
    title: 'vue怎么实现强制刷新组件？',
    link: '/issues',
    id: '03',
    component: issues03,
  },
]

export default issuesList
