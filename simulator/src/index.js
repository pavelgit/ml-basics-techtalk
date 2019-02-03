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


window.onload = () => Plotly.newPlot('div', [irisSetosa, irisVirginica]);