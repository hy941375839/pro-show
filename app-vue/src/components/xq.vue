<template>
<div>
  <div class="container">
    <!--<h1 class="text-center">状态栏</h1>-->
    <div id="ztl" class="row mb-1 p-0">
        <div class="col-sm-3 p-0">
        <img  class="w-75" src="./images/BILIBILI_LOGO.png" alt=""/></div>
        <div class="col-sm-6">
        <h4 class=" text-center mt-2 p-0">用户模块</h4></div>
        <div class="col-sm-3 mt-3 p-0">
        <a class="float-right mr-5 " href="#">已登录</a></div>
    </div>

    <!--<h1 class="text-center">导航栏</h1>-->
    <div>
        <ul class="nav  nav-justified row text-left">
            <li class="nav-item p-2  col-sm-1"><a href="#"><img class="w-10" src="./images/返回.png" alt=""></a></li>
            <li class="nav-item p-2 col-sm-10">
                <div class="input-group ">
                    <input  type="text" class="form-control p-0" placeholder="请输入你要搜索的内容">
                    <div class="input-group-append h-75 ">
                        <a href="#">
                            <img class="btn p-0 " src="./images/搜索.png"></a></div>
                </div>
            </li>
            <li class="nav-item p-2 col-sm-1"><a><img class="w-10" src="./images/添加.png" alt=""></a></li>
        </ul>
    </div>
    <div class="xq mb-2">
        <h3>手撕羊肉</h3>
        <img class="w-10" src="./images/手撕羊肉.jpg" alt=""/>
    </div>
    <div class="bg-info">
        <h3 class="text-center">手撕羊肉（二食堂）</h3>
        <ul class="list-unstyled">
            <li>价格：￥35元/份</li>
            <li>主要原料：羊肉</li>
            <li>口味：营养价值高，肉味鲜美，肉质疏松</li>
            <li ><img src="./images/BILIBILI_LOGO.png" alt=""/><a class="float-right mr-5" href="#"><h3>二食堂</h3></a></li>
        </ul>
    </div>
    <div class="db">
        <ul class="list-unstyled d-flex justify-content-around py-4">
            <li><img  src="./images/主页.png" alt=""/>
                <h5 class="text-muted text-center font_small">主页</h5></li>
            <li><img src="./images/我的.png" alt=""/>
                <h5 class="text-muted text-center font_small">我的</h5>
            </li>
            <li><img src="./images/外卖.png" alt=""/>
                <h5 class="text-muted text-center font_small">外卖</h5>
            </li>
        </ul>
    </div> 
  </div>
</div>
</template>

<script>
export default {
data(){
  return{
       active:"tab1"
  }
}
}
</script>

<style>
#ztl{height: 50px;background: #fafafa}
        #ztl img{height:45px }
        .bg-info{height:160px}
        .db{height: 88px}
        .xq img{height: 320px;width: 100%}
</style>