<template>
  <svg :view-box.camel="viewBox" preserveAspectRatio="xMidYMid meet">
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
  components: { d3Axis, d3Series },
  props: [
    "layout" // Dimensions for the chart and margins
  ],
  computed: {
    viewBox() {
      var outerWidth =
          this.layout.width + this.layout.marginLeft + this.layout.marginRight,
        outerHeight =
          this.layout.height + this.layout.marginTop + this.layout.marginBottom;
      return "0 0 " + outerWidth + " " + outerHeight;
    }
  }
};
</script>

<style scoped>
svg {
  background-color: rgb(212, 14, 14);
  width: 500px;
  height: 500px;
}
</style>