import * as tf from '@tensorflow/tfjs';
import { locEncode } from '../data/sampleData';

export function prepareData(data) {
  const sizes = data.map(d => d.size);
  const beds = data.map(d => d.beds);
  const ages = data.map(d => d.age);
  const prices = data.map(d => d.price);

  const maxSize = Math.max(...sizes);
  const maxBeds = Math.max(...beds);
  const maxAge = Math.max(...ages);
  const maxPrice = Math.max(...prices);

  const xs = data.map(d => [d.size / maxSize, d.beds / maxBeds, d.age / maxAge, locEncode(d.loc)]);
  const ys = data.map(d => d.price / maxPrice);

  return {
    xs: tf.tensor2d(xs),
    ys: tf.tensor2d(ys, [ys.length, 1]),
    maxSize,
    maxBeds,
    maxAge,
    maxPrice,
  };
}