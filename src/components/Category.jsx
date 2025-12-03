import React from 'react'
import Cards from './Cards'

const Category = () => {
     const categories = [
    {
      title: 'Garbage',
      description:"Improper waste disposal and littering in public areas affecting cleanliness and hygiene."
    },
    {
      title: 'Illegal Construction',
      description:"Unauthorized building or encroachment on public or restricted land without official approval."
    },
    {
      title: 'Broken Public Property',
      description:"Damaged or vandalized public assets like benches, streetlights, signs, or bus stops."
    },
    {
      title: 'Road Damage',
      description: 'Potholes, cracks, or uneven road surfaces causing inconvenience and safety hazards.'
    },
]
  return (
    <div className='w-11/12 mx-auto'> 
    <div className='flex justify-center items-center'>
   <h1 className='lg:text-3xl text-xl font-bold text-center text bg-color p-4 rounded'>Issue Category</h1>
    </div>

   <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-6 sm:gap-8 lg:gap-10 xl:gap-12 my-4 ">

     {categories.map((cat, index) => (

          <Cards className='max-w-[300px]'
            key={index}  
            title={cat.title} 
            description={cat.description} 
          />

        ))}
    </div>

    </div>
  )
}

export default Category