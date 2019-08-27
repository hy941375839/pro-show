<template>
  <div>
    <div class="reg">
		  <mt-field class="uname" label="账号" placeholder="请输入您的用户名" v-model="username"></mt-field>
			<mt-field type="password" class="upwd" label="密码" placeholder="请输入您的密码" v-model="password"></mt-field>
			<mt-field type="text" class="phone" label="联系电话" placeholder="请输入您的联系方式" v-model="phone"></mt-field>
			<mt-field type="text" class="upwd" label="密码" placeholder="请输入您的密码" v-model="password"></mt-field>
    </div>
    <div class="select">
			<span class="userType">用户类型</span> 
			<select class="option">
				<option value="0">用户</option>
				<option value="1">商家</option>
				<option value="2">管理员</option>
			</select>
		</div>
  </div>
</template>