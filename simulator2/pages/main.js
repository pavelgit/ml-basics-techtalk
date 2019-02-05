import React from 'react';
import basicPerceptronModel from '../source/basic-perceptron-model';
import FloatSlider from './../source/float-slider';
import IrisPlot from '../source/iris-plot';
import LossPlot from '../source/loss-plot';

export default class extends React.Component {

  state = {
    isClient: false
  };

  render() {
    return (
      <div>
        <IrisPlot />
        <LossPlot />
        <FloatSlider
          rangeLimit={100}
          value={basicPerceptronModel.k}
          onChange={value => { basicPerceptronModel.k = value; this.forceUpdate();}}
        />
        <div>K={basicPerceptronModel.k}</div>

        <FloatSlider
          rangeLimit={100}
          value={basicPerceptronModel.b}
          onChange={value => { basicPerceptronModel.b = value; this.forceUpdate(); }}
        />
        <div>b={basicPerceptronModel.b}</div>

        <div>Loss={basicPerceptronModel.evaluateLoss()}</div>
      </div>
    );
  }

}