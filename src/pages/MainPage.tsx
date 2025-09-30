import { useState, useEffect } from 'react';
import type { ITimer } from '../core/interfaces/timer';

const MainPage = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);
  const [timerTitle, setTimerTitle] = useState('');
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (timer.isActive && timer.timeRemaining > 0) {
            return { ...timer, timeRemaining: timer.timeRemaining - 1 };
          } else if (timer.timeRemaining === 0) {
            return { ...timer, isActive: false };
          }
          return timer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const createTimer = () => {
    if (!timerTitle.trim()) return;

    const newTimer: ITimer = {
      id: nextId,
      title: timerTitle,
      timeRemaining: 2 * 60 * 60,
      isActive: true,
    };

    setTimers([...timers, newTimer]);
    setTimerTitle('');
    setNextId(nextId + 1);
  };

  const deleteTimer = (id: number) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#2f3136] p-8">
      <div className="flex items-center justify-center gap-4 mb-8">
        <img src="/archi-timer.png" alt="Archi Timer Logo" className="w-16 h-16" />
        <h1 className="text-4xl font-bold text-white">archi timer</h1>
      </div>
      
      <div className="max-w-4xl mx-auto mb-8 flex gap-3">
        <input
          type="text"
          value={timerTitle}
          onChange={(e) => setTimerTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && createTimer()}
          placeholder="Archimonstre"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-fuchsia-500 focus:outline-none text-gray-700 shadow-sm"
        />
        <button
          onClick={createTimer}
          className="px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-700 transition-colors shadow-md hover:shadow-lg"
        >
          Créer le timer
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
        {timers.map((timer) => (
          <div
            key={timer.id}
            className="bg-white rounded-xl shadow-lg p-6 w-72 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{timer.title}</h3>
            <div className="text-4xl font-mono font-bold text-gray-600 mb-4">
              {formatTime(timer.timeRemaining)}
            </div>
            {timer.timeRemaining === 0 && (
              <p className="text-green-600 font-semibold mb-3">Timer finished!</p>
            )}
            <button
              onClick={() => deleteTimer(timer.id)}
              className="w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;