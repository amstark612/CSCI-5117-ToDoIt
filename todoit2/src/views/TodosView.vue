<script>
import TheList from "@/components/TheList.vue";
import TheTopBar from "@/components/TheTopBar.vue";

export default {
  name: "TodosView",
  data() {
    return {
      category: "",
    };
  },
  components: {
    TheList,
    TheTopBar,
  },

  watch: {
    $route() {
      this.category = this.$route.params.category || "";
    },
  },
};
</script>

<template>
  <div>
    <TheTopBar />
    <TheList :category="category" />
  </div>
</template>
