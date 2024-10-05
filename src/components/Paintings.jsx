import React from 'react'
import painting1 from '../images/flower-2.jpg'
import painting2 from '../images/painting-2.jpg'
import painting3 from '../images/painting-3.jpg'
import painting4 from '../images/painting-4.jpg'
import painting5 from '../images/painting-5.jpg'

function Paintings() {
    return (
        <div className="gallery">
            <div className="title">
                <h4>Swara's art gallery</h4>
                <h4>A Symphony of Emotion of Canvas</h4>
            </div>

            <div className="image-gallery">
                <div className="first-part">
                    <div className="image-container">
                        <img src={painting1} />
                    </div>
                    <div className="image-container">
                        <img src={painting4} />
                    </div>
                </div>
                <div className="second-part">
                    <div className="row-1">
                        <div className='row-container'>
                            <img src={painting2} alt={painting1} />
                        </div>
                        <div className='row-container'>
                            <img src={painting3} alt="" />
                        </div>
                    </div>
                    <div className="row-1">
                        <div className='row-container'>
                            <img src={painting5} alt={painting1} />
                        </div>
                        <div className='row-container'>
                            <img src={painting1} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Paintings