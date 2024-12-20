import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {SuperButton} from "./components/SuperButton";
import styles from './components/SuperButton.module.css'
import {Modal} from "./components/modal/Modal";

// Hi guys! Let`s reinforce our session:

// 1. Install AXIOS -it`s a library for HTTP requests. We  use it instead method FETCH.
// https://axios-http.com/ru/docs/intro
// yarn add axios

// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//         setTodos(res.data)
//     })

//2. Let`s relocate our method map, and wrap it in a new variable:
//const mapTodos=todos.map(el => {...

// return (
//     <div className="App">
//         <button onClick={onClickHandler}>CLEAN POSTS</button>
//         <ul>
//             {mapTodos}
//         </ul>
//     </div>
// );

// 3. Create new button to redisplay  our data

// 4. We are having a problem. The code is duplicated (axios.get...). Let`s create a new function and use it where we need.
//Good luck!


type PropsType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const onClickHandler = () => {
        setTodos([])
    }
    const getTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setTodos(res.data)
            })
    }

    const mapTodos = todos.map(el => <li>
        {/*<span>{el.id}</span>*/}
        <span>{el.title}</span>
        <span>{el.completed}</span>
    </li>)

    return (
        <div className="App">
            <Modal>
                <p>Confidential information</p>
                <input type="email" placeholder={'email'}/>
                <input type="password" placeholder={'password'}/>
                <input type="password" placeholder={'password'}/>
                <label>
                    <input type="checkbox"/>
                    save
                </label>

                <SuperButton bgColor={'#32f'}>login</SuperButton>

                <SuperButton className={styles.navyBlueButtonStyle} borderColor={'#d7cdcd'}>NAVY</SuperButton>
                <SuperButton className={styles.pinkyBlueButtonStyle}>PINKY</SuperButton>
            </Modal>

            <div>
                <button onClick={onClickHandler}>CLEAN POSTS</button>
                <button onClick={getTodos}>GET POSTS</button>
                <ul>
                    {mapTodos}
                </ul>

            </div>
        </div>
    );
}

export default App;
