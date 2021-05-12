import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [radius, setRadius] = useState(0)
  const [size, setSize] = useState(100)

  const style = {
    width: size + 'px',
    height: size + 'px',
    transform: `rotate(${radius}deg)`,
  }

  return (
    <div className="App">
      <label>
        Size:
        <input value={size} onChange={handleChange} type="range" max="200" />
      </label>

      <label>
        Radius:
        <input
          value={radius}
          onChange={handleRadiusChange}
          type="range"
          max="360"
          min="0"
        />
      </label>
      <div style={style} className="Box" />
    </div>
  )

  function handleChange(event) {
    const input = event.target
    setSize(input.value)
  }

  function handleRadiusChange(event) {
    const input = event.target
    setRadius(input.value)
  }
}
