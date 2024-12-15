import React from 'react';
import s from "./AdditionalInfo.module.scss";

interface props {
    additionsData: any[]
    title: string
    route: string
}

export const AdditionalInfo: React.FC<props> = ({additionsData, title, route}) => {
    return (
        <div>
            {
                additionsData?.length
                    ? <div>
                        <h5>{title}</h5>
                        {additionsData?.map(additions =>
                            <a className={s.link} href={route + additions.id} key={additions.id}>
                                {additions.name}
                            </a>)}
                    </div>
                    : null
            }
        </div>
    );
};

