import React, { useEffect, useState, useRef } from "react";

const Stopwatch = (props) => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () => {
    if (updatedM === 60) { updatedH++; updatedM = 0;}
    if (updatedS === 60) { updatedM++; updatedS = 0;}
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  //   //완전종료 &리셋
  //   const stop = () => {
  //     clearInterval(interv);
  //   };
  //   //일시정지
  //   const pause = () => {
  //     clearInterval(interv);
  //   };
  //   //이어서
  //   const resume = () => start();
  const timeRef = useRef(null);
  if (props.stop === true) {
    clearInterval(interv);
    console.log(timeRef.current.innerText);
  }
  useEffect(() => {
    setInterv(setInterval(run, 1000));
    clearInterval(interv);
  },[]);

  //버튼

  return (
    <React.Fragment>
      <div ref={timeRef}>
        {time.h === 0 ? ("") : (
        <span>{time.h >= 10 ? time.h : "0" + time.h}:</span> 
        )}
        <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
      </div>
    </React.Fragment>
  );
};
export default Stopwatch;
