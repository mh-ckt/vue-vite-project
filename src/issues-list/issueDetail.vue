<script setup>
import IssuesList from '@/data/issues'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const currentComponent = computed(() => {
  return IssuesList.find((item) => item.id === id)?.component
})
</script>

<template>
  <component :is="currentComponent"></component>
</template>
