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
export default Slider;

        {/*
          <div id="animation-carousel" className="relative w-full" data-carousel="static">
   {/* <!-- Carousel wrapper -->  * /}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      { /*  <!-- Item 1 --> * /}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img src={sustainability_action} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       { /* <!-- Item 2 --> * /}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img src={garbage_issue} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      { /* <!-- Item 3 --> * / }
        <div className="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src={community_cleaning} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
  { /* <!-- Slider controls --> * /}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}


{/*  <div className="lg:w-[1200px] lg:h-[500px] w-11/12 mx-auto  flex items-center justify-center lg:py-0 py-[40px]">
      
        {/ * Image with fade transition * /}
      <img
        key={index} // key triggers re-render for animation
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className={`lg:w-auto lg:h-[300px] object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
        </div> */}