<script>
import WalkpathCard from "@/components/walkpath-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    WalkpathCard
  },
  computed: {
    ...mapState(["walkpaths", "counter"])
  },
  methods: {
    ...mapActions(["fetchWalkpaths"])
  },
  created() {
    this.fetchWalkpaths();
  }
};
</script>

<template lang="pug">
  h1 hello
   h2 ok 
   ul 
    li 
      h5 {{ walkpaths }}
      walkpath-card(v-for='walkpath in walkpaths', :walkpath='walkpath')
</template>
