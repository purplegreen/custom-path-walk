<script>
import WalkpathCard from "@/components/walkpath-card.vue";
import VisitorsCard from "@/components/visitor-card.vue";
import TiTle from "@/components/title.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    "walkpath-card": WalkpathCard,
    "visitors-card": VisitorsCard,
    "main-title": TiTle
  },
  computed: {
    ...mapState(["walkpaths", "counter", "visitors"])
  },
  methods: {
    ...mapActions(["fetchWalkpaths", "decrementCounter", "fetchVisitors"])
  },
  created() {
    this.fetchWalkpaths();
    this.fetchVisitors();
  }
};
</script>

<template lang="pug">
  section 
      
        main-title

        article.wrap-counter
          div.counter {{ counter }}
          button.decrement-button(@click="decrementCounter") Decrement
          

        article
        h2.title Walkpaths
        
        article.bluebox
          walkpath-card.single-card-blue(v-for='walkpath in walkpaths', :walkpath='walkpath', :key="walkpath.id")
    
        article
          h2.title Visitors

        article.greenbox
          visitors-card.single-card-green(v-for='visitor in visitors', :visitor='visitor', :key="visitor.id")

</template>


<style scoped>
section {
  display: grid;
  grid-template-rows: auto 450px auto auto auto auto;
  justify-items: center;
  padding: 40px 0;
  border-radius: 8px;
  height: 100%;
  padding: 0 20px 20px 20px;
  margin: 0 20px 20px 20px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
}

.wrap-counter {
  display: flex;
  flex-direction: column;
  justify-items: stretch;
  align-self: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 50%;
  background-color: darkslateblue;
}

.decrement-button {
  place-self: center;
  color: deepskyblue;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  width: 130px;
}

.counter {
  font-size: 7.5em;
  font-weight: 400;
  color: whitesmoke;
}

button:focus {
  outline: 0;
}

.decrement-button:hover {
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
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 10px;
  margin-bottom: 50px;
  background-color: white;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
  width: 100%;
}

.single-card-blue {
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset 6px 5px 3px -7px rgba(13, 77, 255, 0.05);
  box-shadow: 0px 10px 13px -7px #000000,
    inset 6px 5px 3px -7px rgba(13, 77, 255, 0.05);
  background: #058ef7;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 20px;
  width: 20vw;
}

.greenbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  width: 90%;
}

.single-card-green {
  background-color: darkseagreen;
  border-radius: 8px;
  width: 20%;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    inset -3px 5px 0px -7px rgba(13, 77, 255, 0);
  padding: 20px;
  margin: 20px;
}
</style>
