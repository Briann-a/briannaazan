import {useState} from 'react';
import {DESK_ITEMS} from './data/portfolioData';
import {DigitalClock} from './components/digitalClock';
import {SketchPage} from './components/sketchPage';
import {asset} from './assets';

export default function App() {
  const [isLampOn, setIsLampOn] = useState(true); //track lamp state
  const [activePage, setActivePage] = useState(null); //see desk only, no interactive screens
  const [hoveredItem, setHoveredItem] = useState(null); //for all other items, hover for scale transition
  const [isLampHovered, setIsLampHovered] = useState(false); //special for lamp, toggle on/off

  return (
    <main className="scene-viewport">
      <header className="desk-scene-title">
        <h1 className="font-title boil-item text-3xl sm:text-4xl md:text-5xl tracking-wide">
          Brianna's
          <br />
          desk.
        </h1>
      </header>

      <div className="desk-scene">
        <img
          src={asset('desk-bg.png')}
          alt=""
          aria-hidden="true"
          className="desk-scene-layer boil-bg"
        />

        {DESK_ITEMS.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt=""
            aria-hidden="true"
            className="desk-scene-layer boil-item transition-transform duration-200"
            style={{
              zIndex: hoveredItem === item.id ? item.layer + 100 : item.layer,
              transform: hoveredItem === item.id ? 'scale(1.05)' : undefined,
              transformOrigin: `${parseFloat(item.hitbox.left) + parseFloat(item.hitbox.width) / 2}% ${parseFloat(item.hitbox.top) + parseFloat(item.hitbox.height) / 2}%`,
            }}
          />
        ))}

        <DigitalClock />

        <img
          src={isLampOn ? asset('lamp-on (1).png') : asset('lamp-off.png')}
          alt=""
          aria-hidden="true"
          className="desk-scene-layer boil-item transition-transform duration-200"
          style={{
            zIndex: isLampHovered ? 52 : 50,
            transform: isLampHovered ? 'scale(1.05)' : undefined,
            transformOrigin: '83.615% 78.625%',
          }}
        />

        <button
          onClick={() => setIsLampOn((prev) => !prev)}
          onMouseEnter={() => setIsLampHovered(true)}
          onMouseLeave={() => setIsLampHovered(false)}
          onFocus={() => setIsLampHovered(true)}
          onBlur={() => setIsLampHovered(false)}
          aria-label={isLampOn ? 'turn lamp off' : 'turn lamp on'}
          style={{
            top: '72.94%',
            left: '79.48%',
            width: '8.27%',
            height: '11.37%',
            zIndex: 51,
          }}
          className="desk-scene-hitbox cursor-pointer"
        />

        {DESK_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              console.log('clicked', item.id, item.pageData); //verify click
              setActivePage(item.pageData);
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onFocus={() => setHoveredItem(item.id)}
            onBlur={() => setHoveredItem(null)}
            aria-label={item.label}
            style={{...item.hitbox, zIndex: item.layer + 1}}
            className="desk-scene-hitbox cursor-pointer"
          />
        ))}
      </div>

      {/* full screen popup page (for interactives) */}
      <SketchPage
        pageData={activePage} //to assigned interactive page
        onClose={() => setActivePage(null)} //back to home
      />
    </main>
  );
}