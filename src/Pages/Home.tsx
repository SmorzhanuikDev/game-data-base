import React, {useEffect} from 'react';
import axios from "axios";

export const Home = () => {

    useEffect(() => {
        axios.get("https://gdb-api.onrender.com/").then(res => console.log(res.data))
    }, []);

    return (
        <div>
            home
        </div>
    );
};

