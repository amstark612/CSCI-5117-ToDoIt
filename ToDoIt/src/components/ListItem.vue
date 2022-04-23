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
  <div class="box mb-3">
    <span
      class="icon-text todo-contents"
      :class="this.todo.done ? 'muted done' : ''"
    >
      <span class="icon clickable" @click="$emit('status')">
        <i :class="this.todo.done ? 'far fa-check-circle' : 'far fa-circle'" />
      </span>

      <RouterLink :to="{ name: 'todo', params: { id: this.todo.id } }">
        <span>{{ this.todo.title }}</span>
      </RouterLink>

      <span class="caption left-pad">{{ this.todo.content }}</span>
    </span>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

.todo-contents
  display: -webkit-box 
  -webkit-line-clamp: 1
  -webkit-box-orient: vertical
  overflow: hidden

.caption
  color: $dark-olive
  font-style: italic

.muted, .muted a, .muted a:visited
  color: $dark-olive

a, a:visited
  color: inherit

a:hover
  color: $cream
</style>
