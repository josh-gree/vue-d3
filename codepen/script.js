var response = {
  "data": {
    "flipbooks": {
      "rawData": [
        ["2017-03-01T01:00:00", 1, 3],
        ["2017-03-02T01:00:00", 2, 6],
        ["2017-03-03T01:00:00", 2, 6],
        ["2017-03-04T01:00:00", 2, 6],
        ["2017-03-05T01:00:00", 2, 6],
        ["2017-03-06T01:00:00", 4, 6],
        ["2017-03-07T01:00:00", 9, 7],
        ["2017-03-08T01:00:00", 18, 14],
        ["2017-03-09T01:00:00", 23, 16],
        ["2017-03-10T01:00:00", 24, 16],
        ["2017-03-11T01:00:00", 24, 16],
        ["2017-03-12T01:00:00", 24, 16],
        ["2017-03-13T01:00:00", 25, 18],
        ["2017-03-14T01:00:00", 26, 19],
        ["2017-03-15T01:00:00", 30, 21],
        ["2017-03-16T01:00:00", 32, 23],
        ["2017-03-17T01:00:00", 32, 23],
        ["2017-03-18T01:00:00", 32, 23],
        ["2017-03-19T01:00:00", 32, 23],
        ["2017-03-20T01:00:00", 32, 23],
        ["2017-03-21T01:00:00", 32, 25],
        ["2017-03-22T01:00:00", 32, 26],
        ["2017-03-23T01:00:00", 32, 28],
        ["2017-03-24T01:00:00", 32, 29],
        ["2017-03-25T01:00:00", 32, 29],
        ["2017-03-26T01:00:00", 32, 29],
        ["2017-03-27T01:00:00", 32, 29],
        ["2017-03-28T01:00:00", 35, 29],
        ["2017-03-29T01:00:00", 35, 29],
        ["2017-03-30T01:00:00", 35, null],
        ["2017-03-31T01:00:00", 35, null]
      ]
    }
  }
};
var chartData = response.data.flipbooks.rawData;

// Parse the data and split it into series
var columns = ['Timestamp', 'Previous', 'Current'],
  offset = 1;
var c = columns.slice(offset).map(function (id, index) {
  return {
    id: id,
    values: chartData.map(function (d) {
      return {
        timestamp: d3.utcParse("%Y-%m-%dT%H:%M:%S")(d[0]).setHours(0, 0, 0, 0),
        value: d[index + offset]
      }
    })
  }
});

// The above just creates some data stored in c that will be used in the viz

// sets up the margin conventions for d3 - https://bl.ocks.org/mbostock/3019563
// watches for changes to the page so that chart is responsive. Why

// Component: SVG parent and stage
Vue.component('d3__chart', {
  template: '#d3__chart',
  props: [
    'axes',       // Chart axes
    'layout',     // Dimensions for the chart and margins
    'chart-data'  // Data for plotting
  ],
  computed: {

    // SVG viewbox
    viewBox: function () {
      var outerWidth = this.layout.width + this.layout.marginLeft + this.layout.marginRight,
        outerHeight = this.layout.height + this.layout.marginTop + this.layout.marginBottom;
      return '0 0 ' + outerWidth + ' ' + outerHeight;
    },

    // Stage
    stageStyle: function () {
      return {
        'transform': 'translate(' + this.layout.marginLeft + 'px,' + this.layout.marginTop + 'px)'
      }
    }
  },
  data: function () {
    return {
      scale: {
        x: this.getScaleX(),
        y: this.getScaleY(),
        color: d3.scaleOrdinal()
          .range(['#159078', '#999999'])
          .domain(['Current', 'Previous'])
      }
    }
  },
  methods: {

    // Get x-axis scale
    getScaleX: function () {
      return d3.scaleTime()
        .range([0, this.layout.width])
        // not sure why not using this. here? If changed everything breaks!
        .domain(d3.extent(chartData, function (d) {
          return d3.utcParse("%Y-%m-%dT%H:%M:%S")(d[0]).setHours(0, 0, 0, 0)
        }));
    },

    // Get y-axis scale
    getScaleY: function () {
      return d3.scaleLinear()
        .range([this.layout.height, 0])
        .domain([
          0,
          d3.max(this.chartData, function (d) {
            return d3.max(d.values, function (e) {
              return e.value;
            })
          })
        ]);
    }
  },
  watch: {
    // Watch for layout changes
    layout: {
      deep: true,
      handler: function (val, oldVal) {
        this.scale.x = this.getScaleX();
        this.scale.y = this.getScaleY();
      }
    }
  }
});

