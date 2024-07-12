import React from 'react';
import s from '../../main.module.scss'

interface props {
    title: string
}

export const Title:React.FC<props> = ({title}) => {
    return (
        <h3 className={s.pageTitle}>{title}</h3>
    );
};
