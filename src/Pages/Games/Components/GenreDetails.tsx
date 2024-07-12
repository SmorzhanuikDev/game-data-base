import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks";
import {Title} from "../../../Common/Components/Title";
import s from '../Games.module.scss'

export const GenreDetails = () => {

    const genreDetails = useAppSelector(state => state.games.genreDetails)
    const [isDescExpand, setIsDescExpand] = useState(false)
    const description = new DOMParser().parseFromString(genreDetails.description, "text/xml").childNodes[0].childNodes[0].textContent

    const cutDesc = (desc: string | null) => {
        if (desc) {
            let wordArr = desc.slice(400).split(' ')
            const deletedPart = wordArr.slice(1, wordArr.length).join(' ')
            return desc.replace(deletedPart, '')
        }
        return desc
    }

    const changeDesc = () => {
        setIsDescExpand(!isDescExpand)
    }

    if (!genreDetails.id) {
        return <div className={s.genreDescLoader}/>
    }
    return (
        <div>
            <Title title={genreDetails.name}/>
            <div className={s.description}>
                {
                    description && description.length > 400
                        ? <>
                            <div hidden={isDescExpand}>
                                {description}
                                <span className={s.showMoreButton} onClick={changeDesc}>hide</span>
                            </div>
                            <div hidden={!isDescExpand}>
                                {cutDesc(description) + '...'}
                                <span className={s.showMoreButton} onClick={changeDesc}>show more</span>
                            </div>
                        </>
                        : description
                }
            </div>
        </div>
    );
};

