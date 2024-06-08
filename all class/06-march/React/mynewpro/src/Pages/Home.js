import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from '@trendyol-js/react-carousel';
import SliderItem from './SliderItem';
import "./Allpages.css"
function Home() {
  const images = [
    { url: "image/pic1.jpg" },
    { url: "image/pic2.jpg" },
    { url: "image/pic3.jpg" },
    { url: "image/pic4.jpg" },
    { url: "image/pic5.jpg" },
 
  ];
  return (
   <>
       <SimpleImageSlider
        width="100%"
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
   <Carousel show={3.5} slide={3} swiping={true} className='mt-2' >
<SliderItem idata="image/pic1.jpg"/>
<SliderItem idata="image/pic2.jpg"/>
<SliderItem idata="image/pic3.jpg"/>
<SliderItem idata="image/pic4.jpg"/>
<SliderItem idata="image/pic5.jpg"/>

   </Carousel>
   <div className='about'>
<h2>Our Mission</h2>
<p>Back in 2000, keeping in mind to train and educate youngsters, we started our journey. When we started DUCAT The IT Training School, our passion was and is to train youngsters in job-oriented subdomains in the IT industry to secure a career by offering you the best IT Training. We are here to guide you to reach the pinnacle of your career. We are aware of the fact that getting a job is the prime motive of students after course completion, here at DUCAT we provide 100% Job assistance. Our IT Institute has 6 branches at Delhi NCR, with more than 180 courses and skill sets. Our Institute is helping youngsters to be trained in job-oriented courses and improve their career.</p>
  <h2>Our Vision</h2> 
  <p>We are thriving to establish ourselves as an education provider that focuses on giving learners job-oriented skills.
We understand what the monthly paycheck will make you and your family feel.</p>
   
   </div>
   </>
  )
}

export default Home