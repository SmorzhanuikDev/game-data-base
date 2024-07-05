import React from 'react';
import s from "./Surface.module.scss";
import searchIcon from "../Images/search-icon.png";

export const SearchField = () => {
    return (
        <div className={s.searchBarContainer}>
            <div className={s.searchInput}>
                <img src={searchIcon} alt='searchIcon'/>
                <input type="text" placeholder='Try to search'/>
            </div>
            <div className={s.searchResult}>
                <div className={s.loaderWrapper}>
                    <div className={s.searchLoader}/>
                </div>
            </div>
        </div>
    );
};

