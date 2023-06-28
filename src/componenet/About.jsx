import React from 'react';

const About = () => {

    
        return (
            <div name="about" className="w-full pt-16 h-scren bg-gradient-to-b from-gray-800 to-black  text-white pb-20 lg:px-20">
                <div className="max-w-scree-lg p-4 mx-auto flex flex-col justify-center w-[90%] h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p>
                    </div>
                    <p className="text-xl mt-20"> As a Front-End Developer I work closely with Back-End Developers to create apps and/or sites that 
                    combine visual design with functionality. I translate wireframes and prototypes into stylish and interactive (web) apps. 
                    Additionally, as a Front-End Developer I'm typically responsible for things like fixing bugs, implementing mobile site designs, 
                    and maintaining workflow management. </p>
                    <br/>
                    <p className='text-xl mt-10 '>
                        I am a tech-savvy people with a good handle on HTML, JavaScript, CSS, React, Tailwindcss, Github, Netlify and Figma.
                    </p>

                       
                </div>
            </div>
        );
    
}
 
export default About;