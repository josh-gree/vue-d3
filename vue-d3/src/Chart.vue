<template>
  <d3Chart :layout="layout"></d3Chart>
</template>

<script>
import d3Chart from "./components/d3Chart.vue";

export default {
  name: "chart",
  components: { d3Chart },
  data() {
    return {
      layout: {
        width: 100,
        height: 100,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      }
    };
  }
};
</script>
