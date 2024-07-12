import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from "./commonPage.module.scss";
import {CommonCard} from "../../Common/Components/CommonCard/CommonCard";
import {fetchContentAction} from "./commonPageSaga";
import {setIsFetching} from "./commonPageSlise";
import {Loader} from "../../Common/Components/Loader";
import {useLocation} from "react-router-dom";
import {Title} from "../../Common/Components/Title";

export const CommonPage = () => {

    const dispatch = useAppDispatch()
    const {pathname} = useLocation()
    const content = useAppSelector(state => state.commonPageData.content)
    const isFetching = useAppSelector(state => state.commonPageData.isFetching)
    const page = useAppSelector(state => state.commonPageData.page)

    useEffect(() => {
        if (isFetching) {
            dispatch(fetchContentAction(page, pathname))
        }
    }, [dispatch, isFetching, page, pathname, content.next]);

    const scrollHandler = (e: any) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
            && content.next) {
            dispatch(setIsFetching(true))
        }

    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    });


    return (
        <div>
            <Title title={pathname.slice(1, pathname.length)} />
            <div className={s.container}>
                {
                    content.results ?
                        content.results?.map(dev => <CommonCard
                            key={dev.name} games={dev.games}
                            gameCount={dev.games_count} title={dev.name} bgImage={dev.image_background}
                        />)
                        : <div className={s.searchLoader}><Loader/></div>
                }
                {
                    isFetching && content.results ? <div className={s.searchLoader}><Loader/></div> : null
                }
            </div>
        </div>
    );
};