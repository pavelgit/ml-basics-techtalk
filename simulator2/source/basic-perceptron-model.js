export default new class BasicPerceptronModel {

  constructor(trainingData) {
    this.trainingData = trainingData;
    this.k = 0;
    this.b = 0;
  }

  evaluateActivation(v) {
    return v;
  }

  evaluate(x, y) {
    return this.evaluateActivation(this.k*x + y + this.b);
  }

  predict(x, y) {
    return Math.sign(this.evaluate(x, y));
  }

}