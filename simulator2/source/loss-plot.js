import React from 'react';
import basicPerceptronModel from '../source/basic-perceptron-model';
import createPlotlyComponent from 'react-plotly.js/factory'

export default class extends React.Component {

  state = {
    isClient: false
  };

  plotLayout = {
    autosize: false,
    width: 800,
    height: 800,
    xaxis: {
      range: [-10, 10]
    },
    yaxis: {
      range: [-10, 10]
    }
  };

  generateData() {
    const points = [];
    /*for (let k = -100; k < 100; k++) {
      for (let b = -100; b < 100; b++) {
        basicPerceptronModel.k = k;
        basicPerceptronModel.b = b;
        points.push({ x:k, y:b, z: basicPerceptronModel.evaluateLoss() });
      }
    }*/
    return {
      x: points.map(p => p.x),
      y: points.map(p => p.y),
      z: points.map(p => p.z),
      type: 'contour',
      contours: {
        coloring: 'heatmap'
      }
    }
  };


  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    if (!this.state.isClient) {
      return null;
    }
    const Plot = createPlotlyComponent(Plotly);
    return (
      <Plot
        data={[this.generateData()]}
        layout={this.plotLayout}
      />
    );
  }

}