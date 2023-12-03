import React from 'react';
import ContactCss from './Contact.module.css';
import Heading from '../../common/Heading';
import ContactImg from '../../../../public/images/contact.jpg';
import { contacts } from '../../data/Data';

const Contact = () => {
  return (
    <section className={`py-120 section-bg ${ContactCss.contact}`} id='contactUs'>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 pe-xl-5">
            <div className={`${ContactCss.contactContent}`}>
              <Heading className="style-left" title="Easy to contact us" subtitle="Our Contact Us" desc="We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better"/>
              <div className="row gy-4">
                {
                  contacts.map((contact, index) => {
                    const {icon, title, desc} = contact; 

                    return (
                      <div className="col-sm-6 col-xsm-6" key={index}>
                      <div className={`${ContactCss.contactItem}`}>
                        <div className={`${ContactCss.contactItemInner}`}>
                          <span className={`${ContactCss.contactItemIcon}`}>{icon}</span>
                          <div className={`${ContactCss.contactItemContent}`}>
                            <h5 className={`${ContactCss.contactItemTitle}`}>{title}</h5>
                            <p className={`${ContactCss.contactItemDesc}`}>{desc}</p>
                          </div>
                        </div>
                        <button className="btn btn--base base--soft btn--sm w-100">{title} Now</button>
                      </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className={`${ContactCss.contactThumb}`}>
              <img src={ContactImg} alt="" className='fit-image' />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;