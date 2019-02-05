const iris2 = [require('./iris2')[0]];

const irisSetosaPlotData = {
  x: iris2.filter(v => v.species === 'Iris-setosa').map(v => v.petal_length),
  y: iris2.filter(v => v.species === 'Iris-setosa').map(v => v.petal_width),
  name: 'Iris-setosa',
  mode: 'markers',
  type: 'scatter'
};

const irisVersicolorPlotData = {
  x: iris2.filter(v => v.species === 'Iris-versicolor').map(v => v.petal_length),
  y: iris2.filter(v => v.species === 'Iris-versicolor').map(v => v.petal_width),
  name: 'Iris-versicolor',
  mode: 'markers',
  type: 'scatter'
};

const trainingExamples = iris2.map(v => (
  {
    x: v.petal_length,
    y: v.petal_width,
    category: v.species === 'Iris-setosa' ? 1 : 0
  }
));

export { irisSetosaPlotData, irisVersicolorPlotData, trainingExamples };