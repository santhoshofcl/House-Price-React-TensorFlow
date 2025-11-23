import React from 'react';

export default function PredictionBox({ predictedPrice }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">Predicted Price</h3>
      <p className="text-xl mt-2">{predictedPrice ? `₹ ${predictedPrice}` : '—'}</p>
    </div>
  );
}