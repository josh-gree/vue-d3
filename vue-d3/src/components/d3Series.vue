<template>
  <g>
    <!-- dont think we need the this. here? -->
    <d3Area :chartdata="chartdata" :scale="scale"></d3Area>
    <d3Line :chartdata="chartdata" :scale="scale"></d3Line>
    <d3Scatter :chartdata="chartdata" :scale="scale" @hover="onHover" @leave="onLeave"></d3Scatter>
  </g>
</template>

<script>
import d3Area from "./d3Area.vue";
import d3Line from "./d3Line.vue";
import d3Scatter from "./d3Scatter.vue";

export default {
  name: "d3Series",
  props: ["chartdata", "scale"],
  components: { d3Area, d3Line, d3Scatter },
  methods: {
    onHover(event) {
      this.$emit("hover", event);
    },
    onLeave(event) {
      this.$emit("leave", event);
    }
  }
};
</script>