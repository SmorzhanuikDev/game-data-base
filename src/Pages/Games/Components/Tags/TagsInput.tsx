import React from 'react';
import s from "../../Games.module.scss";
import {tagType} from "../../gamesTypes";

interface props {
    setIsModalOpen: (isOpen: boolean) => void;
    currentTags: tagType[] | undefined
    deleteTag: (id: number) => void;
}

export const TagsInput: React.FC<props> = ({setIsModalOpen, currentTags, deleteTag}) => {

    return (
        <>
            <div className={s.tagSelect} onClick={() => setIsModalOpen(true)}>
                Tags:
            </div>
            <div className={s.tagsList}>
                {currentTags?.map(tag =>
                    <span onClick={() => deleteTag(tag.id)} className={s.tag}>{tag.name}</span>
                )}
            </div>
        </>
    );
};

