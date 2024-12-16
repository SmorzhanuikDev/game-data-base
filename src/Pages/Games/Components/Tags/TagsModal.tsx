import React, {useCallback, useEffect, useRef, useState} from 'react';
import s from "./tags.module.scss";
import {tagBySearchType} from "../../gamesTypes";
import {FaCheckSquare, FaSquare} from "react-icons/fa";
import {TagList} from "./TagList";

interface props {
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    submitModal: (ids: number[]) => void
    currentTags: tagBySearchType[]
}

export const TagsModal: React.FC<props> = (props) => {

    const {isModalOpen, setIsModalOpen, submitModal, currentTags} = props
    const tagRef = useRef<HTMLDivElement>(null);
    const [activeTags, setActiveTags] = useState<number[]>([])
    const [isExact, setIsExact] = useState<boolean>(false)

    const handleClick = useCallback((event: any) => {
        if (tagRef.current && !tagRef.current.contains(event.target)) {
            setIsModalOpen(false)
        }
    }, [setIsModalOpen])

    useEffect(() => {
        setActiveTags(currentTags.map(tag => tag.id))
    }, [currentTags]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [handleClick]);

    return (
        <div ref={tagRef} className={s.tagsModal} hidden={!isModalOpen}>
            <div className={s.tagModalHead}>
                <span>Popular tags</span>
            </div>
            <TagList activeTags={activeTags} setActiveTags={setActiveTags}/>
            <div className={s.submitPanel}>
                <div className={s.tagModalBtn} onClick={() => {
                    setIsExact(!isExact)
                }}>
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

