import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    
    'May': {
      'Academy': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '4-May-2024  ',event:  'Training with ATHENA FC', time: '8:30-10:30 ', location: 'Shin-Yokohama Park Grassland Plaza' },
        { date: '11-May-2024  ',event: 'Training ', time: '9:00-11:00 ', location: 'Grandberry' },
        { date: '18-May-2024  ', event: 'Training  ',time: '17:00-19:00', location: 'Grandberry' },
        
      ],
    },
    'June': {
      'Academy': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '8-June-2024  ',event:  'Training', time: '17:00-19:00 ', location: 'Grandberry' },
        { date: '15-June-2024  ',event: 'Noax League only for U8', time: '08:00-11:00 ', location: ' ' },
        { date: '22-June-2024  ', event: 'Training  ',time: '08:30-10:30', location: 'ShinYokohama' },
        { date: '29-June-2024  ', event: 'Training  ',time: '09:00-11:00', location: 'Grandberry' },
       
      ],
    },
  };

  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Yokohama ${teamName}`}</strong></div>
      {teamSchedule.map((session, index) => (
        <div className='table_row' key={`${teamName}-${index}`} style={{ display: 'flex' }}>
          <div className='table_cell' style={{ flex: '1' }}>{session.date}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.event}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.time}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.location}</div>
        </div>
      ))}
    </>
  );

  const renderMonthSection = (month) => (
    <div className='month_section'>
      <div className='table_header'>{month} 2024</div>
      {Object.entries(schedules[month]).map(([teamName, teamSchedule]) => (
        <React.Fragment key={teamName}>
          {renderSchedule(teamName, teamSchedule)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className='table_container'>
      {['May', 'June'].map(month => renderMonthSection(month))}
    </div>
  );
}
