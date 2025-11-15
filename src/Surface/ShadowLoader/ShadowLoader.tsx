import React from 'react';
import s from "./ShadowLoader.module.scss";

interface props {
    isLoading: boolean;
}

export const ShadowLoader: React.FC<props> = ({isLoading}) => {

    return (
        isLoading
            ? <div className={s.shadowLoading}>
                <span>Loading...</span>
                <span className={s.circle}></span>
            </div>
            : null
    );
};
