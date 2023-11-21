import { useState } from 'react';
import './App.css'
import './view.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isActive, setIsActive] = useState(false)
  function boxView() {
    // alert("test")
    setIsActive(!isActive)

  }
  return (
    <div className="App">

      <div className={`boxWrap ${isActive ? "active" : ''}`} onClick={boxView}>
        <div className='bar start'></div>
        <div className='bar middle'></div>
        <div className='bar end'></div>
      </div>

      <div className={`bgWrap ${isActive ? 'view' : ''}`} onClick={boxView}>
        <div className='box'>
          <h3>view</h3>
        </div>
      </div>

    </div>
  )
}


export default App;