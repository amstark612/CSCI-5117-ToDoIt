<script>
export default {
  name: "BaseMenuItem",
  data() {
    return {
      category: null,
    }
  },
  props: {
    selected: Boolean,
  },
};
</script>

<template>
  <div>
    <div class="menu box capitalize left clickable"
      :class="selected ? 'selected' : ''"
      @click="$emit('category', category)" 
    >
      <span class="icon-text">
        {{ category }}
        <span v-if="selected" class="icon pl-1">
          <i class="fas fa-check" />
        </span>
      </span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"
</style>
