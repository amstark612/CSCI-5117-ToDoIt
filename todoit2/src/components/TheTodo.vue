<script>

export default {
  name: "TheTodo",
  data() {
    return {
      todo: null,
      editMode: false,
    }
  },
  props: {
    id: Number,
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
    toggleCategoryModal() {
      console.log('toggleCategorymodal stub from TheTodo.vue');
    },
    setCategory() {
      console.log('setCategory stub from TheTodo.vue');
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

        <span>{{ todo.title }}</span>
      </span>
    </header>

    <div class="box">
      <div id="category">
        <span class="icon-text" @click="toggleCategoryModal">
          <span class="icon clickable"><i class="far fa-folder" /></span>

          <span class="clickable capitalize">{{ todo.category }}</span>
        </span>
      </div>

      <hr />

      <div id="content">
        <div id="notes">
          <div>
            <span class="icon-text clickable" @click="editMode = !editMode">
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
