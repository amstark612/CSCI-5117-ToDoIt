<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import TheCompletedList from '@/components/TheCompletedList.vue'

let todos = ref(null)
let category = ref('')
let route = useRoute()

onBeforeMount(() => {
    // fetch all categories
    // check route category (route.params.category) matches one of those categories
    // if not, load all
    if (route.params) {
        console.log('param')
    }
    console.log('fetch done by category...and assign to todos...')
    category.value = route.params.category
    console.log(category)
    todos.value = [
        { id: 0, text: "This is a todo", content: "Some notes here...Very very long long long long long long long long long long long even longer!!!!!!!!!!! long long long long", done: false },
        { id: 1, text: "This is a complete todo", content: "More notes...", done: true }
    ]
    console.log('hello from parent')
})
</script>

<template>
    <main>
        <TheCompletedList :category="category" :todos="todos" />
    </main>
</template>