import React from 'react';
import arrayDestruct from '../assets/portfolio/ecommerce.jpg';
import installNode from '../assets/portfolio/portfolio.jpg';
import navbar from '../assets/portfolio/calculator.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: arrayDestruct,
            link: "https://rhealnuel.github.io/ecommerce/"
        },
        {
            id:2,
            src:installNode,
            link: "https://rhealnuel.github.io/portfolio/"
        },
        {
            id:3,
            src: navbar,
            link: "https://rhealnuel.github.io/business-app/"
        },
        {
            id:4,
            src: reactSmooth,
            link: "#"
        },
        {
            id:5,
            src: reactParallax,
            link: "#"
        },
        {
            id:6,
            src: reactWeather,
            link: "#"
        }
        
    ]
    
        return (
            <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16 lg:pt-[300px] pb-20 md:h-screen">
                <div className=" p-4 mx-auto flex flex-col justify-center w-full lg:w-[80%] lg h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6">Check out some of my work right here</p>
                    </div>

                    <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {
                        portfolios.map(({id,src,link})   => (
                        
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className=" rounded-md duration-200 
                            hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href={link}>Demo</a> </button>
                            </div>
                        </div>
                    
                        ))
                    }
                    </div>
                    
                

                </div>
            </div>
        );
    
}
 
export default Portfolio;