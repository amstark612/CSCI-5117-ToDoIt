<script>
import BaseCategoryList from "./BaseCategoryList.vue";

export default {
  name: "TheTodo",
  data() {
    return {
      editMode: false,
      showCategories: false,
      todo: null,
    }
  },
  props: {
    id: Number,
  },
  components: {
    BaseCategoryList,
  },

  mounted() {
    if (this.id != null) {
      console.log("fetching todo with id " + this.id + " ...");
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
  methods: {
    setCategory(category) {
      this.todo.category = category;
      this.showCategories = !this.showCategories;
    },
  },
};
</script>

<template>
  <div id="todo" v-if="todo">
    <header class="pt-2">
      <span
        class="icon-text"
        :class="todo.done ? 'muted' : ''"
      >
        <span class="icon clickable" @click="todo.done = !todo.done">
          <i :class="todo.done ? 'far fa-check-circle' : 'far fa-circle'" />
        </span>

        <span :class="todo.done ? 'done' : ''">{{ todo.title }}</span>
      </span>
    </header>

    <div class="box">
      <div id="category">
        <span class="icon-text" @click="showCategories = !showCategories" title="Tap to edit">
          <span class="icon clickable"><i class="far fa-folder" /></span>
          <span class="clickable capitalize">{{ todo.category }}</span>
        </span>

        <div class="modal is-active" v-if="showCategories">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box center container">
              <BaseCategoryList :currentCategory="todo.category" @category="setCategory" />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div id="content">
        <div id="notes">
          <div>
            <span class="icon-text clickable" @click="editMode = !editMode" title="Tap to edit">
              <span class="icon"><i class="far fa-edit" /></span>
              <span>{{ todo.content.length ? "Notes" : "Add Note" }}</span>
            </span>
          </div>
          <div class="pt-2 display-note" v-if="!editMode">
            {{ todo.content }}
          </div>
          <div class="pt-2 edit-note field" v-if="editMode">
            <div class="control">
              <textarea class="textarea is-small" rows=7 v-model="todo.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

header
  height: 1.5em

header .icon
  font-size: 0.75em
</style>
