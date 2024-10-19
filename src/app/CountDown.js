"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ weddingDate }) => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Chaudhary Dy Viyah 💍 Da Countdown </h1>
      <div className="flex flex-wrap justify-center gap-4">{timerComponents.length ? timerComponents : <span>Wedding Time!</span>}</div>
      <p className="mt-8 text-lg text-center">Time left until the chaudhary will not fall under our category!</p>
    </div>
  );
};

export default Countdown;
