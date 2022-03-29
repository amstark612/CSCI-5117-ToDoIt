<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import TheList from "@/components/TheList.vue"

let todos = ref([])
let category = ref('')
let route = useRoute()

onBeforeMount(() => {
    console.log('fetch todos by category...')
    todos.value = [
        { id: 0, text: "This is a todo", content: "Some notes here...Very very long long long long long long long long long long long even longer!!!!!!!!!!! long long long long", done: false },
        { id: 1, text: "This is a complete todo", content: "More notes...", done: true }
    ]

    // if no todos, pass todos = []
    console.log('hello from parent')
    category.value = route.params.category
    console.log('from parent ' + category.value)
    if (!category.value) {
        category.value = ''
    }
})
</script>

<template>
    <main>
        <!-- call TheTopBar here or in TheList? -->
        <TheList :category="category" :todos="todos" />
    </main>
</template>