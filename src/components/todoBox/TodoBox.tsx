import styles from './TodoBox.module.scss'
import TodoTabs from "../todoTabs/TodoTabs.tsx";
import useTabsState from "../../store/TabsState.ts";
import Tasks from "../tasks/Tasks.tsx";
import Focus from "../focus/Focus.tsx";
import Diary from "../diary/Diary.tsx";


const TodoBox = () => {
    const { title } = useTabsState();

    return (
        <div className={styles.todoBox}>
            <div className={styles.todoContent}>
                <div className={styles.todoHeader}>
                    <h2 className={styles.todoTitle}>Todoist</h2>
                </div>
                {title === 'Tasks' ? <Tasks/> : title === 'Focus' ? <Focus /> : <Diary />}

            </div>
            <div>
            </div>
            <TodoTabs />
        </div>
    );
};

export default TodoBox;