import React from 'react';
import StartCss from './GetStart.module.css';
import Heading from '../../common/Heading';
import { Link } from 'react-router-dom';

const GetStart = () => {
    return (
        <section className={`py-120 ${StartCss.getStart}`} id='getStarted'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className={`text-center ${StartCss.getStartContent}`}>
                            <Heading title="Get started with Homyz" subtitle="CTA" desc="Subscribe and find super attractive price quotes from us. Find your residence soon" />
                            <Link to="mailto: " className='btn btn-outline--white'> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default GetStart;