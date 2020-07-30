 /* jshint esversion: 6 */ 
import Vue from 'vue';
import axios from 'axios';
import router from './router';
import VueAxios from 'vue-axios';
import App from './App.vue';

//根据前段的跨域方式做调整:接口代理的方式/a/b:/api/a/b=>/a/b
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;

/**
 * 接口规范
 * status:0;
 * data:[]
 * msg:''
 * 接口错误拦截
 */
axios.interceptors.response.use(function(response){

  let res= response.data;
  //状态码0是成功
  if(res.status==0){
    return res.data;
//状态码10：未登录=
  }else if(res.status ==10){
    window.location.href ='/#/login';
  }else{
    alert (res.msg);
  }
});
Vue.use(VueAxios,axios);
Vue.config.productionTip = false ;

new Vue({
router,
  render: h => h(App),
}).$mount('#app');
