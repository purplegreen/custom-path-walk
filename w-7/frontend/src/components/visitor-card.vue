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

h3 {{ visitor.name}}
   p {{ visitor.mood}} 
 



</template>
