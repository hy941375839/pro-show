<template>
  <div>
    <div class="top">
      <img class="topLeft" src="../assets/left.png">
      <p class="topName">菲力牛排</p>
    </div>
    <img class="bigImg" src="../assets/food1.jpg">
    <div class="contain">
      <h4>菜名：菲力牛排</h4>
      <p>价格：￥120.00</p>
      <p>食堂：法国餐厅</p>
      <p>口味：黑胡椒味</p>
      <button class="addCart">加入购物车</button>
    </div>
    <div class="otherFood">
      <p>本食堂其他菜色</p>
      <div @click="resEnter">
        <span>进入食堂</span>
        <img class="right" src="../assets/left.png">
      </div>
      <div class="other">
        <div>
          <img src="../assets/food2.jpg">
          <p>下午茶</p>
        </div>
        <div>
          <img src="../assets/food3.jpg">
          <p>菜</p>
        </div>
        <div>
          <img src="../assets/food4.jpg">
          <p>牛排</p>
        </div>
      </div>
    </div>
    <div class="intrFood">
      <p>为您推荐</p>
      <div class="intr">
        <div>
          <img src="../assets/food2.jpg">
          <p>下午茶</p>
        </div>
        <div>
          <img src="../assets/food3.jpg">
          <p>菜</p>
        </div>
        <div>
          <img src="../assets/food4.jpg">
          <p>牛排</p>
        </div>
      </div>
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
    resEnter(){
      this.$router.push('/res');
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
  }
  .topLeft{
    width:30px;
    height:30px;
    margin-top:8px;
    font-size: 20/16rem;
  }
  .bigImg{
    width:95%;
    margin-left:-3px;
    margin-top: 10px;
  }
  .topName{
    position: relative;
    top:-7px;
    right: 35%;
  }
  .contain>h4{
    margin:10px 0px;
    position: relative;
    left:-75px;
  }
  .contain>p{
    font-size: 16px;
    margin: 10px 0px;
    position: relative;
    left:-70px;
  }
  .addCart{
    font-family: "幼圆";
    background: #f5c443;
    border-radius:5px;
    height:30px;
    position: relative;
    right:-95px;
  }
  .otherFood,.intrFood{
    margin-top: 20px;
  }
  .otherFood p,.intrFood p{
    font-size: 16px;
    margin: 8px 0px;
  }
  .other,.intr{
    display: flex;
    justify-content:space-between;
  }
  .other img,.intr img{
    width:90%;
    height:55%;
  }
  .right{
    width:20px;
    height:18px;
    transform: rotate(180deg);
    position: relative;
    top:3px;
    left:3px;
  }
  .otherFood span{
    font-size: 16px;
  }
</style>