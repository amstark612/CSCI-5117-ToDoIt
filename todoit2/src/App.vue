<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="sass">
#app
  min-height: 100vh
  max-width: 800px
  margin: 0 auto
  padding: 1.5em
  box-shadow: 0.5px 0.5px 5px 5px rgba(0, 0, 0, 0.3)
  border-bottom-left-radius: 10px
  border-bottom-right-radius: 10px
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
