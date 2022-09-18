import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About EBook Library</h2>
            <p className='fs-17'>EBooks are the digital format of printed books available on computers and handheld electronic devices and include texts and images and sometimes audio, video, and various links to websites. Generally, eBooks are purchased through the internet, but some are accessible for free.</p>


            <p className='fs-17'>A large proportion of the population prefers printed books in paperback and hardcover editions over eBooks. With the gradual technological advancements, people are nowadays getting interested in the idea of eBooks. Individuals can have one eBook reader and can access all the books available on this platform. Also, eBooks can be shared through the internet easily and have multiple users. eBooks have great scope for further developments and universal acceptability. The digital publishers are trying to improve the content by adding more features like read-aloud, hyperlinks, audio and visual effects, like 3D figures or even GRE calculators. Ten years from now, most books will have an electronic version and can be accessed on portable devices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About