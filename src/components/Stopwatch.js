import React, {useState,useRef} from "react"

const Stopwatch = () => {
    //시간표시 부분
    const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(1);
    // Not started = 0
    // started = 1
    // stopped = 2
    
    let updatedMs=time.ms, updatedS=time.s, updatedM=time.m, updatedH=time.h;
    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH});
        
    }
    //버튼
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run,10));
    }
    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };
    
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    };

    const resume = () => start();

    const timeRef = useRef(null);
    const getTime = ()=> {
        alert(timeRef.current.innerText)  
      } 
      
    return (
        <React.Fragment>
            <div id='my_div' ref={timeRef}>
                {(time.h === 0)? "" : <span>{(time.h >=10)? time.h: "0" + time.h}:</span>}
                <span>{(time.m >=10)? time.m: "0" + time.m}</span>
                :<span>{(time.s >=10)? time.s: "0" + time.s}</span>
                {/* :<span>{(time.ms >=10)? time.ms: "0" + time.ms}</span> */}
            </div>
            <div>

            </div>
            {/* {(status === 0)?
                <button onClick={start}>산책시작</button> : ""
            } */}
            {(status === 1)?
                <div>
                    <button onClick={stop}>일시정지</button>
                    <button onClick={()=>{reset(); getTime();}}>산책종료(리셋)</button>
                </div> : ""
            }
            {(status === 2)?
                <div>
                    <button onClick={resume}>산책 이어서</button>
                    <button onClick={()=>{reset(); getTime();}}>산책종료(리셋)</button>
                </div> : ""
            }
        </React.Fragment>
    )
    
}
export default Stopwatch;