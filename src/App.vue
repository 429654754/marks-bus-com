<script setup lang="ts">
import ComponentList from 'packages/list.json'
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map((item: { compName: any; compZhName: any; }) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<template>
  <div class="marks-doc">
    <aside>
      <section
        v-for="(link, index) in data.links"
        :key="index"
        class="link-item"
      >
        <router-link :to="link.path">
          {{ link.name }}
        </router-link>
      </section>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.marks-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    border-right: 1px solid #ccc;
    .link-item {
      a {
        display: block;
        padding: 10px 0 10px 15px;
        box-sizing: border-box;
        border-right: 1px solid transparent;
      }
      a:hover {
        background-color: rgba(66, 185, 131, .3);
        border-right: 1px solid #42b983;
      }
      .router-link-active {
        background-color: rgba(66, 185, 131, .3);
        border-right: 1px solid #42b983;
      }
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>