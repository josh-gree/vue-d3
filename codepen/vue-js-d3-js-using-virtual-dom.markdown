# Vue.js + d3.js (using virtual DOM)

A reactive d3.js chart assembled using Vue.js templating system, with prop inheritance and watch state propagation.

A [Pen](https://codepen.io/josh-gree/pen/oRvOeb) by [Joshua Greenhalgh](https://codepen.io/josh-gree) on [CodePen](https://codepen.io).

[License](https://codepen.io/josh-gree/pen/oRvOeb/license).

## Components

component -> subcomponent1, ..., subcomponentn

### d3__chart -> d3__axis, d3__series
- props: layout, chart-data, axes
- tags: svg, g, d3__axis, d3__series
- description: TODO

### d3__axis -> None
- props: axis, layout, scale
- tags: g
- description: TODO

### d3__series -> d3__area, d3__line, d3__scatter
- props: series-data, layout, scale
- tags: g, d3__area, d3__line, d3__scatter
- description: TODO

### d3__line -> None
- props: series-data, layout, scale
- tags: path
- description: TODO

### d3__area -> None
- props: series-data, layout, scale
- tags: path
- description: TODO

### d3__scatter -> d3__point
- props: series-data, layout, scale
- tags: g, d3__point
- description: TODO

### d3__point
- props: series-id, point-data, layout, scale
- tags: circle 
- description: TODO

## SVG tags used

- svg: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg

- g: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
    - if a component has multiple svg elements then we need a g tag to contain them. This can be seen in d3__chart, d3__series and d3__scatter. However in d3__line, d3__area and d3__point there is only a single svg element and thus no g tag needed.

- path: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path

- circle: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
