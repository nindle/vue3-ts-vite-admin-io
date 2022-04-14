<template>
  <div class="app">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-sub-menu :key="index" v-for="(el, index) in 6">
            <template #title>
              <span>
                <user-outlined />
                {{ `路由页面${el}` }}
              </span>
            </template>

            <a-sub-menu :key="index" v-for="(el, index) in 6">
              <template #title>
                <span>
                  <user-outlined />
                  {{ `路由子页面${el}` }}
                </span>
              </template>
              <a-menu-item :key="index" v-for="(el, index) in 4">
                {{ `路由子子页面${el}` }}
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
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
const value = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
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
