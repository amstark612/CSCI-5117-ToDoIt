<script>
import BaseCategoryList from "./BaseCategoryList.vue";

export default {
    name: "TheTopBar",
    data: function () {
        return {
          categoryKey: 0,
          newCategory: null,
          showInput: false,
          showOptions: false,
        };
    },
    components: {
      BaseCategoryList,
    },

    methods: {
      addCategory() {
        console.log("add category to db....");
        this.categoryKey += 1;
      },

      back() {
          this.$router.go(-1);
      },

      goToCategory(category) {
        // CTNTODO this does not work.
        this.$router.push({
          name: "todos",
          params: { category: category },
        }).then(() => {
          return;
        });
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

          <div class="pb-2 heading">
            <span class="icon-text">
              <strong class="primary">Categories</strong>
              <span class="icon clickable ml-0" @click="showInput = !showInput">
                <small><i class="fas fa-plus" /></small>
              </span>
            </span>
          </div>

          <div v-if="showInput" id="new-category" class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                v-model.trim="newCategory"
                v-on:keyup.enter="addCategory"
              />
              <span class="icon clickable is-small is-left" @click="addCategory">
                <i class="fas fa-plus" />
              </span>
            </div>
          </div>
          <BaseCategoryList 
            :key="categoryKey"
            :currentCategory="this.$route.params.category ? this.$route.params.category : 'all'" 
            @category="goToCategory" 
          />

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
