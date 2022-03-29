<script setup>
import { computed, ref } from 'vue'
import ListItem from '@/components/ListItem.vue'
import TheTopBar from '@/components/TheTopBar.vue'

let props = defineProps({
    category: String,
    todos: Array
})

let id = 0
let todo = ref('')
let hideCompleted = ref(false)

const addItem = () => {
    if (todo.value) {
        props.todos.unshift({ id: id++, text: todo.value, done: false })
        todo.value = ''
    }
}

const openTodos = computed(() => {
    return props.todos.filter((todo) => !todo.done )
})

const closedTodos = computed(() => {
    return hideCompleted.value ? [] : props.todos.filter((todo) => todo.done)
})

console.log('hello from child')
console.log('from child ' + props.category)
</script>

<template>
    <TheTopBar />

    <!-- CTN-TODO: titleize -->
    <header>{{ props.category.length ? props.category : '' }} Todos</header>

    <!-- CTN-TODO: if no todos, show a cute message -->

    <ListItem
        v-for="todo in openTodos" 
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :content="todo.content"
        :done="todo.done"
        @status="todo.done = !todo.done"
    />

    <button class="button" @click="hideCompleted = !hideCompleted">
        <span class="icon-text">
            <span class="icon">
                <!--
                <i :class="{ hidden: hideCompleted}" class="fas fa-angle-right"></i>
                <i :class="{ hidden: hideCompleted}" class="fas fa-angle-down"></i>
                -->
            </span>
            <span>Completed</span>
        </span>
    </button>

    <ListItem
        v-for="todo in closedTodos" 
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :content="todo.content"
        :done="todo.done"
        @status="todo.done = !todo.done"
    />

    <div class="field">
        <div class="control has-icons-left">
            <input 
                class="input" 
                placeholder="Add a new todo" 
                v-model.trim="todo" 
                v-on:keyup.enter="addItem"
            >
            <span class="icon is-small is-left" @click="addItem">
                <i class="fas fa-plus"></i>
            </span>
        </div>
    </div>
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