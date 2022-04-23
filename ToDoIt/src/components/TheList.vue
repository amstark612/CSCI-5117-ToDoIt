<script>
import $ from "jquery";
import { auth, db } from "@/firebaseConfig";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "TheList",
  data() {
    return {
      todos: [],
      todosKey: 0,
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
  },

  computed: {
    openTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
    closedTodos() {
      return this.hideCompleted ? [] : this.todos.filter((todo) => todo.done);
    },
  },

  firestore() {
    if (this.category) {
      return {
        todos: db.collection("todos")
                 .where("user_id", "==", auth.currentUser.uid)
                 .where("category", "==", this.category)
                 .orderBy("created_at"),
      }
    } else {
      return {
        todos: db.collection("todos")
                 .where("user_id", "==", auth.currentUser.uid)
                 .orderBy("created_at"),

      }
    }
  },

  watch: {
    todosKey() {
      this.fetchData();
    },
    category() {
      this.fetchData();
    },
  },

  methods: {
    fetchData() {
      console.log('fetching data');
      let query = db.collection("todos")
          .where("user_id", "==", auth.currentUser.uid)
          .orderBy("created_at");

      if (this.category.length) {
        query.where("category", "==", this.category)
          .get()
          .then(todos => {
            this.todos = [];
            todos.forEach(todo => {
              let todoObj = {...todo.data()};
              todoObj.id = todo.id;
              this.todos.push(todoObj);
            });
        });
      } else {
        query.get()
          .then(todos => {
            this.todos = [];
            todos.forEach(todo => {
              let todoObj = {...todo.data()};
              todoObj.id = todo.id;
              this.todos.push(todoObj);
            });
        });
      }
    },
    // new-todo input field has fixed positioning
    // thus needs to be manually sized to fit width of parent container
    adjustInputWidth() {
      $("#new-todo").width($('#list-container').width());
    },

    addItem() {
      if (this.newTodo && this.newTodo.length) {
        db.collection("todos").add({
          title: this.newTodo,
          category: this.category || "all",
          user_id: auth.currentUser.uid,
          content: "",
          done: false,
          created_at: Date.now(),
        }).then(ref => {
          console.log(ref.id);
          this.todosKey += 1;
        });

        this.newTodo = null;
      } else { // CTN-TODO: flash box red - alert class // CTN-TODO: also attach a key-up that removes the alert class
        console.log("leave me alone linter.");
      }
    },

    toggleTodoStatus(id, status) {
      db.collection("todos").doc(id).update({done: status});
      this.todosKey += 1;
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
      @status="toggleTodoStatus(todo.id, !todo.done)"
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
      @status="toggleTodoStatus(todo.id, !todo.done)"
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
