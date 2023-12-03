import React from "react";
import BrandCss from "./Brand.module.css";
import { brand } from "../../data/Data";
import { brandSettings } from "../../../utility/common";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css'


const Brand = () => {
  return (
    <div className={`py-60 ${BrandCss.brand}`}>
      <div className="container">
        <div className={`${BrandCss.brandSlider}`}>
            <Swiper {...brandSettings} >
                {
                    brand.map((brandItem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={`${BrandCss.brandItem}`}>
                                    <img src={brandItem.image} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
