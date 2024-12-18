import React, {useEffect, useState} from 'react';
import s from "./tags.module.scss";
import {useSearchParams} from "react-router-dom";
import {fetchCurrentTagAction} from "../../gamesSaga";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../hooks";
import {TagsModal} from "./TagsModal";
import {TagsInput} from "./TagsInput";
import {deleteAllTags} from "../../gamesSlice";

export const Tags = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const currentTags = useAppSelector(state => state.games.currentTags)
    const prevTags = searchParams.get('tags')

    const submitModal = (tagIds: number[]) => {
        setIsModalOpen(false);
        if (searchParams.has('tags')) {
            searchParams.set('tags', tagIds?.join(' '))
        } else {
            searchParams.append('tags', tagIds?.join(' '));

        }
        setSearchParams(searchParams)
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'auto'
    }, [dispatch, isModalOpen]);

    useEffect(() => {
        if (prevTags) {
            const tags = prevTags.split(' ')
            for (let i = 0; i <= tags.length - 1; i++) {
                dispatch(fetchCurrentTagAction(Number(tags[i])))
            }
        } else {
            searchParams.delete('tags')
            setSearchParams(searchParams)
            dispatch(deleteAllTags())
        }
    }, [dispatch, prevTags, searchParams, setSearchParams]);


    return (
        <div className={s.tagsBlock}>
            <TagsInput currentTags={currentTags} setIsModalOpen={setIsModalOpen}/>
            <div hidden={!isModalOpen} className={s.modalShadow}/>
            <TagsModal currentTags={currentTags}
                       isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} submitModal={submitModal}/>
        </div>
    );
};

