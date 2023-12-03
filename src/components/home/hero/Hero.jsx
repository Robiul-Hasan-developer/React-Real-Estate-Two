import React from "react";
import BannerStyle from "./Hero.module.css";
import { Link } from "react-router-dom";
import { banner, counterUp } from "../../data/Data";
import heroImage from "../../../../public/images/hero.png";
import CountUp from 'react-countup';


const Hero = () => {
  return (
    <section className={BannerStyle.heroSection}>
      <div className="container">
        <div className={`${BannerStyle.heroInner}`}>
          <div className={`${BannerStyle.heroContent}`}>
            <h1 className={`${BannerStyle.heroTitle}`}>{banner.title}</h1>
            <p className={`${BannerStyle.heroDesc}`}>{banner.desc}</p>

            <div className={`${BannerStyle.counterUp}`}>
                {
                    counterUp.map((countItem, index) => {
                        return (
                            <div className={`${BannerStyle.counterItem}`} key={index}>
                                <h2 className={`text--base-two mb-0 ${BannerStyle.counterNumber}`} >
                                <CountUp start={countItem.startNmbr} end={countItem.endNmbr} duration={3.5} />
                                <span>+</span>
                                </h2>
                                <span className={`${BannerStyle.counterText}`}>{countItem.countText}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className={`${BannerStyle.heroButton}`}>
              <Link to="/" className="btn btn--base">
                Get Started
              </Link>
            </div>
          </div>
          <div className={`${BannerStyle.heroThumb}`}>
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <h1 className={`${BannerStyle.heroTitle}`}>Find your next perfect place with us!</h1>
                        <p className={`${BannerStyle.heroDesc}`}>Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you</p> */
}
