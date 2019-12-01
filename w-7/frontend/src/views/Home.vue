<script>
import WalkpathCard from "@/components/walkpath-card.vue";
import VisitorsCard from "@/components/visitor-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    "walkpath-card": WalkpathCard,
    "visitors-card": VisitorsCard
  },
  computed: {
    ...mapState(["walkpaths", "counter", "visitor"])
  },
  methods: {
    ...mapActions(["fetchWalkpaths", "incrementCounter", "fetchVisitors"])
  },
  created() {
    this.fetchWalkpaths();
    this.fetchVisitors();
  }
};
</script>

<template lang="pug">
  section 
    button.increment-button(@click="incrementCounter") Increment
    div {{ counter }}
    article.bluebox
      walkpath-card.single-card-blue(v-for='walkpath in walkpaths', :walkpath='walkpath', :key="walkpath.id")
    article.grenbox
      h2 our Visitors
      visitor-card.single-card-green(v-for='visitors in visitor', :visitors='visitors', :key="visitors.id")
</template>


<style scoped>
section {
  padding: 40px 0;
  border: 1px solid black;
}
.bluebox {
  border: 1px solid blue;
  padding: 20px;
}

.greenbox {
  border: 1px solid green;
  padding: 20px;
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

.single-card-blue {
  border: 1px solid blue;
  padding: 20px;
  margin: 20px;
}

.single-card-green {
  border: 1px solid green;
  padding: 20px;
  margin: 20px;
}
</style>
