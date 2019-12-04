<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  name: "WalkpathCard",
  props: ["walkpath"],
  computed: {
    walkpathUrl() {
      return `/walkpath/${this.walkpath._id}`;
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<template lang="pug">

  div.wrapper 
    h2 {{ walkpath.name }}

          h6.atLeft Composition:
            
              fade.transition
  
    ul
            h4(@click="toggleModal")(v-for="slots in walkpath.composition") {{ slots.name }} 
                span(v-if='isOpen')
                    ul.lis-text(@click="toggleModal") 
                      li {{ slots.tipology }}
                      li {{ slots.category }}
                      li {{ slots.flow }}
                      li {{ slots.duration }} min
                    
                     


                
                              
                      
               
  
              
             
             


</template>

<style scoped>
.lis-text {
  list-style: none;
  text-align: left;
  font-weight: 100;
}

h2 {
  font-weight: 600;
  color: aliceblue;
}

h4 {
  display: block;
  margin-block-start: 0.33em;
  margin-block-end: 0.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: left;
  font-family: "Alata", sans-serif;
  color: aliceblue;
}

h6 {
  color: darkslategray;
}

.atLeft {
  text-align: left;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
