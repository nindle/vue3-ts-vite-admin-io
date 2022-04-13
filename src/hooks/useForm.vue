<template>
  <div class="">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Activity name">
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item :label="item.label" v-for="(item, index) in configList" :key="index">
        <a-input v-if="item.type === 'input'" v-model:value="formState.name" />
        <a-switch v-if="item.type === 'switch'" v-model:checked="formState.delivery" />
        <a-checkbox-group v-if="item.type === 'checkbox'" v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>

        <a-radio-group v-if="item.type === 'radio'" v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>

        <a-select v-if="item.type === 'select'" v-model:value="formState.resource" :options="[]" />

        <a-date-picker
          v-if="item.type === 'date-picker'"
          v-model:value="formState['date-picker']"
          value-format="YYYY-MM-DD"
        />

        <a-date-picker
          v-if="item.type === 'date-time'"
          v-model:value="formState['date-time-picker']"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
        />

        <a-date-picker
          v-if="item.type === 'date-month'"
          v-model:value="formState['month-picker']"
          value-format="YYYY-MM"
          picker="month"
        />

        <a-range-picker
          v-if="item.type === 'date-ctime'"
          v-model:value="formState['range-picker']"
          value-format="YYYY-MM-DD"
        />

        <a-time-picker
          v-if="item.type === 'time'"
          v-model:value="formState['time-picker']"
          value-format="HH:mm:ss"
        />

        <a-input-number
          v-if="item.type === 'number'"
          v-model:value="formState['input-number']"
          :min="1"
          :max="10"
        />

        <a-slider
          v-if="item.type === 'slider'"
          v-model:value="formState"
          :marks="{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }"
        />

        <a-rate v-if="item.type === 'rate'" v-model:value="formState" allow-half />

        <a-upload
          v-if="item.type === 'upload'"
          v-model:fileList="formState.upload"
          name="logo"
          action="/upload.do"
          list-type="picture"
        >
          <a-button>
            <template #icon><UploadOutlined /></template>
            Click to upload
          </a-button>
        </a-upload>

        <a-upload-dragger
          v-if="item.type === 'upload-dragger'"
          v-model:fileList="formState.upload"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </a-upload-dragger>
        <a-button v-if="false" type="primary" @click="onSubmit">Create</a-button>
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
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';
interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
  upload: any;
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

const configList = Object.values(config);
configList.forEach(item => {
  console.log(item.type);
});

const configKeys = Object.entries(config);
console.log(configKeys);

// for (const item in ) {
//   console.log(item);

//   switch (item) {
//     case 'input':
//       console.log('input');

//       break;

//     default:
//       break;
//   }
// }

const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  upload: [],
});

const onSubmit = () => {
  console.log('submit!', toRaw(formState));
};

const wrapperCol = { span: 14 };
const labelCol = { style: { width: '150px' } };
</script>

<style scoped lang="scss"></style>
