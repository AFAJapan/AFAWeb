import { Button } from '@mui/material'
import React, {useState} from 'react'
import TokyoAcademy from './TokyoAcademy/TokyoAcademy';
import Yokohama from './Yokohama/Yokohama';
import Adult from './Adult/Adult';
import '../../styles/Calendar.css';

export default function Calendar() {
    const [showTokyoCalendar, setShowTokyoCalendar] = useState(true);
    const [showYokohamaCalendar, setShowYokohamaCalendar] = useState(false);
    const [showAdultCalendar, setShowAdultCalendar] = useState(false);

    const handleTokyo = () =>{
        setShowTokyoCalendar(true);
        setShowYokohamaCalendar(false);
        setShowAdultCalendar(false);
    }

    const handleYokohama = () =>{
        setShowTokyoCalendar(false);
        setShowYokohamaCalendar(true);
        setShowAdultCalendar(false);
    }

    const handleAdult = () =>{
        setShowTokyoCalendar(false);
        setShowYokohamaCalendar(false);
        setShowAdultCalendar(true);
    }

  return (
    <div>
        <div className='calendar_button_container'>
            <button className={showTokyoCalendar ? 'calendar_focused_button':'calendar_button'} onClick={()=>handleTokyo()}>AFA Tokyo Academy</button>
            <button className={showYokohamaCalendar ? 'calendar_focused_button':'calendar_button'} onClick={()=>handleYokohama()}>AFA Yokohama ACADEMY</button>
            <button className={showAdultCalendar ? 'calendar_focused_button':'calendar_button'} onClick={()=>handleAdult()} >AFA Adult </button>
        </div>
        <div>
            {showTokyoCalendar && <TokyoAcademy />}
            {showYokohamaCalendar && <Yokohama />}
            {showAdultCalendar && <Adult />}
        </div>
    </div>
  )
}
