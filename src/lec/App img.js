import { useState } from 'react';
import './App.css'
import { vData, vData1 } from '../data.js'


function App() {
  const [viewData, setViewData] = useState(vData)
  const [viewData1, setViewData1] = useState(vData1)
  return (
    <div className="App">
      {
        viewData.map(function (item) {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div className='avata'>
                  <img src={`./img/${item.img}`} alt="" />
                </div>
              </div>
            </>
          )
        })
      }
      <hr />
      {
        viewData1.map(function (item) {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div className='avata'>
                  <img src={`./img/${item.img}`} alt="" />
                </div>
              </div>

            </>
          )
        })
      }
    </div>
  )
}


export default App;