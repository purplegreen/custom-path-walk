<script>
export default {
  name: "VisitorCard",
  props: ["visitors"],
  computed: {
    visitorUrl() {
      return `/visitors/${this.visitors._id}`;
    }
  }
};
</script>


<template lang='pug'>

h3 {{ visitors.name}}
   p {{ visitors.mood}} 
 



</template>
