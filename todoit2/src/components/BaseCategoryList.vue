<script>
export default {
  name: "BaseCategoryList",
  data() {
    return {
      categories: ['all'],
    }
  },
  props: {
    currentCategory: null,
  },
  emits: ["category"],

  mounted() {
    console.log('fetch possible categories...');
    // move current category to top of array
    let fetched = [
      'shopping',
      'grocery',
    ];

    this.categories = [...this.categories, ...fetched];
  },
};
</script>

<template>
  <div id="category-list">
    <div class="menu box capitalize left clickable"
      :class="category == currentCategory.toLowerCase() ? 'selected' : ''"
      v-for="category in categories" 
      :key="category" 
      @click="$emit('category', category)" 
    >
      <div>
        <span class="icon-text">
          {{ category }}
          <span v-if="category == currentCategory.toLowerCase()" class="icon pl-1">
            <i class="fas fa-check" />
          </span>
        </span>
      </div>

      <div>
        <span class="icon clickable is-small">
          <i class="fas fa-times" />
        </span>
      </div>
    </div>
  </div>
</template>
