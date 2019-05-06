<template>
  <path ref="area" :style="style"></path>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Area",
  props: ["chartdata", "scale"],
  mounted: function() {
    this.drawArea();
  },
  methods: {
    drawArea() {
      var scale = this.scale;
      var area = d3
        .area()
        .x(function(d) {
          return scale.x(d.timestamp);
        })
        .y0(scale.y(0))
        .y1(function(d) {
          return scale.y(d.value);
        });

      var $area = d3.select(this.$refs.area);

      $area.datum(this.chartdata).attr("d", area);
    }
  },
  computed: {
    style() {
      return {
        fill: this.scale.color("Previous"),
        fillOpacity: 0.25
      };
    }
  }
};
</script>