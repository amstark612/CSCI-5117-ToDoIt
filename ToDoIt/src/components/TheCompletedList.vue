<script setup>
import { computed } from 'vue'
import ListItem from '@/components/ListItem.vue'
import TheTopBar from '@/components/TheTopBar.vue'

let props = defineProps({
    category: String,
    todos: Array
})

let completedTodos = computed(() => {
    return props.todos.filter((todo) => todo.done)
})
</script>

<template>
    <TheTopBar />

    <!-- CTN-TODO: titleize -->
    <header>Completed {{ props.category }} Todos</header>
    <ListItem
        v-for="todo in completedTodos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :content="todo.content"
        :done="todo.done"
    />
</template>

<style scoped lang="scss">
// @import '@/assets/stylesheets/_variables.sass';
.box {
    margin-bottom: 0.75em !important;
    color: $dark-olive;
}

.icon {
    pointer-events: all !important;
}
</style>