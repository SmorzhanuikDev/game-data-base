import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import mainS from "../../main.module.scss";
import s from "./Developers.module.scss";
import {CommonCard} from "../../Common/Components/CommonCard/CommonCard";
import {fetchDevelopersAction} from "./developersSaga";
import {setIsFetching} from "./developersSlice";
import {Loader} from "../../Common/Components/Loader";

export const Developers = () => {

    const dispatch = useAppDispatch()

    const developers = useAppSelector(state => state.developersData.developers)
    const isFetching = useAppSelector(state => state.developersData.isFetching)
    const page = useAppSelector(state => state.developersData.page)


    useEffect(() => {
        if (isFetching) {
            dispatch(fetchDevelopersAction(page))
        }

    }, [dispatch, isFetching, page]);

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
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
            <h3 className={mainS.pageTitle}>Platforms</h3>
            <div className={s.container}>

                {developers.results ?
                    developers.results?.map(dev => <CommonCard
                        key={dev.name} games={dev.games}
                        gameCount={dev.games_count} title={dev.name} bgImage={dev.image_background}
                    />)
                    : <div className={s.loader}><Loader/></div>
                }
                {
                    isFetching && developers.results ? <div className={s.loader}><Loader/></div> : null
                }
            </div>
        </div>
    );
};