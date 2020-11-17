<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="loginwrap">
          <div class="title">XXX后台管理系统</div>
          <div class="formarea">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名：">
                <el-input v-model="form.name"></el-input>
              </el-form-item><el-form-item label="密 码：">
                <el-input v-model="form.pwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        name:'',
        pwd:''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.loginwrap{
  width: 410px;
  height: 400px;
  margin: 0 auto;
  box-shadow: 1px 1px 10px #333 ;
  .title{
    margin: 20px 0;
  }
}

</style>