<script>
import ListItem from "@/components/ListItem.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "TheCompletedList",
  props: {
    category: String,
    todos: Array,
  },
  components: {
    ListItem,
    TheTopBar,
  },

  computed: {
    completedTodos() {
      return this.todos.filter((todo) => todo.done);
    },
  },
};
</script>

<template>
  <div id="todo-list">

    <TheTopBar></TheTopBar>

    <header>Completed {{ this.category }} Todos</header>

    <ListItem
      v-for="todo in completedTodos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>
