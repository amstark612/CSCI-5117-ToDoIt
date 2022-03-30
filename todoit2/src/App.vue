<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
#app
  max-width: 800px
  margin: 0 auto
  padding: 1.5em
  box-shadow: 0.5px 0.5px 5px 5px rgba(0, 0, 0, 0.3)
  border-bottom-left-radius: 10px
  border-bottom-right-radius: 10px
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
