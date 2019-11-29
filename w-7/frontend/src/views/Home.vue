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
    ...mapActions(["fetchWalkpaths", "incrementCounter"])
  },
  created() {
    this.fetchWalkpaths();
  }
};
</script>

<template lang="pug">
  section 
    button.increment-button(@click="incrementCounter") Increment
    div {{ counter }}
    walkpath-card.single-card(v-for='walkpath in walkpaths', :walkpath='walkpath', :key="walkpath.id")
</template>


<style scoped>
section {
  padding: 40px 0;
  border: 1px solid black;
}

.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.increment-button:hover {
  background-color: darkcyan;
  color: white;
}

.single-card {
  border: 1px solid blue;
  padding: 20px;
  margin: 20px;
}
</style>
