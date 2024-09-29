import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div id="changeColor" style={{backgroundColor: bgColor}}>
        <h1>Click To Change Background Color</h1>
        <div>
          <button className="btn" onClick={() => changeColor('#644899')} style={{backgroundColor:"#644899"}}></button>
          <button className="btn" onClick={() => changeColor('#824899')} style={{backgroundColor:"#824899"}}></button>
          <button className="btn" onClick={() => changeColor('#9e0b3c')} style={{backgroundColor:"#9e0b3c"}}></button>
          <button className="btn" onClick={() => changeColor('#0b889e')} style={{backgroundColor:"#0b889e"}}></button>
          <button className="btn" onClick={() => changeColor('#9e1c0b')} style={{backgroundColor:"#9e1c0b"}}></button>
        </div>
      </div>
    </>
  )
}

export default App