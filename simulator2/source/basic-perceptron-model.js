import { trainingExamples } from './data-provider';

export default new class BasicPerceptronModel {

  constructor() {
    this.k = 0;
    this.b = 0;
  }

  evaluateActivation(v) {
    return 1 / (1 + Math.exp(-v));
  }

  getClassificationLineY(x) {
    return this.k * x + this.b;
  }

  evaluate(x, y) {
    const distanceToLine = (x - this.k * ( y - this.b ))/Math.sqrt(1-this.k*this.k);
    console.log(distanceToLine);
    return this.evaluateActivation(distanceToLine);
  }

  evaluateCost(x, y, category) {
    return Math.abs(this.evaluate(x, y) - category);
  }

  predict(x, y) {
    return Math.sign(this.evaluate(x, y));
  }

  evaluateLoss() {
    return trainingExamples.reduce((acc, v) => acc + this.evaluateCost(v.x, v.y, v.category), 0)
  }

}