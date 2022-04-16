<script>
export default {
  name: "BaseMenuItem",
  data() {
    return {
      mutable: false,
      selected: false,
    }
  },
  props: {
    category: String,
    itemCategory: String,
  },
  emits: ["delete", "pick"],

  // THIS IS SO HACKY SORRY!!
  mounted() {
      let category = this.category === 'all' ? 'todos' : this.category;

      // do some hacky string stuff to remove leading slash on routes. SIGH. GROSS.
      let currentCategory = this.$route.params.category || this.$route.fullPath;
      currentCategory = currentCategory.replace(/\//g, '');

      if (this.itemCategory) {
        this.selected = category === this.itemCategory.toLowerCase();
      } else {
        this.selected = category === currentCategory.toLowerCase();
      }

      let immutable = ['all', 'done'];
      this.mutable = !(immutable.includes(this.category));
  },
};
</script>

<template>
  <div>
    <div class="menu box capitalize left" :class="selected ? 'selected' : ''">

      <div class="clickable" @click="$emit('pick', category)">
        <span class="icon-text">
          {{ category }}
          <span v-if="selected" class="icon pl-1">
            <i class="fas fa-check" />
          </span>
        </span>
      </div>

      <div>
        <span 
          v-if="mutable" 
          class="icon clickable is-small"
          @click="$emit('delete', category)">
          <i class="fas fa-times" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
