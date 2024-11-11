import React, {useState} from 'react';
import {FilterValuesType} from "../App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // changeFilter: (value: FilterValuesType) => void
    removeAllTasks: () => void
}

export function Todolist({tasks, ...props}: PropsType) {
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }
    if (filter === 'firsThreeTasks') {
        tasksForTodolist = tasksForTodolist.filter(t => t.id <= 3)
    }
    if (filter === 'removeAllTasks') {
        tasksForTodolist = []
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilter("completed")
            }}>
                Completed
            </button>
            <button
                onClick={() => {
                    changeFilter('firsThreeTasks')
                }}>Display First Three Tasks
            </button>
            <button onClick={() => {
                changeFilter('removeAllTasks')
            }}>Delete All Tasks
            </button>
            <button onClick={() => {
                props.removeAllTasks()
            }}>Delete All Tasks With Use Function
            </button>
        </div>
    </div>
}
