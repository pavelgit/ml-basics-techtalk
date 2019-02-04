const iris2 = require('./iris2');

const irisSetosa = {
  x: iris2.filter(v => v.species === 'Iris-setosa').map(v => v.sepal_length),
  y: iris2.filter(v => v.species === 'Iris-setosa').map(v => v.sepal_width),
  mode: 'markers',
  type: 'scatter'
};

const irisVirginica = {
  x: iris2.filter(v => v.species === 'Iris-virginica').map(v => v.sepal_length),
  y: iris2.filter(v => v.species === 'Iris-virginica').map(v => v.sepal_width),
  mode: 'markers',
  type: 'scatter'
};

const layout = {
  autosize: false,
  width: 1000,
  height: 1000,
  xaxis: {
    range: [0, 10]
  },
  yaxis: {
    range: [0, 10]
  },
  shapes: [
    {
      type: 'line',
      xref: 'x',
      yref: 'y',
      x0: 1,
      y0: 1,
      x1: 2,
      y1: 2,
      fillcolor: '#d3d3d3'
    }
  ]
};

window.onload = () => Plotly.newPlot('div', [irisSetosa, irisVirginica], layout);

setInterval(() => {
  layout.shapes[0].x0 += 0.25;
  Plotly.react('div', [irisSetosa, irisVirginica], layout);
}, 1000);