import React from 'react';
import s from "../Games.module.scss";
import {IoCloseOutline} from "react-icons/io5";
import {tagType} from "../gamesTypes";

interface props {
    tags: tagType[]
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    checkIsSelected: (id: number) => boolean
    selectTags: (tag: tagType) => void
    submitModal: () => void
}

export const TagsModal: React.FC<props> = (
    {tags, isModalOpen, setIsModalOpen, selectTags, checkIsSelected, submitModal}
) => {

    return (
        <div className={s.tagsModal} hidden={!isModalOpen}>
            <div className={s.tagModalHead}>
                <span>Popular tags</span>
                <IoCloseOutline className={s.closeIcon} onClick={() => setIsModalOpen(false)}/>
            </div>
            <div className={s.tagModalList}>
                {tags?.map(tag => <div className={checkIsSelected(tag.id) ? s.selectedTag : s.tag}
                                       onClick={() => selectTags(tag)}>{tag.name}</div>)}
            </div>
            <div className={s.searchTagsBtn} onClick={submitModal}>
               Search
            </div>
        </div>
    );
};

