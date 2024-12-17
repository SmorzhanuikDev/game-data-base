import React, {FC, useEffect, useRef, useState} from 'react';
import s from "./tags.module.scss";
import SmallLoader from "../../../../Common/Components/SmallLoader";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import useOnScreen from "../../../../Common/Hook/useOnScreen";
import {fetchTagsAction} from "../../gamesSaga";

interface props {
    activeTags: number[]
    setActiveTags: React.Dispatch<React.SetStateAction<number[]>>
}

export const TagList: FC<props> = ({activeTags, setActiveTags}) => {

    const tags = useAppSelector(state => state.games.tags.results)
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)
    const dispatch = useAppDispatch()
    const [tagPage, setTagPage] = useState(1)
    console.log(tagPage)

    useEffect(() => {
        if (isVisible) {
            dispatch(fetchTagsAction(tagPage))
            if (tagPage === 1) {
                dispatch(fetchTagsAction(tagPage + 1))
                setTagPage(tagPage + 1)
            }
            setTagPage(prevState => prevState + 1)
        }
    }, [dispatch, isVisible]);


    const selectTag = (tagId: number) => {
        if (activeTags.find(tag => tag === tagId)) {
            setActiveTags(activeTags.filter(tag => tag !== tagId))
        } else if (activeTags.length < 5) {
            setActiveTags(prevState => prevState.concat(tagId))
        }
    }

    const checkIsSelected = (tagId: number) => {
        return !!activeTags.find(tag => tag === tagId)
    }

    return (
        <div className={s.tagModalList}>
            {tags?.map(tag => <div key={tag.id} className={checkIsSelected(tag.id) ? s.selectedTag : s.tag}
                                   onClick={() => selectTag(tag.id)}>{tag.name}</div>)}
            <div ref={ref}><SmallLoader/></div>
        </div>
    );
};

