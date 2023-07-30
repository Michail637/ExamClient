import "./style.css";
import {ThreeDots} from "react-loader-spinner";
import React from 'react'

const Loading = () => {
  return (
    <div className="loading" >
      <ThreeDots 
        height="300" 
        width="300" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
  />
    </div>
  )
}

export default Loading
