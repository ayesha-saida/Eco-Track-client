import React from 'react'

const Cards = ({ image, title, description }) => {
 // const img = images
  return (
   
   <div className="card bg-base-100 w-70 hover:shadow-xl/40">
  <figure>
    <img
      src={image}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>

  </div>
</div>
   
  )
}

export default Cards