import React from 'react'
import {useParams} from "react-router-dom"
function Post() {
    let {category,id}   =useParams()
  return (
    <>
    <h2>Post component</h2>
    <p>post category={category}</p>
    <p>post with cat with id={id}</p>
    </>
  )
}

export default Post