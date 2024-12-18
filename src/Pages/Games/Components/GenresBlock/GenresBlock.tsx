import React, {useEffect} from 'react';
import s from './genresBlock.module.scss'
import {useNavigate, useSearchParams} from "react-router-dom";
import {setIsAppLoading} from "../../../../appSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {fetchContentAction} from "../../../CommonPage/commonPageSaga";

interface props {
    activeGenre: string | null
}

export const GenresBlock: React.FC<props> = React.memo(({activeGenre}) => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.commonPageData.content)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch(setIsAppLoading(true))
        dispatch(fetchContentAction(1, '/genres'))
    }, [dispatch]);

    useEffect(() => {
        if (genres.results)
            dispatch(setIsAppLoading(false))
    }, [dispatch, genres.results]);

    const handleClick = (id: number) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        if (id === Number(activeGenre)) {
            searchParams.delete('genre')
        } else {
            if (searchParams.has('genre')) {
                searchParams.set('genre', String(id))
                setSearchParams(searchParams)
            } else {
                searchParams.append('genre', String(id))
                setSearchParams(searchParams)
            }
        }
    }

    return (
        <div className={s.genresBlock}>
            <h5 className={s.blockName}>Genres</h5>
            {
                genres.results?.map(genre =>
                    <div key={genre.id} onClick={() => handleClick(genre.id)}
                         className={Number(activeGenre) !== genre.id ? s.genresItem : s.activeGenre}>
                        <img src={genre.image_background || ''} alt="genreImg"/>
                        <span>{genre.name}</span>
                    </div>)
            }
        </div>
    );
})

