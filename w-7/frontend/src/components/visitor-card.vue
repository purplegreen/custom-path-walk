<script>
export default {
  name: "VisitorsCard",
  props: ["visitor"],
  computed: {
    visitorUrl() {
      return `/visitor/${this.visitors._id}`;
    }
  }
};
</script>


<template lang='pug'>

h4 {{ visitor.name}}
   li.lis-text mood: {{ visitor.mood}} 
   
 



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
</style>
