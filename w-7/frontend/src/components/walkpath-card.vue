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

  article
    h2 {{ walkpath.name }}
        
          h6
           span.texttitle by 
           span.texttitle(v-for="visitor in walkpath.composers") {{ visitor.name }} 

          h6.textformat Walk Composition
    div
            h4(@click="toggleModal")(v-for="slots in walkpath.composition") {{ slots.name }} 
                
              transition(name="fade")
                div.modal(v-if='isOpen')
                  p
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
  margin-block-start: 1.03em;
  margin-block-end: 1.03em;
}

.modal {
  width: 200px;
  height: auto;
  padding: 4px;
  margin: 0 auto;
  border-radius: 8px;
}

.texttitle {
  color: lightcyan;
}

.textformat {
  text-align: left;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
