<script>
export default {
  name: "BaseCategoryList",
  data() {
    return {
      categories: Array,
    }
  },
  emits: ["category"],

  mounted() {
    console.log('fetch possible categories...');
    this.categories = [
      'shopping',
      'grocery',
    ];
  },
};
</script>

<template>
  <div id="category-list">
    {{ categories }}
  </div>
</template>
