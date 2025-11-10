<script setup lang="ts">
import { useRouter } from 'vue-router'
import IssuesList from '@/data/issues'
const router = useRouter()

const toRouter = (id: string) => {
  return router.push({
    name: 'IssueDetail',
    params: { id },
  })
}
</script>

<template>
  <p
    v-for="item in IssuesList"
    class="issues-title"
    @click="toRouter(item.id)"
    :key="item.id"
    :to="item.link"
  >
    {{ item.title }}
  </p>
</template>

<style lang="less">
.issues-title {
  cursor: pointer;
}

.issues-title:hover {
  color: @primary-color;
}
</style>
