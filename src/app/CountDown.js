"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Sajid from "./assets/sajid.jpg";
import useWindowSize from "react-use/lib/useWindowSize";

const Countdown = ({ weddingDate }) => {
  const { width, height } = useWindowSize();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(weddingDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  useEffect(() => {
    const audio = new Audio("/path/to/fireworks-sound.mp3");
    audio.play();
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 shadow-md mx-2 text-center">
        <span className="block text-4xl font-bold">{timeLeft[interval]}</span>
        <span className="block text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6">
      <Confetti width={width} height={height} />
      <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 font-bold">🎉 Congratulations! 🎉</div>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Chaudhary Sajid Dy Viyah 💍 Da Countdown </h1>
      <div className="flex flex-wrap justify-center gap-4">{timerComponents.length ? timerComponents : <span>Wedding Time!</span>}</div>
      <p className="mt-8 text-lg text-center">Time left until the chaudhary will not fall under our category!</p>
      <Image src={Sajid} width={100} height={100} alt="Chaudhary" className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto mt-8 rounded-lg shadow-md" />
    </div>
  );
};

export default Countdown;
