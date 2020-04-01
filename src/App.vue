<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">解析歌单</router-link> |
      <router-link to="/help">帮助</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    
    
    <router-view/>
  </div>
</template>

<!-- <script>
  export default {
    data() {
    },
    methods: {
    }
  }
</script> -->

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
