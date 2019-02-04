import React from 'react';
import { irisSetosa, irisVirginica } from '../source/plot-data';
import basicPerceptronModel from '../source/basic-perceptron-model';
import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly);

export default class extends React.Component {

  kSliderOptions = {
    sliderSteps: 100,
    maxValue: 10
  };

  plotLayout = {
    autosize: false,
    width: 1000,
    height: 1000,
    xaxis: {
      range: [0, 10]
    },
    yaxis: {
      range: [0, 10]
    }
  };

  generateModelEvaludationData() {
    const points = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        points.push({ x, y, z: basicPerceptronModel.evaluate(x, y) });
      }
    }
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

  getKValue() {
    return Math.round(basicPerceptronModel.k / this.kSliderOptions.maxValue * this.kSliderOptions.sliderSteps);
  }

  onKChange(value) {
    basicPerceptronModel.k = value / this.kSliderOptions.sliderSteps * this.kSliderOptions.maxValue;

  }

  rebuildLayout() {
    this.plotLayout.shapes[0].x0 = -1000;
    this.plotLayout.shapes[0].y0 = this.plotLayout.shapes[0].x0 *
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Plot
          data={[irisSetosa, irisVirginica, this.generateModelEvaludationData()]}
          layout={this.plotLayout}
        />
        <input
          type="range" min={-this.kSliderOptions.sliderSteps} max={this.kSliderOptions.sliderSteps}
          value={this.getKValue()}
          onChange={e => this.onKChange(e.target.value)}
        />
      </div>
    );
  }

}