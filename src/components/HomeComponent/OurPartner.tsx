import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo1 from '../../assets/AS Consultency.jpg';
import Logo2 from '../../assets/AS.jpg'
import Logo3 from '../../assets/bernhardt.png';
import Logo4 from '../../assets/Tryinn7.png';
import Logo5 from '../../assets/SPS.jpg';
import Logo6 from '../../assets/nepal dream.jpg';
import Logo7 from '../../assets/mannila.jpg';
import Logo8 from '../../assets/tapashya.jpg';
import Logo9 from '../../assets/fashion plaza.jpg';
import Logo10 from '../../assets/Logo (1).png';

const OurPartner: React.FC = () => {
    const partnerLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
    };

    return (
        <div className='w-[90%] m-auto mt-10 sm:mt-20'>
            <div>
                <h2 className="text-[1.2rem] sm:text-[2rem] font-bold text-center mb-5">Our Partners</h2>
            </div>
            <Slider {...settings} >
                {partnerLogos.map((logo, index) => (
                    <div key={index} style={{ padding: '0 5px' }} >
                        <img src={logo} alt={`Partner Logo ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurPartner;