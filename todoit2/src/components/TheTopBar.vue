<script>
import BaseCategoryList from "./BaseCategoryList.vue";

export default {
    name: "TheTopBar",
    data: function () {
        return {
            showOptions: false,
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
        goToCategory(category) {
            this.$router.push({
              name: "todos",
              params: { category: category },
            });
        },
    },
};
</script>

<template>
  <nav>
    <div class="quick-nav bottom-pad">
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
    </div>

    <div v-if="showOptions" id="full-nav" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box center container">
          <div class="quick-nav">
            <div>
              <a class="muted"><small class="upper">Log out</small></a>
            </div>
            <div class="right">
              <a class="muted" @click="toggleOptions"><small class="upper">Done</small></a>
            </div>
          </div>

          <div class="pb-2 heading"><strong class="primary">Categories</strong></div>

          <BaseCategoryList @category="goToCategory" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

nav
  display: flex
  flex-direction: column

.quick-nav
  display: flex
  justify-content: space-between
  text-transform: uppercase

.nav-link, .nav-link:hover
  color: $light-olive

.heading
  font-size: 1em
</style>
