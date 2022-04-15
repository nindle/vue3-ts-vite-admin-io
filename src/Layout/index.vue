<template>
  <div class="app">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-sub-menu @titleClick="navPath('123')" :key="index" v-for="(el, index) in navPathList">
            <template #title>
              <span>
                <user-outlined />
                {{ el.name }}
              </span>
            </template>

            <a-sub-menu @titleClick="navPath('123')" :key="index" v-for="(e, index) in el.children">
              <template #title>
                <span>
                  <user-outlined />
                  {{ e.name }}
                </span>
              </template>
              <a-menu-item @Click="navPath('123')" :key="index" v-for="(i, index) in e.children">
                {{ i.name }}
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>

        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
const value = ref<string>('');

const navPathList = ref<any>([
  {
    name: '菜单管理',
    path: 'home',
    mate: true,
    children: [
      { name: '路由菜单', path: 'home_q', mate: true },
      { name: '员工菜单', path: 'home_w', mate: true },
      {
        name: '权限菜单',
        path: 'home_s',
        mate: true,
        children: [
          { name: '一级菜单', path: 'home_qw', mate: true },
          { name: '二级菜单', path: 'home_qe', mate: true },
          { name: '三级菜单', path: 'home_qs', mate: true },
        ],
      },
    ],
  },
  {
    name: '菜单管理',
    path: 'home',
    mate: true,
    children: [
      { name: '路由菜单', path: 'home_q', mate: true },
      { name: '员工菜单', path: 'home_w', mate: true },
      {
        name: '权限菜单',
        path: 'home_s',
        mate: true,
        children: [
          { name: '一级菜单', path: 'home_qw', mate: true },
          { name: '二级菜单', path: 'home_qe', mate: true },
          { name: '三级菜单', path: 'home_qs', mate: true },
        ],
      },
    ],
  },
  {
    name: '菜单管理',
    path: 'home',
    mate: true,
    children: [
      { name: '路由菜单', path: 'home_q', mate: true },
      { name: '员工菜单', path: 'home_w', mate: true },
      {
        name: '权限菜单',
        path: 'home_s',
        mate: true,
        children: [
          { name: '一级菜单', path: 'home_qw', mate: true },
          { name: '二级菜单', path: 'home_qe', mate: true },
          { name: '三级菜单', path: 'home_qs', mate: true },
        ],
      },
    ],
  },
]);

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

const navPath = (path: string) => {
  console.log(path);
};
</script>

<style scoped lang="scss">
.ant-layout {
  height: 100vh;
  overflow: hidden;
  .ant-layout-content {
    overflow-y: scroll;
  }
}
</style>
