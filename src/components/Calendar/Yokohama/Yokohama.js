import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'March': {
      'Academy': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '2-Mar-2024  ',event:  'Training', time: '11:00-13:00 ', location: 'Grandberry' },
        { date: '16-Mar-2024  ',event: 'Training ', time: '11:00-13:00 ', location: 'Grandberry' },
        { date: '23-Mar-2024  ', event: 'Training  ',time: '11:00-13:00', location: 'Grandberry' },
        { date: '30-Mar-2024  ', event: 'Training  ',time: '11:00-13:00', location: 'Grandberry' },
      ],
    },
    'April': {
      'Academy': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '6-Apr-2024  ',event:  '(2 courts)/NOX League', time: '11:00-13:00 ', location: 'Grandberry' },
        { date: '13-Apr-2024  ',event: 'Training ', time: '09:00-11:00 ', location: 'Kayaba koen' },
        { date: '20-Apr-2024  ', event: 'Training  ',time: '08:30-10:30', location: 'ShinYokohama' },
        { date: '21-Apr-2024  ', event: 'Training  ',time: '11:00-13:00', location: 'Kayaba koen' },
        { date: '27-Apr-2024  ', event: 'Training  ',time: '14:30-17:00', location: 'Kayaba koen' },
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
      {['March', 'April'].map(month => renderMonthSection(month))}
    </div>
  );
}
