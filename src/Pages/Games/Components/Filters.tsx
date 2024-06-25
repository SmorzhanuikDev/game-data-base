import React from 'react';
import s from "../Games.module.scss";
import {ordering} from "../gamesTypes";
import Select from 'react-select'

const options = [
    {value: 'name', label: 'Name'},
    {value: 'released', label: 'Released'},
    {value: 'rating', label: 'Rating'},
    {value: 'metacritic', label: 'Metacritic'},
    {value: undefined, label: 'None'}
]

interface props {
    changeOrder: (ordering: ordering | undefined) => void
}

export const Filters: React.FC<props> = ({changeOrder}) => {

    const colourStyles: any = {
        control: (styles: any) => ({...styles, backgroundColor: '#0c0c0c'}),
        option: (styles: any) => ({...styles, color: '#0c0c0c'}),
        placeholder: (styles: any) => ({...styles, color: '#efecec'}),
        singleValue: (styles: any) => ({...styles, color: '#efecec'}),
    };


    return (
        <div className={s.filterBlock}>
            <div className={s.ordering}>
                <span>Order by</span>
                <div className={s.orderingSelect}>
                    {/*@ts-ignore*/}
                    <Select onChange={e => changeOrder(e.value)} options={options}
                            styles={colourStyles} defaultValue={options[4]}/>
                </div>
            </div>
        </div>
    );
};

