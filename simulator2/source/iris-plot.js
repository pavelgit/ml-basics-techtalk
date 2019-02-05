import React from 'react';
import { irisSetosaPlotData, irisVersicolorPlotData } from '../source/data-provider';
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
      range: [0, 10]
    },
    yaxis: {
      range: [0, 10]
    },
    shapes: []
  };

  getClassificationLineShape() {
    const x0 = -10;
    const y0 = basicPerceptronModel.getClassificationLineY(x0);
    const x1 = +10;
    const y1 = basicPerceptronModel.getClassificationLineY(x1);
    return {
      type: 'line',
      x0, y0, x1, y1
    };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  componentWillUpdate() {
    this.plotLayout.shapes[0] = this.getClassificationLineShape();
  }

  render() {
    if (!this.state.isClient) {
      return null;
    }
    const Plot = createPlotlyComponent(Plotly);
    return (
      <Plot
        data={[irisSetosaPlotData, irisVersicolorPlotData]}
        layout={this.plotLayout}
      />
    );
  }

}