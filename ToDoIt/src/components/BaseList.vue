<script setup>
import ListItem from '@/components/ListItem.vue'

let props = defineProps({
    category: String,
    todos: Array
})

console.log(props.todos)
</script>

<template>
    <ListItem
        v-for="todo in props.todos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :content="todo.content"
        :done="todo.done"
    />
</template>

<style scoped lang="scss">
.button {
    height: 1.75em;
    padding: 1em;
    font-size: 0.75em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.box {
    margin-bottom: 0.75em !important;
}

.icon {
    pointer-events: all !important;
}
</style>