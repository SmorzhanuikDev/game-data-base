import React, {useEffect, useState} from 'react';
import s from "../Games.module.scss";
import {IoCloseOutline} from "react-icons/io5";
import {useSearchParams} from "react-router-dom";
import {fetchTagsAction} from "../gamesSaga";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks";
import {useSearch} from "../Games";
import {tagType} from "../gamesTypes";

export const Tags = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isTagOpen, setIsTagOpen] = useState(false)
    const dispatch = useDispatch();
    const tags = useAppSelector(state => state.games.tags)
    const [selectedTags, setSelectedTags] = useState<tagType[]>([])
    const prevTags = useSearch().get('tags')

    const setTags = () => {
        const tagsId = selectedTags.map(tag => tag.id)
        searchParams.set('tag', tagsId.join())
        setSearchParams(searchParams)
    }

    const deleteTag = (tagId: number) => {
        setSelectedTags(selectedTags.filter(
            tag => tag.id !== tagId
        ))
    }

    const checkIsSelected = (tagId: number) => {
        return selectedTags.find(tag => tag.id === tagId) || false
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
            <div className={s.tagSelect} onClick={() => setIsTagOpen(true)}>
                Tags:
            </div>
            <div className={s.tagsList}>
                {selectedTags?.map(tag =>
                    <span onClick={() => deleteTag(tag.id)} className={s.tag}>{tag.name}</span>
                )}
            </div>
            <div className={s.tagsModal} hidden={!isTagOpen}>
                <div className={s.tagModalHead}>
                    <span>Popular tags</span>
                    <IoCloseOutline className={s.closeIcon} onClick={() => setIsTagOpen(false)}/>
                </div>
                <div className={s.tagModalList}>
                    {tags.results?.map(tag => <div className={checkIsSelected(tag.id) ? s.selectedTag : s.tag}
                                                   onClick={() => selectTags(tag)}>{tag.name}</div>)}
                </div>
            </div>
        </div>
    );
};

