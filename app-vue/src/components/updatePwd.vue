<template>
  <div>
    <div class="top">
      <div @click="back">
        <img class="topLeft" src="../assets/left.png">
      </div>
      <p class="topName">修改密码</p>
    </div>
    <mt-field label="原来密码" placeholder="请输入您原先的密码" v-model="original"></mt-field>
    <mt-field label="新密码" placeholder="请输入您要修改的密码,3-10位数字字母" v-model="New"></mt-field>
    <mt-field label="重复密码" placeholder="请再次输入您的密码" v-model="regInput"></mt-field>
    <mt-button class="update" size="small" @click="update">确认修改</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      original:"",
      New:"",
      regInput:""
    }
  },
  methods:{
    back(){
      this.$router.push('/foot');
    },
    update(){
      var original=this.original;
      var New=this.New;
      var regInputreg=this.regInput;
      var regInputreg=newreg=/^[a-z0-9]{3,10}$/i;
      if((original!=undefined)&&regInputreg.test(regInputreg)&&newreg.test(newreg)){
        this.axios.get('/',
        {
          params:{
            oldPassword:original,
            newPassword:New
          }
        })
      }
    } 
  }
}
</script>
<style scoped>
  .top{
    width:100%;
    height:48px;
    display: flex;
    justify-content: space-between;
    background: #f5c443;
    margin-bottom: 10px;
  }
  .topLeft{
    width:30px;
    height:30px;
    margin-top:8px;
    font-size: 20/16rem;
  }
  .topName{
    position: relative;
    top:7px;
    right: 38%;
  }
  .update{
    background: #f5c443;
    padding-top:7px;
    margin-top: 20px;
    margin-right: -180px;
  }
</style>