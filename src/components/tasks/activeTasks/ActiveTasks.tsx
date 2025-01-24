import {useState} from "react";
import useTasksStore from "../../../store/TasksStore.ts";
import Task from "../task/Task.tsx";
import styles from './ActiveTasks.module.scss'
import {Backdrop, Box, Fade, Modal} from "@mui/material";
import Input from "../../UI/input/Input.tsx";
import AddButton from "../../UI/addButton/AddButton.tsx";


const style = {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const ActiveTasks = () => {

    const { activeTasks, addTask } = useTasksStore();
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [completed, setCompleted] = useState(false);
    const [modal, setModal] = useState<boolean>(false);


    const handleAddTask = () => {

        if (title && time) {
            addTask(title, time, completed);
            setTitle("");
            setTime("");
            setCompleted(false);
            setModal(false);
        }

    }

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setTitle("");
        setTime("");
    }
    return (
        <div className={styles.activeTasks}>
            <div>
                <span className={styles.activeTasksTitle}>Active Tasks</span>

                <ul>
                    {activeTasks.map((task) => (
                        <Task completed={task.completed} title={task.title} id={task.id} key={task.id} time={task.time}/>

                    ))}
                </ul>
            </div>

            <button className={styles.modalBtn} onClick={openModal}>ADD TASK</button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modal}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={modal}>
                    <Box sx={style}>
                        <h1>Create new task</h1>
                        <Input
                            // value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder={'Title'} type={'text'}/>
                        <Input
                            // value={time}
                            onChange={(event) => setTime(event.target.value)}
                            placeholder={'Time'} type={'time'}/>
                        <AddButton children={'Add Task'} onClick={handleAddTask}/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ActiveTasks;