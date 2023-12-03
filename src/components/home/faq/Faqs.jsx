import React, { useState } from 'react';
import FaqCss from './Faq.module.css';
import Heading from '../../common/Heading';

import FaqImg from '../../../../public/images/accordion-img.png';
import { faqs } from '../../data/Data';
import Faq from './Faq';

const Faqs = () => {
    
    return (
        <section className={`py-120 ${FaqCss.faq}`} id='ourValue'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 pe-lg-5 d-lg-block d-none">
                        <div className={`${FaqCss.accordionThumb}`}>
                            <img src={FaqImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion-content">
                            <Heading className="style-left" title="Value We Give to You" subtitle="Our Value" desc="We always ready to help by providing the best services for you. We believe a good blase to live can make your life better"/>
                            {
                                faqs.map((faq, index) => <Faq key={index} {...faq} /> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;