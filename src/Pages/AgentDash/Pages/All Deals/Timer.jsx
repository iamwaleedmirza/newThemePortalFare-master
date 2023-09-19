import React from "react";
function CountDown({ expiryTime }) {
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({});
  // console.log('time', time, 'expiryTime', expiryTime, 'over', over);
  const calculateTimeLeft = () => {
    const difference = new Date(expiryTime) - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setOver(true);
    }
    return timeLeft;
  };

  React.useEffect(() => {
    let timerID;
    if (!over) {
      timerID = setInterval(() => setTime(() => calculateTimeLeft()), 1000);
    }
    if (over) {
      setOver(true);
      clearInterval(timerID);
    }
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <div>
        {!over ? (
          Object.keys(time).length ? (
            <p
              className={`${
                time?.days === 0 &&
                time?.hours === 0 &&
                time.minutes === 0 &&
                time?.seconds <= 5
                  ? "text-danger"
                  : "text-success"
              } font-weight-bold  `}
            >{`${time?.days?.toString()?.padStart(2, "0")}:${time?.hours
              ?.toString()
              ?.padStart(2, "0")}:${time?.minutes
              ?.toString()
              ?.padStart(2, "0")}:${time?.seconds
              ?.toString()
              ?.padStart(2, "0")}`}</p>
          ) : (
            "__-__-__"
          )
        ) : (
          <span className="font-weight-bold text-danger"> Expired</span>
        )}
      </div>
    </div>
  );
}
export default CountDown;
