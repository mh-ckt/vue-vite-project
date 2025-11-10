## vue 如何监听键盘事件？

在 vue 中监听键盘事件可以使用 v-on 配合键盘事件修饰符实现，常见的键盘事件如 keydown，keyup 等。

1. 监听所有的键盘事件

```vue
<template>
  <!-- 输入框中监听键盘按下事件 -->
  <input @keydown="handleKeydown" placeholder="按下任意键" />
</template>

<script setup>
// 监听所有的键名
const handleKeydown = (e) => {
  console.log('按下的键:', e.key) // 键名（如 "Enter"、"a"）
  console.log('键码:', e.keyCode) // 键码（如 Enter 是 13，已逐渐被废弃）
}
</script>
```

2. 监听特定的键盘事件（配合键盘事件的修饰符实现）

```vue
<template>
  <!-- 按 Enter 键触发 -->
  <input @keydown.enter="handleEnter" placeholder="按 Enter" />
</template>

<script setup>
// 监听特定的按钮
const handleEnter = () => {
  console.log('按下了 Enter！')
}
</script>
```

3. 监听组合键（修饰符组合）

```vue
<template>
  <!-- Ctrl + s 触发 -->
  <input @keydown.ctrl.s="handleSave" placeholder="Ctrl + s" />
</template>

<script setup>
// 监听组合键（修饰符组合）
const handleSave = () => {
  console.log('Ctrl + s 保存')
}
</script>
```

4. 全局监听键盘事件（在整个页面生效）

```vue
<template>
  <div>全局监听键盘事件</div>
</template>

<script setup>
const handleGlobalKeydown = (e) => {
  // 根据按键触发逻辑（示例：监听 ESC 键）
  if (e.key === 'Escape') {
    console.log('全局监听：按下了 ESC 键')
  } else if (e.key === 'Enter') {
    console.log('全局监听：按下了 Enter 键')
  }
}
// 组件挂载时绑定全局事件
onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})
// 组件卸载时移除事件（关键：避免内存泄漏）
onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>
```

## 怎么给 vue 定义全局的方法？

在 vue 中定义全局的方式有很多种，这里主要介绍 vue3 中定义全局方法方式。

1. 通过 app.config.globalProperties 挂载全局方法。

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 定义全局方法
app.config.globalProperties.$showToast = (message) => {
  alert(`提示：${message}`)
}
app.mount('#app')
```

在组件中使用

```vue
<template>
  <button @click="handleShowToastClick">点击触发全局提示</button>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
// 获取全局方法
const { proxy } = getCurrentInstance()
const handleShowToastClick = () => {
  const time = new Date(Date.now()).toLocaleString()
  proxy.$showToast(`当前时间：${time}`)
}
</script>
```

2. 使用 provide/inject（推荐）

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 使用provide 全局注入方法
app.provide('$sayHello', (name) => {
  alert(`hello：${name}`)
})
app.mount('#app')
```

在组件中使用

```vue
<template>
  <button @click="handleSayHello">点击说hello</button>
</template>
<script setup>
import { inject } from 'vue'
const $sayHello = inject('$sayHello')
const handleSayHello = () => {
  $sayHello('张三')
}
</script>
```

3. 通过插件方式定义（推荐用于复用）

如果全局方法较多，可封装为插件，插件方式更适合大型项目，便于管理和按需引入。

注意：上面的 getCurrentInstance 是 Vue 内部 API，官方文档明确指出其主要用于开发 Vue 插件或库，不建议在应用代码中直接使用。
