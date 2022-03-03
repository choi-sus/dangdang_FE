import React, {useState} from "react"

const Stopwatch2 = () => {
    
    const [curTime,setCurTime] = useState(0);
    const [curTimeStr,setCurTimeStr] = useState("00:00:00.000");
    const [isStarted,setIsStarted] = useState(false);
    const [recordsId,setRecordsId] = useState(0);
    const [records,setRecords] = useState([]);

    // this.toggleSwitch = this.toggleSwitch.bind(this);
    // this.recordsTime = this.recordsTime.bind(this);
    // this.resetTime = this.resetTime.bind(this);

    const toggleSwitch = () =>{
            if (!isStarted) {
                setIsStarted(true);
                startTick();
            } else {
                setIsStarted(false);
                endTick();
            }
          }

    const recordsTime = ()=> {
        let time = new Date(curTime).toISOString().substring(11, 8) + "." +(curTime % 1000);
        setRecords(records.concat({id: recordsId, time: time}))
        setRecordsId(recordsId + 1);
    }
    const resetTime = () => {
        setRecords([]);
        setCurTime(0);
        setCurTimeStr("00:00:00.000");
    }
    //Event
    const startTick = ()=> {
        setInterval(() => {
        setCurTime(Number(curTime+1));
        setCurTimeStr(new Date(curTime).toISOString().substring(11, 8) + "." + (curTime % 1000));
    }, 1);
  }
  const endTick = ()=> {
    clearInterval();
  }
  return (
          <div>
            <div>{curTimeStr}</div>
            <button onClick={toggleSwitch}>
              {isStarted ? "STOP" : "START"}
            </button>
            <button onClick={recordsTime}>RECORDS</button>
            <button onClick={resetTime}>RESET</button>
            <div>RECORDS HISTORY</div>
            <div>
              {records.map((e) => (
                <div key={e.id}>{e.time}</div>
              ))}
            </div>
          </div>
        );
}

export default Stopwatch2;
// class StopWatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       curTime: 0,
//       curTimeStr: "00:00:00.000",
//       isStarted: false,
//       recordsId: 0,
//       records: [],
//     };
//     this.toggleSwitch = this.toggleSwitch.bind(this);
//     this.recordsTime = this.recordsTime.bind(this);
//     this.resetTime = this.resetTime.bind(this);
//   }
//   toggleSwitch() {
//     if (!this.state.isStarted) {
//       this.setState({ isStarted: true }, () => {
//         this.startTick();
//       });
//     } else {
//       this.setState({ isStarted: false }, () => {
//         this.endTick();
//       });
//     }
//   }
//   recordsTime() {
//     let time =
//       new Date(this.state.curTime).toISOString().substr(11, 8) +
//       "." +
//       (this.state.curTime % 1000);
//     this.setState(
//       {
//         records: this.state.records.concat({
//           id: this.state.recordsId,
//           time: time,
//         }),
//       },
//       () => {
//         this.setState({ recordsId: this.state.recordsId + 1 });
//       }
//     );
//   }
//   resetTime() {
//     this.setState({ records: [], curTime: 0, curTimeStr: "00:00:00.000" });
//   }
//   //Event
//   startTick() {
//     this.tick = setInterval(() => {
//       this.setState(
//         {
//           curTime: this.state.curTime + 1,
//         },
//         () => {
//           this.setState({
//             curTimeStr:
//               new Date(this.state.curTime).toISOString().substr(11, 8) +
//               "." +
//               (this.state.curTime % 1000),
//           });
//         }
//       );
//     }, 1);
//   }
//   endTick() {
//     clearInterval(this.tick);
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.curTimeStr}</div>
//         <button onClick={this.toggleSwitch}>
//           {this.state.isStarted ? "STOP" : "START"}
//         </button>
//         <button onClick={this.recordsTime}>RECORDS</button>
//         <button onClick={this.resetTime}>RESET</button>
//         <div>RECORDS HISTORY</div>
//         <div>
//           {this.state.records.map((element) => (
//             <div key={element.id}>{element.time}</div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }