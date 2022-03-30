<template>
  <div class="content center large-pad">
    <span class="icon is-extra-large">
      <i class="far fa-flushed"></i>
    </span>

    <h1>Uh oh!</h1>
    <p>It appears you've gotten lost, but you can click <RouterLink to="/todos">here</RouterLink> to return to the main list of todos!</p>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

.large-pad
    padding-top: 50px
    padding-bottom: 50px

.is-extra-large
    color: $secondary
    font-size: 5em
</style>
