import React, {KeyboardEvent, useRef} from 'react';
import {FilterValuesType} from '../App';
import {useAutoAnimate} from "@formkit/auto-animate/react";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    children?: React.ReactNode
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist: React.FC<PropsType> = ({children, ...props}) => {

    let onChangeRef = useRef<HTMLInputElement>(null)

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    const addTask = () => {
        if (onChangeRef.current) {
            props.addTask(onChangeRef.current.value);
            onChangeRef.current.value = "";
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <div>
            <h3>{props.title}</h3>
            <div>
                <input ref={onChangeRef}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul ref={listRef}>
                {
                    props.tasks.map(t => {

                        const onClickHandler = () => props.removeTask(t.id)

                        return <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
}
