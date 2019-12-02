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
    ...mapState(["walkpaths", "counter", "visitors"])
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
      article.wrap-counter
        button.increment-button(@click="incrementCounter") Increment
        div {{ counter }}

      article
       h2.title Choose a Walkpath
      
      article.bluebox
        walkpath-card.single-card-blue(v-for='walkpath in walkpaths', :walkpath='walkpath', :key="walkpath.id")
  
      article
        h2.title our Visitors

      article.greenbox
        visitors-card.single-card-green(v-for='visitor in visitors', :visitor='visitor', :key="visitor.id")

</template>


<style scoped>
section {
  display: grid;
  grid-template-rows: 200px auto auto auto auto;
  justify-items: center;
  padding: 40px 0;
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  margin: 20px;
  border: 1px solid powderblue;
}

.wrap-counter {
  background-color: gainsboro;
  border-radius: 8px;
  width: 40vw;
  padding: 20px;
  margin-bottom: 50px;
}

.increment-button {
  color: deepskyblue;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid deepskyblue;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  width: 130px;
}

.increment-button:hover {
  background-color: deepskyblue;
  color: white;
}

.title {
  display: grid;
  justify-content: center;
  align-self: baseline;
}

.bluebox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  margin-bottom: 50px;
  width: 100%;
}

.greenbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid green;
  padding: 20px;
  width: 100%;
}

.single-card-green {
  background-color: darkseagreen;
  border-radius: 8px;
  width: 20%;
}

.single-card-blue {
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset 6px 5px 3px -7px rgba(13, 77, 255, 0.05);
  box-shadow: 0px 10px 13px -7px #000000,
    inset 6px 5px 3px -7px rgba(13, 77, 255, 0.05);
  background: #058ef7;
  border-radius: 8px;
  padding: 20px;
  margin: 4px 20px;
}

.single-card-green {
  border: 1px solid green;
  padding: 20px;
  margin: 20px;
}
</style>
