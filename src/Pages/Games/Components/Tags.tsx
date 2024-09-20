import React, {useEffect, useState} from 'react';
import s from "../Games.module.scss";
import {IoCloseOutline} from "react-icons/io5";
import {useSearchParams} from "react-router-dom";
import {fetchTagsAction} from "../gamesSaga";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks";
import {useSearch} from "../Games";
import {tagType} from "../gamesTypes";
import {TagsModal} from "./TagsModal";
import {TagsInput} from "./TagsInput";

export const Tags = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isTagOpen, setIsTagOpen] = useState(false)
    const dispatch = useDispatch();
    const tags = useAppSelector(state => state.games.tags)
    const [selectedTags, setSelectedTags] = useState<tagType[]>([])
    const prevTags = useSearch().get('tags')

    const [currentTags, setCurrentTags] = useState<tagType[]>()


    const setTags = () => {
        const tagsIds = selectedTags.map(tag => tag.id)
        searchParams.set('tag', tagsIds.join())
        setSearchParams(searchParams)
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
        dispatch(fetchTagsAction())
    }, [dispatch])

    return (
        <div className={s.tagsBlock}>
            <TagsInput currentTags={currentTags} setIsModalOpen={setIsTagOpen} deleteTag={deleteTag}/>
            <TagsModal tags={tags.results} selectTags={selectTags} checkIsSelected={checkIsSelected}
                       isModalOpen={isTagOpen} setIsModalOpen={setIsTagOpen}/>
        </div>
    );
};

