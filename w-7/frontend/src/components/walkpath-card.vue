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

h3 {{ walkpath.name}}
   p {{ walkpath.composition}} {{ walkpath.composers}}
 



</template>
