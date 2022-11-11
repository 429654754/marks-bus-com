<!--交互式预览实例-->
<template>
  <div>
    <m-button @click="onClick(1)">第一个</m-button>
    <m-button @click="onClick(2)">第二个</m-button>
    <m-button @click="onClick(3)">第三个</m-button>
  </div>
</template>

<script setup lang="ts">
	const onClick = (num: number) => { alert(`我是第 ${num} 个自定义按钮`) }
</script>