import React, { useEffect } from 'react';
import {usePomodoroStore} from "../../store/PomodoroStore.ts";

const Focus: React.FC = () => {
    const {
        timeLeft,
        stage,
        isRunning,

        startTimer,
        pauseTimer,
        resetTimer,

    } = usePomodoroStore();

    // Форматируем время (минуты:секунды)
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Эффект для запуска таймера
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            usePomodoroStore.setState((state) => {
                if (state.timeLeft > 0) {
                    return { timeLeft: state.timeLeft - 1 }; // Уменьшаем timeLeft
                }
                state.switchStage(); // Меняем этап, если время вышло
                return { timeLeft: 0 };
            });
        }, 1000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, [isRunning]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>{stage === 'focus' ? 'Focus Time' : 'Break Time'}</h1>
            <h2 style={{ fontSize: '48px', margin: '20px 0' }}>{formatTime(timeLeft)}</h2>
            <div>
                {!isRunning ? (
                    <button onClick={startTimer} style={buttonStyle}>
                        Start
                    </button>
                ) : (
                    <button onClick={pauseTimer} style={buttonStyle}>
                        Pause
                    </button>
                )}
                <button onClick={resetTimer} style={buttonStyle}>
                    Reset
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
};

export default Focus;
