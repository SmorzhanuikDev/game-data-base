import React from 'react';
import onImage from '../../../Images/no-image.png'

export const GameItem = () => {
    return (
        <div>
            <img src={onImage} alt={onImage}/>
            <div>
                <p>
                    name
                </p>
                <p>platforms</p>
                <p>genres</p>
                <p>data</p>
                <p>chart</p>
            </div>
        </div>
    );
};

