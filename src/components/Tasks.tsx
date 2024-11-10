import {DataType} from "../App";

type Props = {
    data: DataType
}

export const Tasks = ({data}: Props) => {
    return (
        <div>
            <ul>
                {
                    data.tasks.map(task => {
                        return (
                            <li key={task.taskId}>
                                <span>{task.taskId}</span>
                                <input type={"checkbox"} checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <ul>
                {
                    data.students.map((student, index) => {
                        return (
                            <li key={index}>
                                {student}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
