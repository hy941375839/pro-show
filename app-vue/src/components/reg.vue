<template>
<div>
  <div class="top">
    <img class="topLeft" src="../assets/left.png">
    <p class="topName">注册</p>
  </div>
  <mt-field class="uname" label="用户名" :placeholder="unameholder" v-model="username"></mt-field>
  <mt-field class="pwd" label="密码" :placeholder="upwdholder" v-model="password" type="password"></mt-field>
  <mt-field class="tel" label="电话号码" :placeholder="phoneholder" v-model="phone"></mt-field>
  <mt-button class="reg" size="small" type="primary" @click="login">注册</mt-button>
</div>
</template>

<script>
export default {
data(){
  return{
    unameholder:"请输入用户名",
    upwdholder:"请输入密码",
    phoneholder:"请绑定您的手机号码",
    username:"",
    password:"",
    phone:""
  };
},
 methods:{
      login(){
        var uname=this.uname;
        var phone=this.phone;
        var upwd=this.upwd;
        var reg=/^[a-z0-9]{3,12}$/i;
        if(!reg.test(uname)){
          this.$toast("用户名格式不正确");
          return;
        }
        if(!reg.test(upwd)){
          this.$toast("密码格式不正确");
          return;//失败停止执行
        }
        var reg2=/1[3-8]\d{9}/i;
        if(!reg2.test(phone)){
          this.$toast("手机格式不正确");
          return;
        }
        /* 与数据建立连接 */
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
    right: 45%;
  }
	.reg{
		color:#000;
		font-size: 1.2rem;
		width:80px;
		height:40px;
		background: #f5c443;
		margin-right: -180px;
		margin-top: 20px;
	}
	.uname,.pwd,.tel{
		border-bottom: 1px solid #ccc;
	}
</style>