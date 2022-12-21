import React from 'react'
import { useNavigate } from 'react-router-dom'
const Wish = () => {
  const navigate=useNavigate();
  const navig=useNavigate();
  const handClick=()=>{
    navigate("/Quotes")
  }
  const handClicks=()=>{
    navig("/Final")
  }
  return (
    <center>
    <div className='ba'>
      <button className='btn1' onClick={handClick}>Back</button>
      <button className='btn2' onClick={handClicks}>Next</button>
    </div>
    <div className='wish'>
      ❤SHALINI❤
    </div>
    <h3>☺🕺<font color="#FF2626"> R</font>
            <font color="#252A34">O</font>
            <font color="#753422">C</font>
            <font color="#FFD523">K </font>
            <font color="#71EFA3">TH</font>
            <font color="#0F52BA">IS</font>
            <font color="#66CC66"> D</font>
            <font color="#FF9966">A</font>
            <font color="#FFCCCC">Y</font>
            <font color="FF2626"> P</font>
            <font color="#EFE3D0">A</font>
            <font color="#252A34">N</font>
            <font color="#FFD523">D</font>
            <font color="#753422">A</font>☺🕺</h3>
    </center>
  )
}

export default Wish