import React from 'react'

const Cards = ({title, description }) => {
  return (
   
   <div className="card w-70  hover:shadow-[-0_6px_12px_rgba(0,0,0,0.4)]">
  
  <div className="card-body shadow-lg rounded-xl">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>

  </div>
</div>
   
  )
}

export default Cards