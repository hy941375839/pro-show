<template>
	<div>
		<div class="top">
			<!-- <img src=""/> -->
		</div>
		<div class="login">
			<mt-field class="uname" label="账号" placeholder="请输入您的用户名" v-model="username"></mt-field>
			<mt-field type="password" class="upwd" label="密码" placeholder="请输入您的密码" v-model="password"></mt-field>
			<div class="select">
				<span class="userType">用户类型</span> 
				<select class="option">
					<option value="0">用户</option>
					<option value="1">商家</option>
					<option value="2">管理员</option>
				</select>
			</div>
				<mt-button class="loginBtn" type="default" @click.native="Login">登录</mt-button>
				<mt-button class="regBtn" type="default" @click.native="reg">注册</mt-button>
		</div>
		<div classs="bottom"></div>
	</div>
</template>
<script>
  export default{
    data(){
			return{
				username:"",
				password:""
			}
    },
    methods:{
      Login(){
				var n=this.username;
				var p=this.password;
				var ureg=/^[a-z0-9]{6-12}$/i;
				var preg=/^[a-z0-9]{3-10}$/i;
				if(ureg.test(n)&&preg.test(p)){
					this.$router.push('/index');
				}else{
					this.$messagebox("","用户名或者密码错误");
				}
				this.axios.get(
					"login",
					{
						params:{username:n,password:p}
					}
				).then(res=>{
					console.log(res);
				})
      },
      reg(){
        this.$router.push('/reg');
      }
    }
  }
</script>
<style scoped>
	.uname,.upwd,.select{
		height:60px;
	}
	.userType{
		font-size: 16px;
		margin-left: -157px;
		margin-right: 33px;
	}
	.select{
		line-height:65px;
	}
	.option{
		width:90px;
		height:32px;
		font-size: 18px;
	}
	.loginBtn,.regBtn{
		width:120px;
		height:40px;
		margin-top: 35px;
	}
	.loginBtn{
		margin-right:50px;
	}
</style>
