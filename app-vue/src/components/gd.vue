<template>
<body data-spy="scroll" data-target="#myScrollspy" data-offset="50">
<!-- 头部 -->
<div class="container">
    <!--<h1 class="text-center">导航栏</h1>-->
    <div class="fixed-top bg-light">
        <!-- 写死不用改了，各模块中的导航航栏都是固定的,就搜索可以绑定个功能 -->
    <div class="mt-2">
        <div class="input-group ">
        <a class="p-1" href="#"><img src="../assets/返回.png" alt=""></a>
        <input  type="text" class="form-control p-0" placeholder="请输入你要搜索的内容">
            <div class="input-group-append">
            <a href="#">
            <img class="btn p-1 " src="../assets/搜索.png"></a></div>
            </div>
    </div>
    <!-- 单页面内各个模块跳转，评论区/商家/好友拼单.... -->
        <ul class="nav nav-tabs text-center justify-content-between">
            <li class="nav-item "><a data-toggle="tab" class="nav-link active" href="#tab1">点菜</a></li>
            <li class="nav-item "><a data-toggle="tab" class="nav-link" href="#tab2">评价</a></li>
            <li class="nav-item "><a data-toggle="tab" class="nav-link" href="#tab3">商家</a></li>
            <li class="nav-item "><a data-toggle="tab" class="nav-link" href="#tab4">好友拼单</a></li>
        </ul>
    </div>
</div>
<!-- 主体 -->
<div class="tab-content">
    <!-- 左边的滑块与电力的菜品样式绑定 -->
<div id="tab1" class="container-fluid  tab-pane active">
    <div class="row mt-5">
        <nav class="col-sm-2 col-4" id="myScrollspy">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#section1">热卖</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">折扣</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section3">进店必买</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">店长推荐</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#section41">炒菜</a>
                        <a class="dropdown-item" href="#section42">甜点</a>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- 遍历数据库中菜单数据，读取菜品信息 -->
        <div class="col-sm-10 col-8">
            <div id="section1" class="">
                <h1>热卖</h1>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/爆炸虾仁.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">爆炸虾仁</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/牛扒.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">牛扒</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/红烧排骨.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">红烧排骨</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
            </div>
            <div id="section2" class="">
                <h1>折扣</h1>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/爆炸虾仁.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">爆炸虾仁</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/牛扒.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">牛扒</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/红烧排骨.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">红烧排骨</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
            </div>
            <div id="section3" class="">
                <h1>进店必买</h1>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/爆炸虾仁.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">爆炸虾仁</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/牛扒.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">牛扒</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/红烧排骨.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">红烧排骨</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
            </div>
            <div id="section41" class="">
                <h1>炒菜</h1>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/爆炸虾仁.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">爆炸虾仁</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/牛扒.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">牛扒</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/红烧排骨.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">红烧排骨</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                    
            </div>
            <div id="section42" class="">
                <h1>甜点</h1>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/披萨.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">披萨</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
                <div>
                    <ul class="d-flex list-unstyled justify-content-start">
                        <li>
                            <img class="float-left" src="../assets/冰激凌.jpg" alt=""/></li>
                        <li><div class="">
                            <h4 class="text-center m-0">冰激凌</h4>
                            <p class="m-0">海鲜|新鲜</p>
                            <p class="m-0">月售:645&nbsp;&nbsp;赞:16</p></div>
                        </li>        
                    </ul>
                    <div>
                        <h4 class="mt-2">￥30/份(400g)
                        <!-- 与购物车绑定，与总价绑定，获取信息 -->
                        <a class="gm " href="#"><img  src="../assets/购买.png" alt=""/></a></h4>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div id="tab2" class="tab-pane">钵钵鸡，担担面，火锅</div>
    <div id="tab3" class="tab-pane">虾饺，佛跳墙</div>
    <div id="tab4" class="tab-pane">煎饼，烙饼卷大葱，扒鸡</div>
</div>
<!-- 底部区域，负责结算，统计等 -->
<div style="height:88px" class="fixed-bottom bg-info d-flex">
    <div class="col-sm-6"><a href="#"><img style="height: 80px"  src="../assets/购物车.png" alt=""/></a></div>
    <div class="col-sm-3 mt-1 p-0"><h4>总价:30元</h4>另需配送费:<br>3元</div>
    <div class="col-sm-3 text-center"><a href="#"><img style=" height: 80px" src="../assets/结账.png" alt=""/></a></div>
</div>
</body>
  
</template>

<script>
export default {
data(){
  return{}
}
}
</script>

<style>
 body {
            position: relative;
        }
        /* 滚动监听左边指示条*/
        ul.nav-pills {
            top: 100px;
            position: fixed;
        }
        /*单个区域框（热卖的大小）*/
        div.col-8 div {
            height: 600px;
        }
        /* 热卖等区域内单个商品区域大小*/
        div.col-8 div div{height: 30%}
        /*商品区域图片大小*/
        div .col-8 img{width:60px;height: 70px;margin:10px;}
        /*添加按钮大小*/
        a.gm img{width: 30px;height: 30px}
       #section1{margin-top: 50px;}
        #tab2,#tab3,#tab4 {
            margin-top: 100px;
        }
        #myScrollspy{
            padding-left: 0px;
        }
        #myScrollspy .active{
            background:#f5c443;
        }
</style>