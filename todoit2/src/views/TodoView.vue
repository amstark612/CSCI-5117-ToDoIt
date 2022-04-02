<script>
import TheTodo from "@/components/TheTodo.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "TodoView",
  data() {
    return {
      todo: null,
    };
  },
  components: {
    TheTodo,
    TheTopBar,
  },

  // CTN-TODO: move this to the child
  mounted() {
    let id = this.$route.params.id;
    if (id != null) {
      console.log("fetching todo with id " + id + " ...");
      this.todo = {
        id: 1,
        title: "A todo",
        category: "Shopping",
        content: "Todo notes",
        done: false,
      };
    } else {
      console.log('redirect or go to 404 here...');
    }
  },
};
</script>

<template>
  <div>
    <TheTopBar />
    <TheTodo v-if="todo" :todo="todo" />
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
