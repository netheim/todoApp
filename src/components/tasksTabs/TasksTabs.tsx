
import styles from './TasksTabs.module.scss'
import useTasksState from "../../store/TasksState.ts";

const TasksTabs = () => {

    const {title, setTitle } = useTasksState(); // Получаем состояние и функцию для изменения состояния

    const onChange = (newTitle: string) => {
        setTitle(newTitle); // Изменяем состояние title
    };
    return (
        <div className={styles.tasksTabs}>
            <button className={title === 'Active' ? [styles.tabsItem, styles.active].join(' ') : styles.tabsItem} onClick={() => onChange('Active')}>Active</button>
            <button className={title === 'Completed' ? [styles.tabsItem, styles.active].join(' ') : styles.tabsItem} onClick={() => onChange('Completed')}>Completed</button>
        </div>
    );
};

export default TasksTabs;