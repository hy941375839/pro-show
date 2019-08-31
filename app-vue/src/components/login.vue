<template>
	<div>
		<div class="top">
      <img class="topLeft" src="../assets/left.png">
      <p class="topName">登录</p>
    </div>
		<!-- <div class="top">
			<img src=""/>
		</div> -->
		<div class="login">
			<mt-field class="uname" label="账号" placeholder="请输入您的用户名" v-model="username"></mt-field>
			<mt-field type="password" class="upwd" label="密码" placeholder="请输入您的密码" v-model="password"></mt-field>
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
					this.axios.get(
					"login",
					{
						params:{username:n,password:p}
					}
				).then(res=>{
					console.log(res);
				})
				}else{
					this.$messagebox("","用户名或者密码错误");
				}
      },
      reg(){
        this.$router.push('/reg');
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
	.uname,.upwd{
		height:60px;
		border-bottom: 1px solid #ddd;
	}
	.loginBtn,.regBtn{
		width:120px;
		height:40px;
		margin-top: 35px;
		background:#f5c443;
		padding-top: 8px;
	}
	.loginBtn{
		margin-right:50px;
	}
</style>
