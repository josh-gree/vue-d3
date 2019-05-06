<template>
  <g>
    <d3Point
      v-for="pointdata in d"
      :pointdata="pointdata"
      :scale="scale"
      @hover="onHover"
      @leave="onLeave"
    ></d3Point>
  </g>
</template>

<script>
import d3Point from "./d3Point.vue";

export default {
  name: "d3Scatter",
  components: { d3Point },
  props: ["chartdata", "scale"],
  data() {
    return {
      d: this.chartdata
    };
  },
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