import React, {useEffect, useState} from 'react';
import s from "./tags.module.scss";
import {useSearchParams} from "react-router-dom";
import {fetchTagsAction} from "../../gamesSaga";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../hooks";
import {useSearch} from "../../Games";
import {tagType} from "../../gamesTypes";
import {TagsModal} from "./TagsModal";
import {TagsInput} from "./TagsInput";

export const Tags = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const tags = useAppSelector(state => state.games.tags)
    const [selectedTags, setSelectedTags] = useState<tagType[]>([])
    const prevTags = useSearch().get('tags')

    const [currentTags, setCurrentTags] = useState<tagType[]>()

    const submitModal = () => {
        setIsModalOpen(false);
        const tagsIds = selectedTags.map(tag => tag.id)
        searchParams.set('tags', tagsIds.join(' '))
        setSearchParams( searchParams)

    }

    const deleteTag = (tagId: number) => {
        setSelectedTags(selectedTags.filter(
            tag => tag.id !== tagId
        ))
    }

    const checkIsSelected = (tagId: number) => {
        return !!selectedTags.find(tag => tag.id === tagId) || false
    }

    const selectTags = (tag: tagType) => {
        if (checkIsSelected(tag.id)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag.id !== tag.id))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'auto'
    }, [isModalOpen]);


    useEffect(() => {
        dispatch(fetchTagsAction())
    }, [dispatch])

    return (
        <div className={s.tagsBlock}>
            <TagsInput currentTags={currentTags} setIsModalOpen={setIsModalOpen} deleteTag={deleteTag}/>
            <div hidden={!isModalOpen} className={s.modalShadow}/>
            <TagsModal tags={tags.results} selectTags={selectTags} checkIsSelected={checkIsSelected}
                       isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} submitModal={submitModal}/>
        </div>
    );
};

