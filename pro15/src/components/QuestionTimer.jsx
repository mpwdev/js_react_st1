import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('setting timeout');

    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

		return () => {
			clearTimeout(timer);
		};
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('setting interval');

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}
