import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

  static propTypes = {
    rangeLimit: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };

  sliderSteps = 1000;

  getValue() {
    return Math.round(this.props.value / this.props.rangeLimit * this.sliderSteps);
  }

  onChange(value) {
    this.props.onChange(value / this.sliderSteps * this.props.rangeLimit);
  }

  render() {
    return (
      <input
        style={{width: '100%'}}
        type="range" min={-this.sliderSteps} max={this.sliderSteps}
        value={this.getValue()}
        onChange={e => this.onChange(e.target.value)}
      />
    );
  }

}