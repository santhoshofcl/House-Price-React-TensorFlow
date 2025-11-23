import React from 'react';

export default function FormInput({ size, setSize, beds, setBeds, age, setAge, location, setLocation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label>Size (sqft)</label>
        <input type="number" value={size} onChange={e => setSize(+e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Bedrooms</label>
        <input type="number" value={beds} onChange={e => setBeds(+e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Age (years)</label>
        <input type="number" value={age} onChange={e => setAge(+e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Location</label>
        <select value={location} onChange={e => setLocation(e.target.value)} className="border p-2 w-full">
          <option value="city">City</option>
          <option value="suburb">Suburb</option>
          <option value="rural">Rural</option>
        </select>
      </div>
    </div>
  );
}
