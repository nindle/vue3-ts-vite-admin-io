import useForm from './useForm.vue';



const index = (Vue: any) => {
  console.log(Vue);

  Vue.component('useForm', useForm)
}

export default index