import React, { useState } from 'react';
import FaqCss from './Faq.module.css';
import { faqs } from '../../data/Data';


const Faq = ({title, desc}) => {

    const [toggle, setToggle] = useState(false); 

    const handleToggle = () => {
        setToggle(!toggle); 
    }
    
    return (
        <div>
            <div className={`${FaqCss.accordionItem} ${toggle ? FaqCss.active : ""}`}>
                <h4 className={`${FaqCss.accordionTitle}`} onClick={handleToggle} >{title}</h4>
                <p className={`${FaqCss.accordionDesc}`}>{desc}</p>
            </div>
        </div>
    );
};

export default Faq;