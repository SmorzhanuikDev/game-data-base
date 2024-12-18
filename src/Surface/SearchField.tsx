import React, {useEffect, useState} from 'react';
import s from "./Surface.module.scss";
import searchIcon from "../Images/search-icon.png";
import {useAppDispatch, useAppSelector} from "../hooks";
import {searchGamesAction} from "../Pages/Games/gamesSaga";
import noImage from '../Images/no-image.png'
import {setSearchGameList} from "../Pages/Games/gamesSlice";
import {gameType} from "../Pages/Games/gamesTypes";
import {IoMdClose} from "react-icons/io";
import {useNavigate, useSearchParams} from "react-router-dom";
import {VscSearchFuzzy} from "react-icons/vsc";


export const SearchField = () => {

    const [search, setSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    const searchGames = useAppSelector(state => state.games.searchGameList)
    const noResult = useAppSelector(state => state.games.isEmptySearch)
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();

    const changeSearch = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const goToGame = (gameId: number) => {
        navigate(`game/${gameId}`)
        setSearch('')
    }

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            goToSearch()
        }
    }

    const goToSearch = () => {
        navigate('games')
        searchParams.append('search', search)
        setSearchParams(searchParams)
        setSearch('')
    }

    useEffect(() => {
        dispatch(setSearchGameList({} as gameType[]))
        if (search) {
            dispatch(searchGamesAction({search, page_size: 5}))
        }
    }, [search, dispatch]);

    return (
        <div className={s.searchBarContainer}>
            <div className={s.searchInput}>
                <img src={searchIcon} alt='searchIcon'/>
                {search ? <IoMdClose onClick={() => setSearch('')} className={s.cleanButton}/> : null}
                <input spellCheck={false} type="text" placeholder='Try to search' onKeyDown={handleSubmit}
                       value={search}
                       onChange={changeSearch}/>
            </div>
            <div className={s.searchResult} hidden={search === ''}>
                {
                    search && !searchGames.length
                        ? (noResult
                                ? <div className={s.noResult}>
                                    <VscSearchFuzzy className={s.noResIcon}/>
                                    No result
                                </div>
                                : <div className={s.loaderWrapper}>
                                    <div className={s.searchLoader}/>
                                </div>
                        )
                        : <div>
                            {
                                searchGames.length
                                    ? <>{searchGames.map(game =>
                                        <div onClick={() => goToGame(game.id)}
                                             className={s.searchItem} key={game.id}>
                                            <img className={s.gameImage} src={game.background_image || noImage}
                                                 alt={game.name}/>
                                            <div className={s.gameName}>{game.name}</div>
                                        </div>)}
                                        <div className={s.seeAllButton} onClick={goToSearch}>Show all</div>
                                    </>
                                    : null
                            }
                        </div>
                }
            </div>
        </div>
    );
};

