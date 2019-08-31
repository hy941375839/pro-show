<template>
  <div>
    <div class="top">
      <div @click="back">
        <img class="topLeft" src="../assets/left.png">
      </div>
      <p class="topName">意见反馈</p>
    </div>
    <div class="textAdvice">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <mt-button size="small" class="adviceBtn">提交意见</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    back(){
      this.$router.push('/foot');
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
    right: 35%;
  }
  .text{
    margin-top: 20px;
  }
  .adviceBtn{
    padding-top:8px; 
    background: #f5c443;
    /* margin-left:145px;  */
  }
</style>