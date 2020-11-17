<template>
  <div id="login">
    <div class="login-wrap">
    <div class="login-title">☆小七0-1后台管理系统☆</div>
    <el-form class="login-form"  :model="loginForm" :rules="rules" ref='loginForm'>
      <el-form-item prop='user'>
        <el-input  prefix-icon="el-icon-user" placeholder="账号" clearable v-model='loginForm.user' ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input  prefix-icon="el-icon-lock" placeholder="密码" show-password v-model='loginForm.pass'></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" class="login-form--botton" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm:{
          user:'admin',
          pass:'123456'
      },
      rules:{
        user:[
          {required:true,message:'Please enter the correct username.',tigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(val){
      this.$refs[val].validate(valid=>{
        if(valid){
          console.log('Enter Home!');
          this.$router.push('home')
        }else{
          console.log('Error Submit!');
          return false
        }
      })
    } 
  }
  ,
  /* 未完待续 - -
     - - tips
     - - 登录验证
     - - 第三方登录
  */  

};
</script>

<style lang='scss'>
@import '@/style/business/cmsLogin/index.scss';
</style>