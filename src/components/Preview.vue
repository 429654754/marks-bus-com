<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import Prism from 'prismjs'
import '../assets/prism.css' // 主题 CSS

const isDev = import.meta.env.MODE === 'development'

const props = defineProps<{
  compName: String,
  demoName: String
}>()

const sourceCode = ref<string>('')
const getSourceCode = async () => {
  if (isDev) {
    sourceCode.value = (
      await import(/* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`)
    ).default
  } else {
    sourceCode.value = await fetch(`/marks-bus-com/packages/${props.compName}/docs/${props.demoName}.vue`).then((res) => res.text())
  }
  await nextTick()
  Prism.highlightAll()
}
onMounted(getSourceCode)

const codeVisible = ref<boolean>(false)
const showCode = () => {
  codeVisible.value = !codeVisible.value
}
</script>

<template>
  <div class="marks-preview">
    <section>
      <slot></slot>
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre class="language-html">
        <code class="language-html">{{ sourceCode }}</code>
      </pre>
    </div>
    
    <div class="preview-bottom" @click="showCode">
      <span name="Code">查看代码</span>
    </div>
  </div>
</template>

<style lang="less">
pre {
  line-height: 0;
}
.marks-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 10px;
  border-bottom: 1px dashed #e7e7e7;
  section {
    margin: 15px;
  }
}

.source-code {
  max-height: 500px;
}
.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
  cursor: pointer;
}
</style>