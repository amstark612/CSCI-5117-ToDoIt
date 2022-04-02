<script>
import TheTopBar from "@/components/TheTopBar.vue";
export default {
  name: "NotFound",
  components: {
    TheTopBar,
  },
};
</script>

<template>
  <main class="content center">
    <TheTopBar />

    <div class="center">
      <span class="icon is-extra-large mt-6">
        <i class="far fa-flushed"></i>
      </span>

      <h1>Uh oh!</h1>
      <p>It appears you've gotten lost, but you can click <RouterLink to="/todos">here</RouterLink> to return to the master list of todos!</p>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
