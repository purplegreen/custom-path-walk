<script>
export default {
  data() {
    return {
      haswalk: true
    };
  },
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


  div
    h4 {{ visitor.name }}   
      li.lis-text {{ visitor.mood }} 

    div
      h6
      ul
        li.lis-text(v-for="walkpaths in visitor.walkpaths" :key="walkpaths.id") has composed the Walkpath:  {{ walkpaths.name}}  
        img(v-if="visitor.walkpaths.length")(src="@/assets/farm.svg" alt="icons made by www.flaticon.com")
        img(v-else)(src="@/assets/tree.svg" alt="icons made by www.flaticon.com")



         
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

img {
  width: 40%;
  height: 40%;
}
</style>
