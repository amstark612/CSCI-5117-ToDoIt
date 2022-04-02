<script>
import TheCompletedList from "@/components/TheCompletedList.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "DoneView",
  data() {
    return {
      todos: null,
      category: null,
    };
  },
  components: {
    TheCompletedList,
    TheTopBar,
  },

  mounted() {
    this.category = this.$route.params.category || "";
    if (this.category.length) {
      console.log("fetching completed " + this.category + " todos...");
    } else {
      console.log("fetching all completed todos...");
    }
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
};
</script>

<template>
  <div>
    <TheTopBar />
    <TheCompletedList v-if="todos" :category="category" :todos="todos" />
  </div>
</template>
