<script>
import TheTodo from "@/components/TheTodo.vue";

export default {
  name: "TodoView",
  data() {
    return {
      todo: Object,
    };
  },
  components: {
    TheTodo,
  },

  mounted() {
    let id = this.$route.params.id;
    if (id != null) {
      console.log("fetching todo with id " + id + " ...");
      // CTN-TODO: why tf does the browser thing todo is a prop instead of a data attribute
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
  <main>
    <TheTodo :todo="todo" />
  </main>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
