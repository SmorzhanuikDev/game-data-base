import React from 'react';
import s from './main.module.scss'
import {instance} from "./API";
import axios from "axios";
import {Navigation} from "./Surface/Navigation";
import {Footer} from "./Surface/Footer";
import {Content} from "./Surface/Content";
function App() {

    const token = 'de12c3781cbf437fb959b333da49c533'


  return (
    <div className={s.test}>
        <Navigation/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
