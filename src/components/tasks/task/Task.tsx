import styles from "./Task.module.scss";
import {FC} from "react";
import {TaskTypes} from "../../../types/Task.types.ts";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import useTasksStore from "../../../store/TasksStore.ts";


const Task:FC<TaskTypes> = ({id, title, time, completed}) => {

    const {deleteTask,toggleCheckCompletion} = useTasksStore();

    return (
        <div className={styles.taskBox}>
            <div className={styles.taskBlock}>
                <Checkbox className={styles.checkBox} onChange={() => toggleCheckCompletion(id)} checked={completed}/>
                <div className={styles.taskInfo}>
                    <span className={completed ? [styles.taskTitle, styles.taskActive].join(' ') : styles.taskTitle}>{title}</span>
                    <span className={completed ? [styles.taskTime, styles.taskActive].join(' ') : styles.taskTime}>{time}</span>
                </div>
            </div>
            <div className={styles.taskBtns}>
                <button className={styles.deleteBtn} onClick={() => deleteTask(String(id))}>
                    <DeleteIcon className={styles.deleteBtnIcon}/>
                </button>
            </div>

        </div>
    );
};

export default Task;