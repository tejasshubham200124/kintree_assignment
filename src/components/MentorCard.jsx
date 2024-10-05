// MentorCard.js
import React from 'react';


const MentorCard = ({ name, role, image }) => {
    return (
        <div className="mentor-card">
            <img src={image} alt={name} className="mentor-image" />
            <div className="mentor-info">
                <h3 className="mentor-name">{name}</h3>
                <p className="mentor-role">{role}</p>
            </div>
        </div>
    );
};

export default MentorCard;
