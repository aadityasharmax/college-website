import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div id='program' className="programs">
      <div className="program">
        <img src="/Images/program-1.png" alt="" />
        <div className="caption">
          <img src="/Images/program-icon-1.png" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
      <img src="/Images/program-2.png" alt="" />
      <div className="caption">
          <img src="/Images/program-icon-2.png" alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
      <img src="/Images/program-3.png" alt="" />
      <div className="caption">
          <img src="/Images/program-icon-3.png" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>


    </div>
  )
}

export default Programs