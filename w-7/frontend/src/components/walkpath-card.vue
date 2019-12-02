<script>
export default {
  name: "WalkpathCard",
  props: ["walkpath"],
  computed: {
    walkpathUrl() {
      return `/walkpath/${this.walkpath._id}`;
    }
  }
};
</script>


<template lang='pug'>

h3 {{ walkpath.name }}

            h4 Composition:
            li.lis-text(v-for="composition in walkpath.composition") {{ composition.name }}
               


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
