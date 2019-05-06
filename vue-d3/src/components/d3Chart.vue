<template>
  <div>
    <d3Tooltip
      v-if="tooltipshow"
      :tooltipstyle="tooltipstyle"
      :value="tooltipvalue"
      :timestamp="tooltiptimestamp"
    ></d3Tooltip>
    <svg :view-box.camel="viewBox" preserveAspectRatio="xMidYMid meet">
      <g :style="stageStyle">
        <d3Axis v-for="axis in axislist" :axis="axis" :scale="scale" :layout="layout"></d3Axis>
        <d3Series :chartdata="chartdata" :scale="scale" @hover="onHover" @leave="onLeave"></d3Series>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

import d3Axis from "./d3Axis.vue";
import d3Series from "./d3Series.vue";
import d3Tooltip from "./d3Tooltip.vue";

export default {
  name: "d3Chart",
  components: { d3Axis, d3Series, d3Tooltip },
  props: [
    "layout", // Dimensions for the chart and margins
    "chartdata"
  ],
  computed: {
    viewBox() {
      var outerWidth =
          this.layout.width + this.layout.marginLeft + this.layout.marginRight,
        outerHeight =
          this.layout.height + this.layout.marginTop + this.layout.marginBottom;
      return "0 0 " + outerWidth + " " + outerHeight;
    },
    stageStyle() {
      return {
        transform:
          "translate(" +
          this.layout.marginLeft +
          "px," +
          this.layout.marginTop +
          "px)"
      };
    }
  },
  data() {
    return {
      scale: {
        x: this.getScaleX(),
        y: this.getScaleY(),
        color: d3
          .scaleOrdinal()
          .range(["#159078", "#999999"])
          .domain(["Current", "Previous"])
      },
      axislist: ["left", "bottom"],
      tooltipstyle: {
        opacity: 0
      },
      tooltipshow: false,
      tooltipvalue: "",
      tooltiptimestamp: ""
    };
  },
  methods: {
    onHover(event) {
      this.tooltipshow = true;

      this.tooltipstyle = {
        opacity: 0.9,
        left: event.pageX + 10 + "px",
        top: event.pageY - 40 + "px"
      };

      this.tooltipvalue = event.pointdata.value;
      this.tooltiptimestamp = d3.utcFormat("%Y-%m-%dT%H:%M:%S")(
        event.pointdata.timestamp
      );
    },
    onLeave(event) {
      this.tooltipshow = false;
    },
    getScaleX() {
      return d3
        .scaleTime()
        .range([0, this.layout.width])
        .domain(
          d3.extent(this.chartdata, function(d) {
            return d.timestamp;
          })
        );
    },
    getScaleY() {
      return d3
        .scaleLinear()
        .range([this.layout.height, 0])
        .domain([
          0,
          d3.max(this.chartdata, function(d) {
            return d.value;
          })
        ]);
    }
  }
};
</script>

<style scoped>
svg {
  background-color: white;
  width: 1000px;
  height: 500px;
}
</style>