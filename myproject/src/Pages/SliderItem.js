import React from 'react'
import "./slideritem.css"
function SliderItem(props) {
  return (
    <>
    <div className='myslider'>
        <img src={props.idata} height="200px" width="300px" alt=".."/>
    </div>
    </>
  )
}

export default SliderItem