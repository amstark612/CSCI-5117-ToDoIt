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
    this.id = this.$route.params.id;
    if (!this.id) {
      this.$router.push("/NotFound");
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
