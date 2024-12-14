import React from 'react';
import s from "../../GameDetails.module.scss";
import {gameType, tagType} from "../../../Games/gamesTypes";

interface props {
    additionsData: tagType[] | gameType[]
    title: string
}

export const AdditionalInfo: React.FC<props> = ({additionsData, title}) => {
    return (
        <div>
            {
                additionsData?.length
                    ? <div className={s.fullWidthElement}>
                        <h5>{title}</h5>
                        {additionsData?.map(additions =>
                            <a className={s.link} href={'/game/' + additions.id} key={additions.id}>
                                {additions.name}
                            </a>)}
                    </div>
                    : null
            }
        </div>
    );
};

