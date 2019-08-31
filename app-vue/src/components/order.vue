<template>
  <div>
    <div class="orderTop">
      <p class="order">美食账单</p>
      <div @click="back">
        <img class="left" src="../assets/left.png">
      </div>
    </div>
    <div class="orderList">
      <p class="date">2019-5-4</p>
      <ul class="detail">
        <li>
          <img src="../assets/food1.jpg">
          <p>菲力牛排</p>
          <p>x1</p>
          <p>￥120.00</p>
        </li>
        <li>
          <img src="../assets/food2.jpg">
          <p>下午茶</p>
          <p>x1</p>
          <p>￥12.00</p>
        </li>
        <li>
          <img src="../assets/food3.jpg">
          <p>热菜</p>
          <p>x1</p>
          <p>￥30.00</p>
        </li>
      </ul>
      <p class="add">合计：￥152.00</p>
    </div>
    <div class="orderList">
      <p class="date">2019-6-14</p>
      <ul class="detail">
        <li>
          <img src="../assets/food1.jpg">
          <p>菲力牛排</p>
          <p>x1</p>
          <p>￥120.00</p>
        </li>
        <li>
          <img src="../assets/food2.jpg">
          <p>下午茶</p>
          <p>x1</p>
          <p>￥12.00</p>
        </li>
        <li>
          <img src="../assets/food3.jpg">
          <p>热菜</p>
          <p>x1</p>
          <p>￥30.00</p>
        </li>
      </ul>
      <p class="add">合计：￥152.00</p>
    </div>
    <div class="orderList">
      <p class="date">2019-7-1</p>
      <ul class="detail">
        <li>
          <img src="../assets/food1.jpg">
          <p>菲力牛排</p>
          <p>x1</p>
          <p>￥120.00</p>
        </li>
        <li>
          <img src="../assets/food2.jpg">
          <p>下午茶</p>
          <p>x1</p>
          <p>￥12.00</p>
        </li>
        <li>
          <img src="../assets/food3.jpg">
          <p>热菜</p>
          <p>x1</p>
          <p>￥30.00</p>
        </li>
      </ul>
      <p class="add">合计：￥152.00</p>
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
    back(){
      this.$router.push('/foot');
    }
  }
}
</script>
<style scoped>
  .order{
    width:100%;
    height:48px;
    font-size: 20/16rem;
    line-height: 50px;
    background:#f5c443;
    margin: 0px;
  }
  .left{
    width:30px;
    height:30px;
    position: absolute;
    top:10px;
    left:0px;
  }
  .orderList{
    width:96%;
    background: #eee;
    margin: 10px 8px;
  }
  .orderList .date{
    padding-top: 5px;
    margin: 5px 0px 5px -245px;
  }
  .orderList img{
    width:100px;
    margin-left: -250px;
  }
  .detail{
    list-style: none;
    padding-left:10px;
    height:220px;
    margin: 10px 0px;
  }
  .detail li{
    height:70px;
  }
  .detail p{
    margin: 0px;
    position: relative;
    top:-53px;
    left:-18px;
  }
  .detail p:last-child{
    top:-88px;
    left:107px;
  }
  .add{
    padding-bottom:5px;
    margin: 8px 0px 0px;
    position: relative;
    right:-85px;
  }
</style>