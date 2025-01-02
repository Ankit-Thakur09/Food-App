import { useState } from "react";


function CounterR() {
     let [counter, setCounter] = useState(1);
    if (counter > 5) {
      counter = 5;
    }
    const handleMinus = () => {
      if (counter <= 1) {
        // setClick(false);
        setCounter(1);
        return;
      }

      setCounter(counter - 1);
    };
     const handleInc = () => {
       if (counter >= 5) {
         // setClick(false);
         setCounter(5);
         return;
       }

       setCounter(counter + 1);
     };
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={handleInc}
          className="text-3xl bg-slate-950 text-white p-5"
        >
          +
        </button>
        Count:{counter}
        <button
          onClick={handleMinus}
          className="text-3xl bg-slate-950 text-white p-5"
        >
          -
        </button>
        <div>
       
        </div>
      </div>
    </div>
  );
}

export default CounterR;
