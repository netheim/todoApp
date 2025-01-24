
import styles from './TodoTabs.module.scss'
import useTabsState from "../../store/TabsState.ts";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TodoTabs = () => {

    const {title, setTitle } = useTabsState(); // Получаем состояние и функцию для изменения состояния

    const onChange = (newTitle: string) => {
        setTitle(newTitle); // Изменяем состояние title
    };
    return (
        <div className={styles.todoTabs}>
            <button className={title === 'Tasks' ? [styles.tabsItem, styles.active].join(' ') : styles.tabsItem} onClick={() => onChange('Tasks')}>
                <span className={styles.tabsItemInfo}>
                    <AssignmentIcon className={styles.tabsItemIcon}/>
                    Tasks
                </span>
            </button>
            <button className={title === 'Focus' ? [styles.tabsItem, styles.active].join(' ') : styles.tabsItem} onClick={() => onChange('Focus')}>
                <span className={styles.tabsItemInfo}>
                    <AvTimerIcon className={styles.tabsItemIcon}/>
                    Focus
                </span>
            </button>
            <button className={title === 'Diary' ? [styles.tabsItem, styles.active].join(' ') : styles.tabsItem} onClick={() => onChange('Diary')}>
                <span className={styles.tabsItemInfo}>
                    <AccountCircleIcon className={styles.tabsItemIcon}/>
                    Diary
                </span>
            </button>
        </div>
    );
};

export default TodoTabs;