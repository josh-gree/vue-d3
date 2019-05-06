<template>
  <circle @mouseover="onHoverover" @mouseout="onHoverleave" ref="point" r="5"></circle>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Point",
  mounted: function() {
    this.drawPoint();
  },
  props: ["pointdata", "scale"],
  methods: {
    drawPoint() {
      var scale = this.scale;

      var $point = d3.select(this.$refs.point);
      $point
        .datum(this.pointdata)
        .attr("cx", function(d) {
          return scale.x(d.timestamp);
        })
        .attr("cy", function(d) {
          return scale.y(d.value);
        });
    },
    onHoverover(event) {
      event.pointdata = {
        value: this.pointdata.value,
        timestamp: this.pointdata.timestamp
      };
      this.$emit("hover", event);
    },
    onHoverleave(event) {
      this.$emit("leave", event);
    }
  }
};
</script>