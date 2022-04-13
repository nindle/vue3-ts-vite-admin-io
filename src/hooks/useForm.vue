<template>
  <div class="">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Activity name">
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item :label="item.label" v-for="(item, index) in config" :key="index">
        {{ item }}
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px">Cancel</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

const config = reactive({
  input: {
    type: 'input',
    label: '账号',
    hide: false,
  },
  switch: {
    type: 'switch',
    label: '开关',
  },
  checkbox: {
    type: 'checkbox',
    label: '选择框',
  },
  radio: {
    type: 'radio',
    label: '圆形选择框',
  },
  button: {
    type: 'button',
    label: '按钮',
  },
  select: {
    type: 'select',
    label: '下拉选择',
  },
  date: {
    type: 'date-picker',
    label: '日期',
  },
  datetime: {
    type: 'date-time',
    label: '日期时间',
  },
  month: {
    type: 'date-month',
    label: '月份',
  },
  ctime: {
    type: 'date-ctime',
    label: '开始结束时间',
  },
  time: {
    type: 'time',
    label: '时间',
  },
  number: {
    type: 'number',
    label: '数字',
  },
  slider: {
    type: 'slider',
    label: '进度条',
  },
  rate: {
    type: 'rate',
    label: '打星',
  },
  upload: {
    type: 'upload',
    label: '上传',
  },
  uploaddragger: {
    type: 'upload-dragger',
    label: '上传',
  },
});

const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const onSubmit = () => {
  console.log('submit!', toRaw(formState));
};

const wrapperCol = { span: 14 };
const labelCol = { style: { width: '150px' } };
</script>

<style scoped lang="scss"></style>
