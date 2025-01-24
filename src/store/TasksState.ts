import { create } from 'zustand';

interface TabsState {
    title: string;
    setTitle: (newTitle: string) => void;

}

const useTasksState = create<TabsState>((set) => ({
    title: 'Active',
    setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTasksState

