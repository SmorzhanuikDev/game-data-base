import React from 'react';
import {useAppSelector} from "../../../hooks";

export const GenreDetails = () => {
    const genreDetails = useAppSelector(state => state.games.genreDetails)

    return (
        <div>

        </div>
    );
};

