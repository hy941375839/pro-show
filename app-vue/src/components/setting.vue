<template>
  <div>
    <div class="top">
      <div @click="back">
        <img class="topLeft" src="../assets/left.png">
      </div>
      <p class="topName">个人设置</p>
    </div>
    <div class="update">
      <mt-field class="name" label="用户名" type="text" placeholder="123456789"></mt-field>
      <mt-field class="NC" v-model="nicheng" label="昵称" type="text" placeholder="请输入您的昵称"></mt-field>
      <mt-field class="tel" v-model="phone" label="联系方式" type="text" placeholder="请输入手机号"></mt-field>
      <mt-radio class="radio" v-model="value" :options="options"></mt-radio>
      <mt-button @click.native="submit" size="small" class="updateBtn">确定</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nicheng:"",
      phone:"",
      value:"",
      options:[
        {label:"男",value:"1"},
        {label:"女",value:"0"}
      ]
    }
  },
  methods:{
    back(){
      this.$router.push('/foot');
    },
    submit(){
      var NC=this.nicheng;
      var tel=this.phone;
      var sex=this.value;
      // console.log(sex);
      var telreg=/^1[0-3]\d{9}$/i;
      var NCreg=/^\w$/i;
      if(telreg.test(tel)&&NCreg.test(NC)){
        this.axios.get('/',
        {
          params:{
            tedu_canteen:NC,
            phone:tel
          }
        }).then(res=>{

        })
      }else{
        this.$messagebox("","用户名或者密码不正确");
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
    right: 35%;
  }
  .name,.NC,.tel,.sex{
    border-bottom: 1px solid #ddd;
  }
  .updateBtn{
    padding-top: 5px;
    background: #f5c443;
    margin-top: 20px;
    margin-right: -200px;
  }
  .radio{
    display: flex;
  }
</style>
