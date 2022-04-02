<script>

export default {
  name: "TheTodo",
  data() {
    return {
      editMode: false,
    }
  },
  props: {
    todo: Object,
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
  <div id="todo">
    <header class="pt-2">
      <span
        class="icon-text"
        :class="this.todo.done ? 'muted' : ''"
      >
        <!-- CTN-TODO: should we save the todo from here or from the parent? -->
        <span class="icon clickable" @click="$emit('status')">
          <i :class="this.todo.done ? 'far fa-check-circle' : 'far fa-circle'" />
        </span>

        <span>{{ this.todo.title }}</span>
      </span>
    </header>

    <div class="box">
      <div id="category">
        <span class="icon-text" @click="toggleCategoryModal">
          <span class="icon clickable"><i class="far fa-folder" /></span>

          <span class="clickable">{{ this.todo.category }}</span>
        </span>
      </div>

      <hr />

      <div id="content">
        <div id="notes">
          <div>
            <span class="icon-text" @click="editMode = !editMode">
              <span class="icon"><i class="far fa-edit" /></span>
              <span>{{ this.todo.content && this.todo.content ? "Notes" : "Add Note" }}</span>
            </span>
          </div>
          <div class="pt-2 display-note" v-if="!editMode">
            {{ this.todo.content }}
          </div>
          <div class="pt-2 edit-note field" v-if="editMode">
            <div class="control">
              <!-- <textarea class="textarea is-medium" v-model="this.todo.content" /> -->
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
