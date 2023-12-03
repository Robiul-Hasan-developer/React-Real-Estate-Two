import React from 'react';
import ResiCss from './Residence.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';

import { residences } from '../../data/Data';
import Heading from '../../common/Heading';
import { sliderSettings } from '../../../utility/common';


const Residence = () => {
    return (
        <section className={`py-120 section-bg position-relative ${ResiCss.residence}`} id='residencies'>
            <div className="container">
            <Heading className="style-left" title="Popular Residencies" subtitle="Best Choices" desc="We are generally prepared to help by providing the best administrations for you. We beleive a decent blace to live can improve your life"/>
            <div className={`${ResiCss.residenceSliderWrapper}`}>
                <Swiper {...sliderSettings}  
                    modules={[Navigation]}
                    navigation
                    pagination={{ clickable: true }}
                    >
                {
                    residences.map((residence, index) => {
                        const {name, price, desc, image} = residence;
                        return (
                            <SwiperSlide  key={index}>
                                <div className={`${ResiCss.residenceItem}`}>
                                    <div className={`${ResiCss.residenceThumb}`}>
                                        <img src={image} alt="" className='fit-image' />
                                    </div>
                                    <div className={`${ResiCss.residenceContent}`}>
                                        <span className={`${ResiCss.residencePrice}`}> <span className="text--base">$</span>{price}</span>
                                        <h4 className={`${ResiCss.residenceTitle}`}> {name} </h4>
                                        <p className={`${ResiCss.residenceDesc}`}>{desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
            </div>
        </section>
    );
};

export default Residence;