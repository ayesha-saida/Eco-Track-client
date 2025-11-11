import React, { useEffect, useState } from "react";

const Slider = () => {
//local array of images
   const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/017/573/343/small/children-cleaning-the-environment-from-garbage-cartoon-vector.jpg",
  "https://images.template.net/377330/Conservation-Clean-Environment-Clipart-Template-edit-online.jpg" ,
    "https://www.shutterstock.com/image-vector/people-cleaning-trash-park-on-600nw-2156298233.jpg",
"https://img.freepik.com/premium-vector/volunteers-clean-up-city-park-concept-care-about-ecology-environment-woman-man-with-mop_118813-21032.jpg"]
    
    const [index, setIndex] = useState(0)
     const [fade, setFade] = useState(true); // control fade animation

    useEffect( () => {
      const interval = setInterval( 2000); // slide every 2 seconds
    return () => clearInterval(interval); // cleanup to prevent multiple intervals
  }, [])

    return(
        <div className="lg:w-[1200px] lg:h-[500px] w-11/12 mx-auto  flex items-center justify-center relative">
      
        {/* Image with fade transition */}
      <img
        key={index} // key triggers re-render for animation
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className={`lg:w-auto lg:h-[300px] object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
        </div>
    )
}
export default Slider;