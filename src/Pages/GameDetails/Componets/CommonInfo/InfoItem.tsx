import React, {FC} from 'react';

interface props {
    title: string;
    content: any;
}

export const InfoItem: FC<props> = ({title, content}) => {
    return (
        content
            ? <div>
                <h5>{title}</h5>
                <div>{content}</div>
            </div>
            : null
    );
};

