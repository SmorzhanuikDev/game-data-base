import React from 'react';
import s from "../GameDetails.module.scss";

interface props {
    desc: string
}

export const GameDetailsDesc:React.FC<props> = ({desc}) => {
    return (
        <div>
            <hr/>
            <div className={s.description}>
                <h4>About</h4>
                <p>
                    {desc || 'No description'}
                </p>
            </div>
            <hr/>
        </div>
    );
};

