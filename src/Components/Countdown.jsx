import { useEffect, useState } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-06T23:59:59");

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (

    <>
    <h1 className="text-5xl font-bold">Launching Soon</h1>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">

        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": `${timeLeft.days}` }}
            aria-label={`${timeLeft.days}`}
          >
            {timeLeft.days}
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": `${timeLeft.hours}` }}
            aria-label={`${timeLeft.hours}`}
          >
            {timeLeft.hours}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": `${timeLeft.minutes}` }}
            aria-label={`${timeLeft.minutes}`}
          >
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": `${timeLeft.seconds}` }}
            aria-label={`${timeLeft.seconds}`}
          >
            {timeLeft.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
    </>
  );
};

export default CountDown;
