<script>
import $ from "jquery";
import ListItem from "@/components/ListItem.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "TheList",
  data() {
    return {
      newTodo: null,
      hideCompleted: false,
    };
  },
  props: {
    category: String,
    todos: Array,
  },
  components: {
    ListItem,
    TheTopBar,
  },

  computed: {
    openTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
    closedTodos() {
      return this.hideCompleted ? [] : this.todos.filter((todo) => todo.done);
    },
  },
  methods: {
    addItem() {
      if (this.newTodo && this.newTodo.length) {
        // this.todos.unshift({
        //   id: 1111,
        //   title: this.newTodo,
        //   category: this.category || ''
        //   content: "",
        //   done: false,
        // });
        this.todo = null;
      } else { // CTN-TODO: flash box red - alert class // CTN-TODO: also attach a key-up that removes the alert class
        console.log("leave me alone linter.");
      }
    },
  },
};

function adjustWidth() {
  let parentwidth = $("#todo-list").width();
  $(".new-todo").width(parentwidth);
}

// CTN-TODO this is hacky and does not fire when user presses 'back'
$(window).on('load', adjustWidth);
$(window).resize(
  function() {
    adjustWidth();
});
</script>

<template>
  <div id="todo-list">
    <TheTopBar />

    <header>{{ this.category.length ? this.category : "Todos" }}</header>

    <ListItem
      v-for="todo in openTodos"
      :key="todo.id"
      :todo="todo"
      @status="todo.done = !todo.done"
    />

    <button class="button mt-2 mb-2 p-5" @click="hideCompleted = !hideCompleted">
      <span class="icon">
        <i 
          :class="hideCompleted
            ? 'fas fa-angle-right'
            : 'fas fa-angle-down'"
        />
      </span>
      <span class="icon-text">
        <span>Completed</span>
      </span>
    </button>

    <ListItem
      v-for="todo in closedTodos"
      :key="todo.id"
      :todo="todo"
      @status="todo.done = !todo.done"
    />

    <div class="field top-pad pb-5 fixed">
      <div class="control has-icons-left bottom-pad">
        <input
          class="input"
          placeholder="Add a new todo"
          v-model.trim="newTodo"
          v-on:keyup.enter="addItem"
        />
        <span class="icon clickable is-small is-left" @click="addItem">
          <i class="fas fa-plus" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

.button
  height: 1.75em
  font-size: 0.75em

.new-todo
  bottom: 1.5em
</style>
