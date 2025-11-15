import React, {useEffect} from 'react';
import {Navigation} from "./Surface/Navigation";
import {Content} from "./Surface/Content";
import {setToken} from "./Pages/Authorization/authSlice";
import {useAppDispatch} from "./hooks";

function App() {

    const token = localStorage.getItem("token");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch, token]);


    return (
        <div>
            <Navigation/>
            <Content/>
        </div>
    );
}

export default App;
