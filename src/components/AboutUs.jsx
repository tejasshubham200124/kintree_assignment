import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import whatWeDo from '../images/whatwedo.jpg';

function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Only animate once when in view

    return (
        <motion.div 
            className='about-us' 
            ref={ref}
            initial={{ opacity: 0 }} 
            animate={{ opacity: isInView ? 1 : 0 }} 
            transition={{ duration: 1 }}
        >
            <div className="container">
                <motion.div 
                    className='image-section'
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }} 
                    transition={{ duration: 1 }}
                >
                    <img src={whatWeDo} alt='Description of image' />
                </motion.div>
                <motion.div 
                    className='text-section'
                    initial={{ y: 50, opacity: 0 }} 
                    animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }} 
                    transition={{ duration: 1 }}
                >
                    <h2>What We Do</h2>
                    <h4>
                        Step into the brush of hope where the strength of every voice is not
                        merely acknowledged but cradled with profound reverence, a poignant embrace
                        designed to heal the living wounds of the fear of not being heard.
                    </h4>
                    <h4>
                        Ignited by the radiant spirit of Swara, whose light faced the shadows of
                        cyberbullying and extortion, Dr. Sheetal Gagrani, Swara's loving aunt, founded
                        this sanctum.
                    </h4>
                    <motion.button 
                        className='banner-button' 
                        whileHover={{ scale: 1.1, backgroundColor: 'darkorange' }} 
                        transition={{ duration: 0.3 }}
                    >
                        Read More
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AboutUs;
