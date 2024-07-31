import React, {useEffect, useState} from 'react';
import s from "../Games.module.scss";
import {IoCloseOutline} from "react-icons/io5";
import {useSearchParams} from "react-router-dom";
import {fetchTagsAction} from "../gamesSaga";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks";

export const Tags = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isTagOpen, setIsTagOpen] = useState(false)
    const dispatch = useDispatch();
    const tags = useAppSelector(state => state.games.tags)

    const setTag = () => {
        searchParams.set('tag', 'test')
        setSearchParams(searchParams)
    }

    useEffect(() => {
        dispatch(fetchTagsAction())
    }, [dispatch])

    return (
        <div className={s.tagsBlock}>
            <div className={s.tagSelect} onClick={() => setIsTagOpen(true)}>
                Tags:
            </div>
            <div className={s.tagsList}>
                <span onClick={setTag} className={s.tag}>test</span>
                <span className={s.tag}>tag</span>
                <span className={s.tag}>tag</span>
            </div>
            <div className={s.tagsModal} hidden={!isTagOpen}>
                <div className={s.tagModalHead}>
                    <span>Popular tags</span>
                    <IoCloseOutline className={s.closeIcon} onClick={() => setIsTagOpen(false)}/>
                </div>
                <div className={s.tagModalList}>
                    {tags.results?.map(tag => <div className={s.tag}>{tag.name}</div>)}
                </div>
            </div>
        </div>
    );
};

