<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  name: "VisitorsCard",
  props: ["visitor"],
  computed: {
    visitorUrl() {
      return `/visitor/${this.visitors._id}`;
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>


<template lang='pug'>

h4(@mouseover="toggleModal") {{ visitor.name }}
   span(v-if='isOpen')
      li.lis-text(@mouseover="toggleModal") {{ visitor.mood }} 
   
 



</template>

<style scoped>
h4 {
  display: block;
  margin-block-start: 0.33em;
  margin-block-end: 0.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: left;
  font-family: "Alata", sans-serif;
}

.lis-text {
  list-style: none;
  text-align: left;
  font-weight: 100;
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
