import { useEffect, useState } from 'react';
import { asset } from '../assets';

export function DigitalClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const showColon = now.getSeconds() % 2 === 0;

  return (
    <div className="desk-scene-layer pointer-events-none boil-item text-xl" style={{zIndex: 25}}>
      <img
        src={asset('clock.png')}
        alt=""
        aria-hidden="true"
        className="desk-scene-layer"
      />
      <span className="desk-clock-time">
        {hours}
        <span className={showColon ? 'opacity-100' : 'opacity-20'}>:</span> {/* switch for flickering colon */}
        {minutes}
      </span>
    </div>
  );
}