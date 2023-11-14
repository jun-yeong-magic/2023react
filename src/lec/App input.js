import { useState } from 'react';
import './App.css'
import Modal from '../components/Modal.jsx'

function App() {
  const [vData,setVdata] =useState([
    "1.Lorem ipsum dolor sit amet.",
    "2.Sequi ullam doloremque maiores quisquam!",
    "3.Ex magnam nostrum cumque nemo."
  ])
  const [num,setNum] = useState(0)
  const [view,setView] = useState(false)
  const [textData,setTextData] = useState("")

  const listView = function(num){
    setNum(num)
    setView(true)
    console.log(num);
  }

  const handleClose = ()=>{
    setView(false)
  }
  return (
    <div className="App">
      <div className='num'>
        {num}
      </div>
      <ul className='lists'>
      {
        vData.map(function(item,i){
          return(
            <>
            <li onClick={()=>{listView(i)}}>{item}</li>
            </>
          )
        })
      }
      </ul>
      
      {
        view == true ? <Modal vContent={vData[num]}  onClose={handleClose} /> : null
      }
      {textData}<br />
      <input type="text" onChange={(e)=>{setTextData(e.target.value)}}  value={textData} />
      <button onClick={()=>{
        let copy = [...vData];
        copy.unshift(textData);
        setVdata(copy)
      }}>입력</button>
      <button onClick={()=>{setTextData('')}}>지움</button>
    </div>
  )
}



export default App;