<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header/Header.vue';
export default {
  name : 'app',
  components : {
    Header
  } 
}
</script>
<style lang="scss">
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
