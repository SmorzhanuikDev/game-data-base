import React from 'react';
import s from "./tags.module.scss";
import {commonItemDataType} from "../../gamesTypes";
import {useSearchParams} from "react-router-dom";
import {deleteTag} from "../../gamesSlice";
import {useAppDispatch} from "../../../../hooks";

interface props {
    setIsModalOpen: (isOpen: boolean) => void;
    currentTags: commonItemDataType[] | undefined
}

export const TagsInput: React.FC<props> = ({setIsModalOpen, currentTags}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch();

    const removeTag = (tagId: number) => {
        const tags = searchParams.get('tags')
        if (tags) {
            const otherTags = tags.split(' ').filter(tag => tag !== String(tagId))
            if (otherTags.length) {
                searchParams.append('tags', otherTags.join(' '))
                setSearchParams(searchParams)
                dispatch(deleteTag(tagId))
            } else {
                searchParams.delete('tags')
                setSearchParams(searchParams)
            }
        }
    }

    return (
        <>
            <div className={s.tagSelect} onClick={() => setIsModalOpen(true)}>
                Tags:
            </div>
            <div className={s.tagsList}>
                {currentTags?.map(tag =>
                    <span key={tag.id} onClick={() => removeTag(tag.id)} className={s.tag}>{tag.name}</span>
                )}
            </div>
        </>
    );
};

