<template>
<div>
 <div class="container">
     <!-- 状态栏 -->
    <div class="top">
      <img class="topLeft" src="../assets/left.png">
      <p class="topName">首页</p>
    </div>
    <!-- 导航栏 -->
    <div>
        <div class="input-group ">
        <a class="p-1" href="#"><img src="../assets/返回.png" alt=""></a>
        <input  type="text" class="form-control p-0" placeholder="请输入你要搜索的内容">
            <div class="input-group-append">
            <a href="#">
            <img class="btn p-1 " src="../assets/搜索.png"></a></div>
            </div>
    </div>
    <h3 class="text-center">今日热门</h3>
    <div class="carousel" data-ride="carousel" id="demo">
        <!--1轮播图片-->
        <div class="carousel-inner row">
            <div @click="detail" class="carousel-item col-sm-6 col-md-12 active">
                <img src="../assets/冰激凌.jpg"  alt=""/>
            </div>
            <div @click="detail" class="carousel-item col-sm-6 col-md-12" >
                <img src="../assets/披萨.jpg" alt=""/>
            </div>
            <div @click="detail" class="carousel-item col-sm-6 col-md-12">
                <img src="../assets/爆炸虾仁.jpg" alt=""/>
            </div>
            <div @click="detail" class="carousel-item col-sm-6 col-md-12">
                <img src="../assets/虾仁玉米.jpg" alt=""/>
            </div>
        </div>
        <!--3轮播指示器-->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
        </ul>
    </div>
    <!-- 560x728-->
    <!--<h1>菜品</h1>-->
    <!-- 第一个店-->
    <div class="st">
        <ul class="list-unstyled">
            <li>
                <div class="d-flex ">
                    <div class="col-sm-3"><h4 class="m-0 p-2"><a class="" href="#">特色中餐（人民东路店)</a></h4></div>
                    <div class="col-sm-8 "><img class="w-60" src="../assets/叫外卖.png" alt=""/></div>
                    <div class="col-sm-1 float-right"><a  href="#" class="">
                        <img  class="w-75" src="../assets/删除.png" alt=""/></a>
                    </div>
                </div>  
            </li>
            <li class="mr-2 mt-2">
                <ul class="list-unstyled row">
                    <li class="col-sm-7 "><p ><code>4.3分</code>|起送价:￥20|配送费:￥2</p></li>
                    <li class="col-sm-5">配送时间:30分钟</li>
                </ul>
            </li>
            <li>
                <span class="badge bg-danger text-white  ml-3 mr-2">优惠</span>
               满20减8；满30减12
            </li>
            <li>
            <div class="cdjj">
            <table class="text-center">
                <tr>
                    <td class="p-1" @click="detail"><img class="food" src="../assets/披萨.jpg" alt=""/></td>
                    <td class="p-1" @click="detail"><img class="food" src="../assets/冰激凌.jpg" alt=""/></td>
                    <td class="p-1" @click="detail"><img class="food" src="../assets/牛扒.jpg" alt=""/></td>
                </tr>
                <tr>
                    <td><h3>披萨</h3></td>
                    <td><h3>冰激凌</h3></td>
                    <td><h3>牛扒</h3></td>
                </tr>
            </table>
            </div>
            </li>
        </ul>
    </div>
<!--   第二个店 -->
    <div class="">
        <ul class="list-unstyled">
             <li>
                <div class="d-flex ">
                    <div class="col-sm-3"><h4 class="m-0 p-2"><a class="" href="#">特色中餐（人民东路店)</a></h4></div>
                    <div class="col-sm-8"><img class="w-60" src="../assets/叫外卖.png" alt=""/></div>
                    <div class="col-sm-1 float-right"><a  href="#" class="">
                        <img class="w-75" src="../assets/删除.png" alt=""/></a>
                    </div>
                </div>  
            </li>
            <li class="mr-2 mt-2">
                <ul class="list-unstyled row">
                    <li class="col-sm-7 "><p ><code>4.3分</code>|起送价:￥20|配送费:￥2</p></li>
                    <li class="col-sm-5">配送时间:30分钟</li>
                </ul>
            </li>
            <li>
                <span class="badge bg-danger text-white  ml-3 mr-2">优惠</span>
                满20减8；满30减12
            </li>
            <li>
                <div class="cdjj">
                    <table class="text-center">
                        <tr>
                            <td class="p-1"><a href="#"><img  class="food"  src="../assets/披萨.jpg" alt=""/></a></td>
                            <td class="p-1"><a href="#"><img  class="food"  src="../assets/冰激凌.jpg" alt=""/></a></td>
                            <td class="p-1"><a href="#"><img  class="food"  src="../assets/牛扒.jpg" alt=""/></a></td>
                        </tr>
                        <tr>
                            <td><h3>披萨</h3></td>
                            <td><h3>冰激凌</h3></td>
                            <td><h3>牛扒</h3></td>
                        </tr>
                    </table>
                </div>
            </li>
        </ul>
    </div>
    <!-- 底部-->
    <!-- <div class="db">
        <ul class="list-unstyled d-flex justify-content-around py-4">
            <li><a href="#"><img  src="../assets/主页.png" alt=""/>
                <h5 class="text-muted text-center font_small">主页</h5></a></li>
            <li><a href="#"><img src="../assets/我的.png" alt=""/>
                <h5 class="text-muted text-center font_small">我的</h5></a>
            </li>
            <li><a href="#"><img src="../assets/外卖.png" alt=""/>
                <h5 class="text-muted text-center font_small">外卖</h5></a>
            </li>
        </ul>
    </div> -->
</div>
</div>
  
</template>
<style  scoped>
    .container{padding: 0px; height:1300px;}
    .col-sm-6  img{width:290px;height: 182px;margin: 10px; }
    .col-md-12 img{width:100%;height:240px }
    #ztl{height: 50px;background: #fafafa}
    #ztl img{height:45px; }
     /*菜单菜品简介图片样式*/
    .cdjj table .p-1 img{
         width: 100%;
         height: 150px;
    }
    h3{
        font-size: 1.2rem;
    } 
    h4{
        font-size: 1.2rem;
    } 
    .cdjj table .p-1 img{
        height:100px;
    }
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
</style>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        detail(){
            this.$router.push('/foodDetail');
        }
    }
}
</script>