// Component: Chart axes
Vue.component('d3__axis', {
  template: '#d3__axis',
  props: ['axis', 'layout', 'scale'],
  data: function () {
    return {
      classList: ['axis'].concat(this.getAxisClasses())
    }
  },
  mounted: function () {
    this.drawAxis();
  },
  computed: {
    style: function () {
      return {
        transform: this.getAxisTransform()
      }
    }
  },
  methods: {

    // Return a class list containg the appropriate labels for axes
    getAxisClasses: function () {
      var axis = {
        top: 'x',
        bottom: 'x',
        left: 'y',
        right: 'y'
      };
      return [this.axis, axis[this.axis]];
    },

    // Draw axis
    drawAxis: function () {

      var $axis = d3.select(this.$refs.axis);
      var scale = this.scale;
      var axisGenerator = {
        top: d3.axisTop(scale.x).tickFormat(d3.timeFormat("%b %d")),
        right: d3.axisRight(scale.y),
        bottom: d3.axisBottom(scale.x).tickFormat(d3.timeFormat("%b %d")),
        left: d3.axisLeft(scale.y)
      }

      $axis.call(axisGenerator[this.axis]);
    },

    // Return necessary axis transformation for proper positioning
    getAxisTransform: function () {

      var axisOffset = {
        top: { x: 0, y: 0 },
        right: { x: this.layout.width, y: 0 },
        bottom: { x: 0, y: this.layout.height },
        left: { x: 0, y: 0 }
      };

      return 'translate(' + axisOffset[this.axis].x + 'px, ' + axisOffset[this.axis].y + 'px)';
    }
  },
  watch: {
    // Changes to scale means we have to redraw the line!
    scale: {
      deep: true,
      handler: function (val, oldVal) {
        this.drawAxis();
      }
    }
  }
});

// Component: Data series
// basicly just a container to seperate out functionalty - why does this not need the noop watch like in the scatter component?
Vue.component('d3__series', {
  template: '#d3__series',
  props: ['layout', 'series-data', 'scale']
});

// Component: D3 line
Vue.component('d3__line', {
  template: '#d3__line',
  props: ['layout', 'series-data', 'scale'],
  mounted: function () {
    this.drawLine();
  },
  methods: {
    drawLine: function () {

      // Get scale
      var scale = this.scale;

      // Line object
      var line = d3.line()
        .x(function (d) {
          return scale.x(d.timestamp);
        })
        .y(function (d) {
          return scale.y(d.value);
        });

      // DOM node for line
      var $line = d3.select(this.$refs.line);
      // this could be;
      // $line
      // .datum(this.seriesData.values.filter(function (d) {
      //   return typeof d.value !== typeof null;
      // }))
      // .attr('d', line);
      $line
        .data([this.seriesData.values.filter(function (d) {
          return typeof d.value !== typeof null;
        })])
        .attr('d', line);
    }
  },
  computed: {
    style: function () {
      return {
        fill: 'none',
        stroke: this.scale.color(this.seriesData.id),
        strokeWidth: 2
      }
    }
  },
  watch: {
    // Changes to scale means we have to redraw the line!
    scale: {
      deep: true,
      handler: function (val, oldVal) {
        this.drawLine();
      }
    }
  }
});

// Component: D3 point/scatter
// basicly just a container to seperate out functionalty
Vue.component('d3__scatter', {
  template: '#d3__scatter',
  props: ['layout', 'series-data', 'scale'],
  watch: {
    scale: {
      deep: true,
      handler: function () { }  // Has to be included for nested components watch to fire properly
    }
  }
});

// D3 component: points
Vue.component('d3__point', {
  template: '#d3__point',
  props: ['layout', 'point-data', 'scale', 'series-id'],
  mounted: function () {
    this.drawPoint();
  },
  methods: {
    drawPoint: function () {

      // Get scales
      var scale = this.scale;

      // DOM node for points
      var $point = d3.select(this.$refs.point);
      $point
        .datum(this.pointData)
        .attr('cx', function (d) {
          return scale.x(d.timestamp);
        })
        .attr('cy', function (d) {
          return scale.y(d.value);
        })
        .attr('r', 5);
    }
  },
  computed: {
    style: function () {
      return {
        fill: '#fff',
        stroke: this.scale.color(this.seriesId),
        strokeWidth: 2
      }
    }
  },
  watch: {
    scale: {
      deep: true,
      handler: function (val, oldVal) {
        this.drawPoint();
      }
    }
  }
});

// Component: D3 area
Vue.component('d3__area', {
  template: '#d3__area',
  props: ['layout', 'series-data', 'scale'],
  mounted: function () {
    this.drawArea();
  },
  methods: {
    drawArea: function () {
      // Get scale
      var scale = this.scale;

      // Area object
      var area = d3.area()
        .x(function (d) {
          return scale.x(d.timestamp);
        })
        .y0(scale.y(0))
        .y1(function (d) {
          return scale.y(d.value);
        });

      // DOM node for area
      var $area = d3.select(this.$refs.area);

      // differnce between using .data (in d3__line) and .datum? https://stackoverflow.com/a/41819109, https://stackoverflow.com/a/51946496
      // So datum binds the data passed to all elements of the selection in this case the single path el. Whereas data binds each element passed to each 
      // element in selection!? Don't really understand this! Ok seems that can change this to use data if the arg is a list...
      // can become;
      // $area
      // .data([this.seriesData.values.filter(function (d) {
      //   return typeof d.value !== typeof null;
      // })])
      // .attr('d', area);

      $area
        .datum(this.seriesData.values.filter(function (d) {
          return typeof d.value !== typeof null;
        }))
        .attr('d', area);
    }
  },
  computed: {
    style: function () {
      return {
        fill: this.scale.color(this.seriesData.id),
        fillOpacity: 0.25
      }
    }
  },
  watch: {
    // Changes to scale means we have to redraw the line!
    scale: {
      deep: true,
      handler: function (val, oldVal) {
        this.drawArea();
      }
    }
  }
});

// Initialize chart
var d3Vis = new Vue({
  el: '#chart',
  data: {
    layout: {
      width: 800,
      height: 250,
      marginTop: 45,
      marginRight: 35,
      marginBottom: 50,
      marginLeft: 50,
    },
    chartData: c,
    axes: ['left', 'bottom']
  }
});