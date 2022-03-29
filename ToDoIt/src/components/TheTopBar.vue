<script setup>
import { ref } from 'vue'
import router from '../router'

let showOptions = ref(false)

let goBack = () => {
    router.go(-1)
}

let toggleOptions = () => {
    showOptions.value = !showOptions.value
}
</script>

<template>
    <nav>
        <div>
            <a @click="goBack" class="nav-link">
                <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-angle-left"></i>
                    </span>
                    <span>Back</span>
                </span>
            </a>
        </div>
        <div @click="toggleOptions">
            <span class="icon nav-link" @click="showOptions">
                <i class="fas fa-ellipsis-h"></i>
            </span>
        </div>
    </nav>

    <div v-if="showOptions" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box center container">
                <div class="columns">
                    <div class="column"></div>
                    <div class="column"><strong>Categories</strong></div>
                    <div class="column right"><a class="muted" @click="toggleOptions">Done</a></div>
                </div>
                <div class="box left">
                    Links go here (filter by category, show/hide completed)
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.muted {
    color: #283618;
}

.nav-link {
    color: #606C38 !important;
}

.nav-link:hover {
    cursor: pointer;
}

.left {
    text-align: left;
}

.center {
    text-align: center;
}

.right {
    text-align: right;
}

.modal-content {
    position: fixed;
    bottom: 0%;
    max-width: 800px;
}

.container {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>