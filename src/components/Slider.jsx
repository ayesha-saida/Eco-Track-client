import  { useEffect, useState } from "react";
import sustainability_action from '../asset/sustainability_action.png'
import community_cleaning from '../asset/community_cleaning.png'
import garbage_issue from '../asset/garbage_issue.png'

const Slider = () => {
//local array of images
   const images = [
    sustainability_action,
    community_cleaning,
    garbage_issue
]
    
    const [index, setIndex] = useState(0)
     const [fade, setFade] = useState(true); // control fade animation

    useEffect( () => {
      const interval = setInterval(() => {
      // start fade out
      setFade(false);

      // wait for fade-out to complete before changing image
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 500); // fade-out duration matches CSS transition
    }, 2000); // every 2 seconds
    
    return () => clearInterval(interval); // cleanup to prevent multiple intervals
  }, [])

    return(
<div className="w-11/12 max-w-[1400px] mx-auto flex items-center justify-center py-10 lg:py-6 relative">
  <img
    key={index}
    src={images[index]}
    alt={`Slide ${index + 1}`}
    className={`w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
      fade ? "opacity-100" : "opacity-0"
    }`}
  />
</div>


    )
}
export default Slider