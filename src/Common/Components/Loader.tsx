import React from 'react';
import s from "../../Surface/Surface.module.scss";
import {RotatingSquare} from "react-loader-spinner";

export const Loader = () => {
    return (
        <div className={s.loader}>
            <RotatingSquare
                visible={true}
                height="200"
                width="200"
                color="#fff"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{marginTop: '110px'}}
            />
        </div>
    );
};

