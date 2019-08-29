<template>
  <div>
    <p class="profile">我的</p>
    <div class="proMsg">
      <img class="proImg" src="../assets/pro.jpg">
      <p>昵称：尽头</p>
      <p>学号：123456789</p>
    </div>
    <div class="proList">
      <ul class="list">
        <li @click="order">
          <img class="order" src="../assets/order.png">
          美食订单
          <img class="right" src="../assets/left.png">
        </li>
        <li @click="advice">
          <img class="advice" src="../assets/advice.png">
          意见反馈
          <img class="right" src="../assets/left.png">
        </li>
        <li @click="setting">
          <img class="setting" src="../assets/setting.png">
          个人设置
          <img class="right" src="../assets/left.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

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
  }
}
</script>

<style scoped>
  .profile{
    width:100%;
    height:48px;
    font-size: 20px;
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
    top: -62px;
    left: -50px;
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
  .order,.advice,.setting{
    width:30px;
    height:30px;
    position: relative;
    top: 8px;
  }
  .right{
    width:20px;
    height:20px;
    transform: rotate(180deg);
    position: relative;
    top:3px;
    right:-195px;
  }
</style>