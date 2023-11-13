import { useState } from 'react';
import logo from './logo.svg';
import './App.css'

function App() {
  let [data,setData] = useState(1)
  let [listData,setListData] = useState(['list1','list2','list3'])
  let [mView,setMView] = useState(false)
  let today = new Date();
  let time = {
    year : today.getFullYear(),
    month : today.getMonth() + 1,
    date : today.getDate()
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={()=>{setData(data + 1)}}>클릭</button>
      {
        listData.map(function(item,i){
          return(
            <>
              <div className='flex'>
                <div className='list'>{item}</div>
                <div>{time.year}/{time.month}/{time.date}</div>
              </div>
            </>
          )
        })
      }
      <button onClick={()=>{setMView(!mView)}}>클릭</button>
      {
        mView == true ? <Modal></Modal> : null
      }
    </div>
  )
}   
      
function Modal() {
  return(
    <>
      <div className='modal'>
        <h3>제목</h3>
        <p>안녕하세요</p>
      </div>
    </>
  )
}

export default App;
