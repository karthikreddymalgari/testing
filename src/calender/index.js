import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

 export const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const showNotification=()=>{
    const notification = new Notification("New Message",{
        body:"Hey"
    })
    return notification;
  }
  const onChange = date => {
    setDate(date);
    let Da = date.toLocaleDateString();
    console.log(Da);
    console.log(showNotification())
    if(true){
        showNotification();
    }

  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {/* {console.log(date)}
      {date.toString()} */}
    </div>
  );
};