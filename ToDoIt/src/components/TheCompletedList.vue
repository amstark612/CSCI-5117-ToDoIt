<script>
import { auth, db } from "@/firebaseConfig";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "TheCompletedList",
  data() {
    return {
      todos: [],
      todosKey: 0,
    }
  },
  props: {
    category: String,
  },
  components: {
    ListItem,
  },

  computed: {
    closedTodos() {
      return this.todos.filter((todo) => todo.done);
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
    toggleTodoStatus(id, status) {
      db.collection("todos").doc(id).update({done: status});
      this.todosKey += 1;
    },
  },
};
</script>

<template>
  <div id="list-container">
    <header class="capitalize">Completed {{ this.category }} Todos</header>

    <ListItem
      v-for="todo in closedTodos"
      :key="todo.id"
      :todo="todo"
      @status="toggleTodoStatus(todo.id, !todo.done)"
    />
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
