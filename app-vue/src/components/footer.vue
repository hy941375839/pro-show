<template>
	<div>
		<mt-tab-container v-model="active">
			<mt-tab-container-item id="index">
				<index></index>
			</mt-tab-container-item>
			<mt-tab-container-item id="cart">

			</mt-tab-container-item>
			<mt-tab-container-item id="profile">
				<profile></profile>
			</mt-tab-container-item>
		</mt-tab-container>
		<mt-tabbar v-model="active" fixed>
        <mt-tab-item id="index" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../assets/index-active.png')"
          :normalImage="require('../assets/index.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         首页  
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="changeState(1)">
         <tabbaricon
         :normalImage="require('../assets/cart.png')"
         :selectedImage="require('../assets/cart-active.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         购物车
        </mt-tab-item>
        <mt-tab-item id="profile" @click.native="changeState(2)">
          <tabbaricon
          :normalImage="require('../assets/profile.png')"
          :selectedImage="require('../assets/profile-active.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          个人中心
        </mt-tab-item>
      </mt-tabbar>
	</div>
</template>
<script>
	import changeImg from '../components/changeImg.vue'
	import profile from '../components/profile.vue'
	import index from '../components/cd.vue'
	export default{
		data(){
			return{
				active:"index",
				currentIndex:[
					{isSelect:true},
					{isSelect:false},
					{isSelect:false},
				]
			}
		},
		methods:{
			changeState(n){
				for(var i=0;i<this.currentIndex.length;i++){
					if(n==i){
						this.currentIndex[i].isSelect=true;
					}else{
						this.currentIndex[i].isSelect=false;
					}
				}
			}
		},
		components:{
			"tabbaricon":changeImg,
			"profile":profile,
			"index":index
		}
	}
</script>
<style>
</style>
