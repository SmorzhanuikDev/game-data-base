import React from 'react';
import s from './main.module.scss'
import {instance} from "./API";
import axios from "axios";
function App() {

  // const onClick = () => {
  //   instance.get('platforms').then(
  //       function (res:any) {
  //         console.log(res)
  //       }
  //   )
  //       .catch(function (error:any) {
  //         console.log(error)
  //       })
  // }
    const token = 'de12c3781cbf437fb959b333da49c533'
  const onClick = () => {
    axios.get('https://api.rawg.io/api/platforms?key=de12c3781cbf437fb959b333da49c533').then(
        function (res:any) {
          console.log(res)
        }
    )
        .catch(function (error:any) {
          console.log(error)
        })
  }

  return (
    <div className={s.test}>some text
        <button onClick={()=> onClick()}>click</button>
    </div>
  );
}

export default App;
