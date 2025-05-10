import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import openBox from '../assets/images/gift.jpeg';
import song from '../assets/audio/happybirthday.mp3';

export default function Gift({ onOpen, partyOn }) {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);
  const [width, height] = useWindowSize();

  /* preload song */
  useEffect(() => {
    audioRef.current = new Audio(song);
  }, []);

  /* present click */
  const handleClick = () => {
    if (!open) {
      setOpen(true);
      audioRef.current?.play();
      onOpen?.(true);                 // start celebration
    }
  };

  /* stop celebration after 7 s */
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => onOpen?.(false), 7000);
      return () => clearTimeout(t);
    }
  }, [open, onOpen]);

  /* helper: render overlay into <body> so it spans full viewport */
  const OverlayPortal = ({ children }) =>
    ReactDOM.createPortal(children, document.body);

  return (
    <>
      {/* --- celebration overlays ------------------------------------------------ */}
      {partyOn && (
        <>
          {/* Confetti full-screen */}
          <OverlayPortal>
            <Confetti
              width={width}
              height={height}
              style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
            />
          </OverlayPortal>
        </>
      )}

      {/* --- the present -------------------------------------------------------- */}
      <div className="text-center my-4">
        <img
          src={openBox}
          alt="Click to open present"
          className={`gift-img ${open ? 'opened' : ''}`}
          onClick={handleClick}
          style={{ cursor: 'pointer', width: 220 }}
        />
        <p className="mt-2 fw-bold">Click the present 🎁</p>
      </div>
    </>
  );
}
