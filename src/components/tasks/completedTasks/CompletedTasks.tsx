import styles from "./CompletedTasks.module.scss"
import Task from "../task/Task.tsx";
import useTasksStore from "../../../store/TasksStore.ts";

const CompletedTasks = () => {
    const { completedTasks } = useTasksStore();



    return (
        <div className={styles.completedTasks}>
            <div>
                <span className={styles.completedTasksTitle}>Completed Tasks</span>

                <ul>
                    {completedTasks.map((task) => (
                        <Task completed={true} title={task.title} id={task.id} key={task.id} time={task.time}/>

                    ))}
                </ul>
            </div>


        </div>
    );
};

export default CompletedTasks;