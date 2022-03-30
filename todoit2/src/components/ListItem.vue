<script>
export default {
  name: "ListItem",
  props: {
    todo: Object,
  },
  emits: ["status"],
};
</script>

<template>
  <div class="box todo">
    <span
      class="icon-text todo-contents"
      :class="this.todo.done ? 'muted' : ''"
    >
      <span class="icon clickable" @click="$emit('status')">
        <i :class="this.todo.done ? 'far fa-check-circle' : 'far fa-circle'" />
      </span>

      <RouterLink :to="{ name: 'todo', params: { id: this.todo.id } }">
        <span>{{ this.todo.title }}</span>
      </RouterLink>

      <span class="caption">{{ this.todo.content }}</span>
    </span>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
@import "@/assets/styles/utilities.sass"

.todo
  margin-bottom: 0.75em !important

.todo-contents
  display: -webkit-box 
  -webkit-line-clamp: 1
  -webkit-box-orient: vertical
  overflow: hidden
  // color: $dark-olive

.caption
  flex: 1 1 auto
  padding-left: 5px
  color: $dark-olive
  font-style: italic

.muted
    color: $dark-olive
    text-decoration: line-through

.muted a, a:visited
    color: inherit

a, a:visited
    color: inherit

a:hover
    color: $cream
</style>
