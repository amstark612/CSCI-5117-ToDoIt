<script setup>
let props = defineProps({
    id: Number,
    text: String,
    content: String,
    done: Boolean
})

const emit = defineEmits(['status'])

</script>

<template>
    <div class="box truncate">
        <span class="icon-text" :class="props.done ? 'muted' : ''">
            <span class="icon" @click="emit('status')">
                <i v-if="props.done" class="far fa-check-circle"></i>
                <i v-else class="far fa-circle"></i>
            </span>
            <RouterLink :to="{ name: 'todo', params: { id: props.id } }">
                <span>{{ props.text }}</span>
            </RouterLink>
        </span>
        <span class="caption">{{ props.content }}</span>
    </div>
</template>

<style scoped lang="scss">
.muted {
    color: #283618;
    text-decoration: line-through;
}

.muted a, a:visited {
    color: inherit;
}

a, a:visited {
    color: inherit;
}

a:hover {
    color: #FEFAE0;
}

.truncate {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.caption {
    flex: 1 1 auto;
    padding-left: 5px;
    color: #283618;
    font-style: italic;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>