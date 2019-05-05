<template>
  <g>
    <!-- dont think we need the this. here? -->
    <d3Area></d3Area>
    <d3Line></d3Line>
    <d3Scatter></d3Scatter>
  </g>
</template>

<script>
import d3Area from "./d3Area.vue";
import d3Line from "./d3Line.vue";
import d3Scatter from "./d3Scatter.vue";

export default {
  name: "d3Series",
  components: { d3Area, d3Line, d3Scatter }
};
</script>