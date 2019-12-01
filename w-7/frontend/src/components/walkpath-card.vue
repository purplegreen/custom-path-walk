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

            h5 Composition:
            li(v-for="composition in walkpath.composition") {{ composition.name }}
               


</template>
