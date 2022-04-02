<script>
import TheTodo from "@/components/TheTodo.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "TodoView",
  data() {
    return {
      id: null,
    };
  },
  components: {
    TheTodo,
    TheTopBar,
  },

  mounted() {
    this.id = parseInt(this.$route.params.id);
    if (!this.id) {
      // CTNTODO: redirect to todos page
    }
  }
};
</script>

<template>
  <div>
    <TheTopBar />
    <TheTodo v-if="id != null" :id="id" />
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
