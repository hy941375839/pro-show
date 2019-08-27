<template>
  <div>
    <img :src="focused?selectedImage:normalImage" class="Img">
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    normalImage:{default:""},
    selectedImage:{default:""}
  }
}
</script>
<style scoped>
  .Img{
    width:50px;
    height:50px;
  }
</style>