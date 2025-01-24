import { create } from "zustand";
import { persist } from "zustand/middleware";
import {TaskTypes} from "../types/Task.types.ts";

type NotesTypes = {
    id: string;
    title: string;
    text: string;
    time: string;
}

interface DiaryStore {
    notes: NotesTypes[];
    addNote: (title: string, text: string, time: string) => void;
}

const useDiaryStore = create<DiaryStore>()(persist
    (set => ({
        notes: [],
        addNote: (title, time) =>
            set((state) => {
                const newTask: TaskTypes = {
                    id: String(Date.now()),
                    title,
                    text,
                    time,



                };
                return { notes: [...state.notes, newTask] };
            }),
    })
));

export default useDiaryStore;