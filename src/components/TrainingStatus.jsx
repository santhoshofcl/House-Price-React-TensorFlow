import React from 'react';

export default function TrainingStatus({ status, lossHistory }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">Training Status</h3>
      <p className="text-sm mt-2">{status}</p>
      <h3 className="font-semibold mt-4">Loss History</h3>
      <div className="h-24 overflow-auto text-xs">
        {lossHistory.map((l, i) => (
          <p key={i}>Epoch {i}: {l.toFixed(5)}</p>
        ))}
      </div>
    </div>
  );
}