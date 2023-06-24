import React from 'react'
import "./style.css";

const Comment = () => {
  return (
    <div className='comment-section'>
        
            {" "}
        <div className="image"></div> 
          <div className='comment-data'>
          <div>posted by @tanay - 1m{" "}</div>
          <div>
            replying to @tanay
          </div>
          <div>
            <p>intersted</p>
          </div>
          </div>
    </div>
  )
}

export default Comment