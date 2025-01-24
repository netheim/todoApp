import { create } from 'zustand';

interface TabsState {
    title: string;
    setTitle: (newTitle: string) => void;

}

const useTabsState = create<TabsState>((set) => ({
    title: 'Tasks',
    setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTabsState
