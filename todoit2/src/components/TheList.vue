<script>
import $ from "jquery";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "TheList",
  data() {
    return {
      todos: [],
      newTodo: null,
      hideCompleted: false,
    };
  },
  props: {
    category: String,
  },
  components: {
    ListItem,
  },

  mounted() {
    this.adjustInputWidth();
    $(window).resize(() => {
      this.adjustInputWidth();
    });

    // CTNTODO: fetch todos by category here
    this.todos = [
      {
        id: 0,
        title: "This is a todo",
        content:
          "Some notes here...Very very long long long long long long long long long long long even longer!!!!!!!!!!! long long long long",
        done: false,
      },
      {
        id: 1,
        title: "This is a complete todo",
        content: "More notes...",
        done: true,
      },
    ];
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
    // new-todo input has fixed positioning
    // thus needs to be manually sized to fit width of parent container
    adjustInputWidth() {
      $("#new-todo").width($('#list-container').width());
    },
    addItem() {
      console.log(this.todos);
      console.log(this.newTodo);
      if (this.newTodo && this.newTodo.length) {
        this.todos.unshift({
          id: 1111,
          title: this.newTodo,
          category: this.category || "",
          content: "",
          done: false,
        });

        this.newTodo = null;
      } else { // CTN-TODO: flash box red - alert class // CTN-TODO: also attach a key-up that removes the alert class
        console.log("leave me alone linter.");
      }
    },
  },
};
</script>

<template>
  <div id="list-container" class="full-height">
    <header class="capitalize">{{ this.category.length ? this.category : "Todos" }}</header>

    <ListItem
      v-for="todo in openTodos"
      :key="todo.id"
      :todo="todo"
      @status="todo.done = !todo.done"
    />

    <button class="button is-small mt-1 mb-2" @click="hideCompleted = !hideCompleted">
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

    <div id="new-todo" class="field top-pad pb-5 fixed">
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
  border-radius: 3px !important

#new-todo
  bottom: 0em
</style>
