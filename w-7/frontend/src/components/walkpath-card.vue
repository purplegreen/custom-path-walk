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

p {{ walkpath.name}}
</template>
