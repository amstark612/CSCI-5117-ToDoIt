<script>
import BaseCategoryList from "./BaseCategoryList.vue";

export default {
    name: "TheTopBar",
    data: function () {
        return {
            showOptions: false,
            categories: null,
        };
    },
    components: {
      BaseCategoryList,
    },

    mounted() {
      console.log('fetch list of categories from the db...');
      this.categories = [
        'shopping',
        'grocery',
        'school',
      ];
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        toggleOptions() {
            this.showOptions = !this.showOptions;
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
          <!-- INCLUDE 'ALL', 'DONE'
          <div class="box left">
            Category links go here
          </div>
          -->
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
