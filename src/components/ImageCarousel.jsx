import React from 'react';

const images = [
    '/src/assets/images/mockups/01.png',
    '/src/assets/images/mockups/02.png',
    '/src/assets/images/mockups/03.png',
    '/src/assets/images/mockups/04.png',
    '/src/assets/images/mockups/05.png',

]

export default function ImageCarousel() {
    return (
        <div className="carousel carousel-center space-x-3 ">
            {images.map((image, index) => (
                <div key={index} className="carousel-item w-[33%] gap-4">
                    <div>
                    <img
                        src={image}
                        alt="mockup" 
                        className='objects'
                        // height={500}
                        // width={'33%'}
                        />
                        </div>

                </div>
            ))}
        </div>
    )
}
