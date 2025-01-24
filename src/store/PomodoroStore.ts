import { create } from 'zustand';


type TimerStage = 'focus' | 'break';

type PomodoroState = {
    timeLeft: number; // Оставшееся время в секундах
    stage: TimerStage; // Текущий этап: работа или отдых
    isRunning: boolean; // Таймер запущен или на паузе
    setTimeLeft: (seconds: number) => void;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    switchStage: () => void;
};

export const usePomodoroStore = create<PomodoroState>((set) => ({
    timeLeft: 25 * 60, // 25 минут в секундах для работы
    stage: 'focus',
    isRunning: false,

    setTimeLeft: (seconds: number) => set({ timeLeft: seconds }),

    startTimer: () => set({ isRunning: true }),

    pauseTimer: () => set({ isRunning: false }),

    resetTimer: () => set((state) => ({
        timeLeft: state.stage === 'focus' ? 25 * 60 : 5 * 60, // Сбрасываем в зависимости от этапа
        isRunning: false,
    })),

    switchStage: () => set((state) => ({
        stage: state.stage === 'focus' ? 'break' : 'focus',
        timeLeft: state.stage === 'focus' ? 5 * 60 : 25 * 60, // Меняем этап и время
        isRunning: false,
    })),
}));
