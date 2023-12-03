import React from 'react';

const Heading = ({title, subtitle, desc,  className}) => {
    return (
        <>
            <div className={`section-heading ${className}`}>
                <span className='section-heading__subtitle'> {subtitle} </span>   
                <h2 className='section-heading__title'> {title} </h2>   
                <p className='section-heading__desc'> {desc} </p>   
            </div>
        </>
    );
};

export default Heading;