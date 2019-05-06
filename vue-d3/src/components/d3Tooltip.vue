<template>
  <div class="tooltip" :style="tooltipstyle">
    <p>Value: {{value}}</p>
    <p>Timestamp: {{timestamp}}</p>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Tooltip",
  props: ["tooltipstyle", "value", "timestamp"]
};
</script>

<style scoped>
.tooltip {
  position: absolute;
  text-align: center;
  padding: 2px;
  color: white;
  font: 12px sans-serif;
  background: rgb(74, 75, 77);
  border: 0px;
  border-radius: 8px;
  pointer-events: none;
  display: inline-block;
}
</style>    