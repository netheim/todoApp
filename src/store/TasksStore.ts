import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskTypes } from "../types/Task.types.ts";

interface TasksStore {
    activeTasks: TaskTypes[];
    addTask: (title: string, time: string, completed: boolean) => void;
    deleteTask: (id: string) => void;

    toggleCheckCompletion: (id: string) => void;
    completedTasks: TaskTypes[],
}


const useTasksStore = create<TasksStore>()(
    persist(
        (set, get) => ({
            activeTasks: [],
            completedTasks: [],
            addTask: (title, time) =>
                set((state) => {
                    const newTask: TaskTypes = {
                        id: String(Date.now()),
                        title,
                        time,
                        completed: false,


                    };
                    return { activeTasks: [...state.activeTasks, newTask] };
                }),
            deleteTask: (id) =>
                set((state) => ({
                    activeTasks: state.activeTasks.filter((task) => task.id !== id),
                    completedTasks: state.completedTasks.filter((task) => task.id !== id),

                })),

            toggleCheckCompletion: (id: string) => {
                const { activeTasks, completedTasks } = get();

                // Находим задачу в активных
                const taskIndex = activeTasks.findIndex(task => task.id === id);
                if (taskIndex === -1) return;

                // Переключаем статус задачи
                const updatedTask = { ...activeTasks[taskIndex], completed: !activeTasks[taskIndex].completed };

                // Обновляем активные задачи
                const updatedActiveTasks = [...activeTasks];
                updatedActiveTasks[taskIndex] = updatedTask;

                if (updatedTask.completed) {
                    // Если задача завершена, добавляем её в завершённые
                    set({
                        activeTasks: updatedActiveTasks,
                        completedTasks: [...completedTasks, { ...updatedTask, completed: false }],
                    });
                } else {
                    // Если задача не завершена, удаляем её из завершённых
                    set({
                        activeTasks: updatedActiveTasks,
                        completedTasks: completedTasks.filter(task => task.id !== id),
                    });
                }
            }
            // checkState: false,
            // setCheckState: () => set((state) => ({
            //     checkState: !state.checkState,
            // }))

        }),
        {
            name: "active-tasks-storage", // Ключ для localStorage
        }
    )
);

export default useTasksStore;
