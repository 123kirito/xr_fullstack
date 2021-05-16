<template>
<div>
  <Navbar></Navbar>
  <div class="page">
    <router-view></router-view>
  </div>
</div>
</template>

<script setup>
  import Navbar from '@/components/navbar/index.vue'
  
  export default {
    components:{
      Navbar
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

#header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background:transpr;
}
</style>
