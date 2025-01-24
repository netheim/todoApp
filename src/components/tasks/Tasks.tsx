import TasksTabs from "../tasksTabs/TasksTabs.tsx";
import useTasksState from "../../store/TasksState.ts";
import ActiveTasks from "./activeTasks/ActiveTasks.tsx";
import CompletedTasks from "./completedTasks/CompletedTasks.tsx";

const Tasks = () => {

    const { title } = useTasksState();
    return (
        <div>
            <TasksTabs />
            <div>
                {
                    title === 'Active' ? <ActiveTasks /> : <CompletedTasks />
                }
            </div>
        </div>
    );
};

export default Tasks;