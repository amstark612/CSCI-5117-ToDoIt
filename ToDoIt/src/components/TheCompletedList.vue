<script setup>
import ListItem from '@/components/ListItem.vue'
import TheTopBar from '@/components/TheTopBar.vue'

let props = defineProps({
    category: String,
    todos: Array
})

console.log(props.todos)
</script>

<template>
    <TheTopBar />

    <header>Completed {{ props.category }} todos</header>
    <ListItem
        v-for="todo in props.todos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :content="todo.content"
        :done="todo.done"
    />
</template>