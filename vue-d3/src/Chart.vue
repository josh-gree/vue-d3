<template>
  <div>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    <div class="container">
      <d3Chart :layout="layout" :chartdata="chartdata"></d3Chart>
    </div>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  </div>
</template>

<script>
import d3Chart from "./components/d3Chart.vue";

export default {
  name: "chart",
  components: { d3Chart },
  data() {
    return {
      layout: {
        width: 800,
        height: 400,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 40
      },
      chartdata: [
        { timestamp: Date.parse("2017-03-01T01:00:00"), value: 1 },
        { timestamp: Date.parse("2017-03-02T01:00:00"), value: 2 },
        { timestamp: Date.parse("2017-03-03T01:00:00"), value: 2 },
        { timestamp: Date.parse("2017-03-04T01:00:00"), value: 2 },
        { timestamp: Date.parse("2017-03-05T01:00:00"), value: 2 },
        { timestamp: Date.parse("2017-03-06T01:00:00"), value: 4 },
        { timestamp: Date.parse("2017-03-07T01:00:00"), value: 9 },
        { timestamp: Date.parse("2017-03-08T01:00:00"), value: 18 },
        { timestamp: Date.parse("2017-03-09T01:00:00"), value: 23 },
        { timestamp: Date.parse("2017-03-09T01:00:00"), value: 23 },
        { timestamp: Date.parse("2017-03-09T01:00:00"), value: 23 },
        { timestamp: Date.parse("2017-03-09T01:00:00"), value: 23 },
        { timestamp: Date.parse("2017-03-09T01:00:00"), value: 23 },
        { timestamp: Date.parse("2017-03-10T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-10T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-10T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-10T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-10T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-11T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-11T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-11T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-11T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-11T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-12T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-12T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-12T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-12T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-12T01:00:00"), value: 24 },
        { timestamp: Date.parse("2017-03-13T01:00:00"), value: 25 },
        { timestamp: Date.parse("2017-03-13T01:00:00"), value: 25 },
        { timestamp: Date.parse("2017-03-13T01:00:00"), value: 25 },
        { timestamp: Date.parse("2017-03-13T01:00:00"), value: 25 },
        { timestamp: Date.parse("2017-03-13T01:00:00"), value: 25 },
        { timestamp: Date.parse("2017-03-14T01:00:00"), value: 26 },
        { timestamp: Date.parse("2017-03-14T01:00:00"), value: 26 },
        { timestamp: Date.parse("2017-03-14T01:00:00"), value: 26 },
        { timestamp: Date.parse("2017-03-14T01:00:00"), value: 26 },
        { timestamp: Date.parse("2017-03-14T01:00:00"), value: 26 },
        { timestamp: Date.parse("2017-03-15T01:00:00"), value: 30 },
        { timestamp: Date.parse("2017-03-15T01:00:00"), value: 30 },
        { timestamp: Date.parse("2017-03-15T01:00:00"), value: 30 },
        { timestamp: Date.parse("2017-03-15T01:00:00"), value: 30 },
        { timestamp: Date.parse("2017-03-15T01:00:00"), value: 30 },
        { timestamp: Date.parse("2017-03-16T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-16T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-16T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-16T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-16T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-17T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-18T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-19T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-20T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-21T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-22T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-23T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-24T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-25T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-26T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-27T01:00:00"), value: 32 },
        { timestamp: Date.parse("2017-03-28T01:00:00"), value: 35 },
        { timestamp: Date.parse("2017-03-29T01:00:00"), value: 35 }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
