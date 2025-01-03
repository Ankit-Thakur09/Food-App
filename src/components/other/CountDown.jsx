import React, { useEffect, useState } from "react";

const CountDown = () => {
 

  const [currentSlot, setCurrentSlot] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const [hours, minutes] = endTime.split(":").map(Number);
    const end = new Date();
    end.setHours(hours, minutes, 0);

    const diff = end - now;

    if (diff > 0) {
      const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

      return `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }
    return "Time's up!";
  };

    useEffect(() => {
       const weekdays = [
         {
               day: "Sunday",
             
           timeSlots: [
             { start: "09:00", end: "12:00" },
             { start: "18:00", end: "20:00" },
           ],
         },
         { day: "Monday", timeSlots: [{ start: "10:00", end: "14:00" }] },
         {
           day: "Tuesday",
           timeSlots: [
             { start: "09:00", end: "13:00" },
             { start: "15:00", end: "18:00" },
           ],
         },
         {
           day: "Wednesday",
           timeSlots: [
             { start: "08:00", end: "10:00" },
             { start: "17:00", end: "19:00" },
           ],
         },
         { day: "Thursday", timeSlots: [{ start: "12:00", end: "16:00" }] },
           {
               day: "Friday",
               timeSlots: [{ start: "14:00", end: "18:00" }]
           },
         { day: "Saturday", timeSlots: [{ start: "11:00", end: "15:00" }] },
       ];
    const interval = setInterval(() => {
      const now = new Date();
      const todayIndex = now.getDay(); // 0 = Sunday, 6 = Saturday
      const today = weekdays[todayIndex];

      setCurrentDay(today.day);

      const current = today.timeSlots.find(({ start, end }) => {
        const [startH, startM] = start.split(":").map(Number);
        const [endH, endM] = end.split(":").map(Number);

        const startTime = new Date();
        const endTime = new Date();

        startTime.setHours(startH, startM, 0);
        endTime.setHours(endH, endM, 0);

        return now >= startTime && now <= endTime;
      });

      if (current) {
        setCurrentSlot(current);
        setTimeLeft(calculateTimeLeft(current.end));
      } else {
        setCurrentSlot(null);
        setTimeLeft("No active countdown right now.");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold mb-4">Weekly Countdown</h1>
      <p className="text-lg mb-4">Today: {currentDay}</p>
      <p>Special offer starts from {currentDay.currentstart}</p>

      {currentSlot ? (
        <div>
          <p>
            Ongoing Slot: {currentSlot.start} - {currentSlot.end}
          </p>
          <p className="text-lg font-medium text-red-500">
            Time Left: {timeLeft}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">No active time slot for today.</p>
      )}
    </div>
  );
};

export default CountDown;
