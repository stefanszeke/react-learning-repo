import { useState, useEffect } from "react";


export default function Clock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ui-clock">
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )

}