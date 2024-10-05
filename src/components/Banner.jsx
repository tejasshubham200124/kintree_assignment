import React from 'react'


import girlImage2 from '../images/section2.png'
function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className='text-section-2'>
                    <h2>Swara</h2>
                    <h4>Step into brush of hope where the strength of every voice is not
                        merely acknowledged bur cradled with profound reverence a poingnant embrace
                        designed to heal the liing wounds of the fear of not being hearf

                    </h4>
                    <h4>Ignited by the radiant spirit of swara, whose light faced the shadows of
                        cyberbulling and extortion, Dr Sheetal Gagrani, Swar's loving aunt founded
                        this sancturm.
                    </h4>
                    <button className='banner-button'>Report Now</button>
                </div>
                <div className='image-section'>
                    <img src={girlImage2} alt='Description of image' />
                </div>
            </div>
        </div>
    )
}

export default Banner