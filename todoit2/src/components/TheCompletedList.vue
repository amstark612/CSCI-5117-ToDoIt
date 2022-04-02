<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "TheCompletedList",
  props: {
    category: String,
    todos: Array,
  },
  components: {
    ListItem,
  },

  computed: {
    completedTodos() {
      return this.todos.filter((todo) => todo.done);
    },
  },
};
</script>

<template>
  <div id="list-container">
    <header class="capitalize">Completed {{ this.category }} Todos</header>

    <ListItem
      v-for="todo in completedTodos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
