import React from 'react';
import { motion } from 'framer-motion';
import girlImage from '../images/girl.jpg';

function Header() {
    return (
        <motion.header 
            className='header' 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}>
            <nav className='nav'>
                <ul className='nav-list'>
                    <div className="logo">
                        our logo
                    </div>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        Home
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        About US
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        Who we Are
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        Swara's painting
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        Mentors
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        Stories
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.1, color: 'darkorange' }} 
                        transition={{ duration: 0.4 }}>
                        React Out
                    </motion.li>
                </ul>
            </nav>

            <div className='container'>
                <div className='image-section'>
                    <img src={girlImage} alt='Description of image' />
                </div>
                <div className='text-section'>
                    <h2>The cause</h2>
                    <h4>Step into brush of hope where the strength of every voice is not
                        merely acknowledged but cradled with profound reverence, a poignant embrace
                        designed to heal the living wounds of the fear of not being heard.
                    </h4>
                    <h4>Ignited by the radiant spirit of Swara, whose light faced the shadows of
                        cyberbullying and extortion, Dr. Sheetal Gagrani, Swara's loving aunt, founded
                        this sanctum.
                    </h4>
                    <button className='header-button'>Report Now</button>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;
