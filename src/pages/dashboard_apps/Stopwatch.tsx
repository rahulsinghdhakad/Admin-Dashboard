import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const formatTime = (timesInSecond: number) => {
  const seconds = (timesInSecond % 60);
  const minutes = Math.floor(timesInSecond / 60);
  const hours = Math.floor(minutes / 60);

  const secondString = seconds.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const hoursString = hours.toString().padStart(2, "0");

  return `${hoursString}:${minutesString}:${secondString}`
}

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);


  useEffect(() => {
    let intervalID: number;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID)
    }
  }, [isRunning]);

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <p>{formatTime(time)}</p>
            <div>
              <button
                onClick={() => setIsRunning(prev => !prev)}
              >
                {
                  isRunning?
                  "pause":
                  "start"
                }
              </button>
              <button
                onClick={() => { setIsRunning(false); setTime(0)}}
              >
                reset
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Stopwatch