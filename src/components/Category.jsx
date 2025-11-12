import React from 'react'
import damage_property from '../asset/property_damage.png'
import  damageRoad from '../asset/damage_road.png'
import garbage from '../asset/garbage_in_public.png'
import Illegal_Construction from '../asset/illegal_construction.png'
import Cards from './Cards'

const Category = () => {
     const categories = [
    {
      image: garbage,
      title: 'Garbage',
      description:"Improper waste disposal and littering in public areas affecting cleanliness and hygiene."
    },
    {
      image: Illegal_Construction,
      title: 'Illegal Construction',
      description:"Unauthorized building or encroachment on public or restricted land without official approval."
    },
    {
      image:  damage_property,
      title: 'Broken Public Property',
      description:"Damaged or vandalized public assets like benches, streetlights, signs, or bus stops."
    },
    {
      image: damageRoad,
      title: 'Road Damage',
      description: 'Potholes, cracks, or uneven road surfaces causing inconvenience and safety hazards.'
    },
]
  return (
    <div className='w-11/12  mx-auto'> 
   <h1 className='text-3xl font-bold text-center text'>Issue Category</h1>

        <div className="grid 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 sm:px-6 lg:px-16 mx-auto w-full lg:w-11/12">
     {categories.map((cat, index) => (
          <Cards 
            key={index} 
            image={cat.image} 
            title={cat.title} 
            description={cat.description} 
          />
        ))}
    </div>

    </div>
  )
}

export default Category