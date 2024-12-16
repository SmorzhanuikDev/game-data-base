import React, {useCallback, useEffect, useRef, useState} from 'react';
import s from "./tags.module.scss";
import {tagBySearchType, tagType} from "../../gamesTypes";
import {FaCheckSquare} from "react-icons/fa";
import {FaSquare} from "react-icons/fa";


interface props {
    tags: tagType[]
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    submitModal: (ids: number[]) => void
    currentTags: tagBySearchType[]
}

export const TagsModal: React.FC<props> = (props) => {

    const {tags, isModalOpen, setIsModalOpen, submitModal, currentTags} = props
    const tagRef = useRef<HTMLDivElement>(null);
    const [activeTags, setActiveTags] = useState<number[]>([])
    const [isExact, setIsExact] = useState<boolean>(false)

    const handleClick = useCallback((event: any) => {
        if (tagRef.current && !tagRef.current.contains(event.target)) {
            setIsModalOpen(false)
        }
    }, [setIsModalOpen])

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [handleClick]);

    const selectTag = (tagId: number) => {
        if (activeTags.find(tag => tag === tagId)) {
            setActiveTags(activeTags.filter(tag => tag !== tagId))
        } else {
            setActiveTags(prevState => prevState.concat(tagId))
        }
    }

    const checkIsSelected = (tagId: number) => {
        return !!activeTags.find(tag => tag === tagId)
    }

    useEffect(() => {
        setActiveTags(currentTags.map(tag => tag.id))
    }, [currentTags]);

    return (
        <div ref={tagRef} className={s.tagsModal} hidden={!isModalOpen}>
            <div className={s.tagModalHead}>
                <span>Popular tags</span>
            </div>
            <div className={s.tagModalList}>
                {tags?.map(tag => <div key={tag.id} className={checkIsSelected(tag.id) ? s.selectedTag : s.tag}
                                       onClick={() => selectTag(tag.id)}>{tag.name}</div>)}
            </div>
            <div className={s.submitPanel}>
                <div className={s.tagModalBtn} onClick={() => {setIsExact(!isExact)}}>
                    {isExact
                        ? <FaCheckSquare className={s.checkBox}/>
                        : <FaSquare className={s.checkBox}/>
                    }
                    <span>
                        Exact search
                    </span>
                </div>
                <div className={s.tagModalBtn} onClick={() => submitModal(activeTags)}>
                    Clear all tags
                </div>
                <div className={s.tagModalBtn} onClick={() => submitModal(activeTags)}>
                    Search
                </div>
            </div>
        </div>
    );
};

