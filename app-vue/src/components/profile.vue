<template>
  <div>
    <p class="profile">我的</p>
    <div class="proMsg">
      <!-- <img class="proImg" src="../assets/pro.jpg"> -->
      <cropper :headerImage="headerImage" @getHeaderImage="newHeaderImage"></cropper>
      <p>昵称：尽头</p>
      <p>学号：123456789</p>
      <div class="rightBtn">
        <button class="btn" @click="login">登录</button>
        <button class="btn" @click="reg">注册</button>
      </div>
    </div>
    <div class="proList">
      <ul class="list">
        <li @click="order">
          <img class="order" src="../assets/order.png">
          <span>美食订单</span> 
          <img class="right" src="../assets/left.png">
        </li>
        <li @click="advice">
          <img class="advice" src="../assets/advice.png">
          <span>意见反馈</span> 
          <img class="right" src="../assets/left.png">
        </li>
        <li @click="setting">
          <img class="setting" src="../assets/setting.png">
          <span>个人设置</span> 
          <img class="right" src="../assets/left.png">
        </li>
        <li @click="updatePwd">
          <img class="updatePwd" src="../assets/updatePwd.png">
          <span>修改密码</span> 
          <img class="right" src="../assets/left.png">
        </li>
      </ul>
    </div>
    <div class="signOut" @click="signOut">
      <p>退出登录</p>
    </div>
  </div>
</template>
<script>
import cropper from '../components/cropper.vue'
export default {
  data(){
    return{
      headerImage:""
    }
  },
  methods:{
    order(){
      this.$router.push('/order');
    },
    advice(){
      this.$router.push('/advice');
    },
    setting(){
      this.$router.push('/setting');
    },
    updatePwd(){
      this.$router.push('/update');
    },
    signOut(){
      
    },
    login(){
      this.$router.push('/login');
    },
    reg(){
      this.$router.push('/reg');
    },
    newHeaderImage(newImg){
      this.headerImage=newImg
    }
  },
  components:{
    "cropper":cropper
  }
}
</script>
<style scoped>
  .profile{
    width:100%;
    height:48px;
    font-size: 20/16rem;
    line-height: 50px;
    background:#f5c443;
    margin-top: 0px;
  }
  .proMsg{
    width:100%;
    height:80px;
  }
  .proImg{
    width:70px;
    height:70px;
    border-radius: 50%;
    position: relative;
    left:-140px;
  }
  .proMsg p{
    font-size: 14px;
    position: relative;
    top: -50px;
    left: -15px;
    margin: 8px 0px;
  }
  .proMsg p:last-child{
    margin-left: 40px;
  }
  .proList{
    margin-top: 40px;
  }
  .list{
    list-style: none;
  }
  .list>li{
    height:44px;
    border-top:1px solid #ddd; 
    margin-left: -240px;
  }
  .order,.advice,.setting,.signout,.updatePwd{
    width:30px;
    height:30px;
    position: relative;
    top: -2px;
  }
  .list span{
    margin-left: 10px;
    line-height: 42px;
  }
  .right{
    width:20px;
    height:20px;
    transform: rotate(180deg);
    position: relative;
    top:-2px;
    right:-195px;
  }
  .signOut{
    width:100%;
    height:44px;
    background: #f5c443;
    margin: 75px 0px;
  }
  .signOut p{
    padding-top: 10px;
  }
  .rightBtn{
    position: relative;
    top:-105px;
    left:118px;
  }
  .btn{
    border:0px;
    background: #fff;
  }
</style>