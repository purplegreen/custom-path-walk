<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    ...mapState(["walkpath", "counter"])
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
   h3 {{ walkpath }}
</template>
