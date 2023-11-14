import { useState } from 'react';
import './App.css'

import ModalView from "../components/ModalView.jsx"
function App() {
  const [num, setNum] = useState(0)
  const [data, setData] = useState([
    "1",
    "",
    "",
  ])
  // function handlerTab() {
  //   setNum(1)
  // }
  return (
    <div className="App">
      {/* <ModalView/> */}
      {num}

      <div className='tab'>
        <ul>
          <li onClick={() => { setNum(0) }} className={`${num == 0 ? "active" : ""}`}>tab1</li>
          <li onClick={() => { setNum(1) }} className={`${num == 1 ? "active" : ""}`}>tab2</li>
          <li onClick={() => { setNum(2) }} className={`${num == 2 ? "active" : ""}`}>tab3</li>
        </ul>
      </div>
      <div style={{ margin: "0 0 10px 0" }}>
        {data[num]}
      </div>
      <hr />
      <ul>
        {
          data.map(function (item) {
            return (
              <>
               <li>{item}</li>
              </>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
