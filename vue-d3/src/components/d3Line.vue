<template>
  <path ref="line" :style="style"></path>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Line",
  props: ["chartdata", "scale"],
  mounted: function() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var scale = this.scale;
      var line = d3
        .line()
        .x(function(d) {
          return scale.x(d.timestamp);
        })
        .y(function(d) {
          return scale.y(d.value);
        });
      var $line = d3.select(this.$refs.line);
      $line.datum(this.chartdata).attr("d", line);
    }
  },
  computed: {
    style() {
      return {
        fill: "none",
        stroke: this.scale.color("Previous"),
        strokeWidth: 2
      };
    }
  }
};
</script>