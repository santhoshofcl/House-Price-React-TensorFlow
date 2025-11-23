import * as tf from '@tensorflow/tfjs';

export function createModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [4], units: 16, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 12, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

  model.compile({ optimizer: tf.train.adam(0.01), loss: 'meanSquaredError' });
  return model;
}
