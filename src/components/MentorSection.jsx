// MentorsSection.js
import React from 'react';
import MentorCard from './MentorCard';
import flowerImage from '../images/mandala.jpg'

const MentorsSection = () => {
    return (
        <div className="mentors-section">
            <h2 className="mentors-header">Mentors</h2>
            <div className="mentors-cards">
                <MentorCard
                    name="John Doe"
                    role="Senior Developer"
                    image="https://via.placeholder.com/150"
                />
                <MentorCard
                    name="Jane Smith"
                    role="Project Manager"
                    image="https://via.placeholder.com/150"
                />
                <MentorCard
                    name="Emily Johnson"
                    role="UX Designer"
                    image="https://via.placeholder.com/150"
                />
                <MentorCard
                    name="Michael Brown"
                    role="Data Scientist"
                    image="https://via.placeholder.com/150"
                />
            </div>
            <img src={flowerImage} alt="Flower" className="flower-image" /> 
        </div>
    );
};

export default MentorsSection;
