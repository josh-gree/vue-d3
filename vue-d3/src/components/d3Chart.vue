<template>
  <svg width="500" height="500" viewBox="0 0 1000 1000">
    <g>
      <d3Axis></d3Axis>
      <d3Series></d3Series>
    </g>
  </svg>
</template>

<script>
import d3Axis from "./d3Axis.vue";
import d3Series from "./d3Series.vue";

export default {
  name: "d3Chart",
  components: { d3Axis, d3Series }
};
</script>