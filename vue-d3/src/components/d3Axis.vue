<template>
  <g ref="axis" :style="style"></g>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Axis",
  props: ["scale", "layout", "axis"],
  mounted: function() {
    this.drawAxis();
  },
  methods: {
    drawAxis() {
      var scale = this.scale;
      var $axis = d3.select(this.$refs.axis);
      var leftaxisGen = d3.axisLeft(scale.y);
      var bottomaxisGen = d3
        .axisBottom(scale.x)
        .tickFormat(d3.timeFormat("%b %d"));

      if (this.axis == "bottom") {
        $axis.call(bottomaxisGen);
      }

      if (this.axis == "left") {
        $axis.call(leftaxisGen);
      }
    },
    getAxisTransform() {
      if (this.axis == "bottom") {
        var translate = { x: 0, y: this.layout.height };
      }

      if (this.axis == "left") {
        var translate = { x: 0, y: 0 };
      }
      return "translate(" + translate.x + "px, " + translate.y + "px)";
    }
  },
  computed: {
    style: function() {
      return {
        transform: this.getAxisTransform(),
        font: "12px sans-serif"
      };
    }
  }
};
</script>