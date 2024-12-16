import React from 'react';
import {TailSpin} from "react-loader-spinner";
import s from "../../Surface/Surface.module.scss";

const SmallLoader = () => {
    return (
        <div className={s.loader}>
            <TailSpin

                visible={true}
                height="50"
                width="50"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default SmallLoader;