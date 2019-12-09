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
  background-color: #3c98ff;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23e7effd' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
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

.single-card-green:hover {
  background-color: #fff4e9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2392aca4' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
}

@media only screen and (min-width: 320px) and (max-width: 420px) {
  section {
    grid-template-rows: auto auto auto auto auto auto;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2em;
  }

  .wrap-counter {
    width: 209px;
    height: 209px;
    margin-bottom: 10px;
  }

  .decrement-button {
    font-size: 12px;
    padding: 8px 16px;
    width: 100px;
  }
  .single-card-blue,
  .single-card-green {
    padding: 10px;
    margin: 7px 2px;
    width: 76vw;
  }
}

@media only screen and (min-width: 420px) and (max-width: 620px) {
  h1 {
    font-size: 3em;
  }

  section {
    grid-template-rows: auto auto auto auto auto auto;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 3em;
  }

  .wrap-counter {
    width: 270px;
    height: 270px;
    margin-bottom: 20px;
  }

  .bluebox {
    padding: 1px;
  }

  .single-card-blue,
  .single-card-green {
    padding: 20px;
    margin: 7px 2px;
    width: 70vw;
  }
}
</style>
