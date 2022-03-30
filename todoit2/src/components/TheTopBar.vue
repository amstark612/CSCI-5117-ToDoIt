<script>
import BaseCategoryList from "./BaseCategoryList.vue";

export default {
    name: "TheTopBar",
    data: function () {
        return {
            showOptions: false,
            categories: Array,
        };
    },
    components: {
      BaseCategoryList,
    },

    methods: {
        back() {
            this.$router.go(-1);
        },
        toggleOptions() {
            this.showOptions = !this.showOptions;
        },
    },
    mounted() {
        console.log("fetch categories for menu...");
    },
};
</script>

<template>
  <div id="top-bar">
    <nav class="bottom-pad">
      <div>
        <a @click="back" class="nav-link">
          <span class="icon-text">
            <span class="icon"><i class="fas fa-angle-left" /></span>
            <span>Back</span>
          </span>
        </a>
      </div>
      <div>
        <span class="icon clickable nav-link" @click="toggleOptions">
          <i class="fas fa-ellipsis-h" />
        </span>
      </div>
    </nav>

    <div v-if="showOptions" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box center container">
          <div class="right">
            <a class="muted" @click="toggleOptions"><small class="upper">Done</small></a>
          </div>
          <div class="pb-2 heading"><strong class="primary">Categories</strong></div>

          <BaseCategoryList @category="goToCategory" />
          <!--
          <div class="box left">
            Category links go here
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

nav
  display: flex
  justify-content: space-between
  text-transform: uppercase

.nav-link, .nav-link:hover
  color: $light-olive

.modal-content
    position: fixed
    bottom: 0%
    max-width: 800px

.container
    border-bottom-left-radius: 0px
    border-bottom-right-radius: 0px

.heading
  font-size: 1em
</style>
