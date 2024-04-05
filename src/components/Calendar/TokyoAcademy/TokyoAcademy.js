import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'March': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '6-Mar-2024  ',event:  'Training', time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '13-Mar-2024  ',event: 'Training ', time: '18:00-20:00  ', location: 'Rinkai Futsal B' },
        { date: '20-Mar-2024  ', event: 'Training  ',time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '27-Mar-2024  ', event: 'Training  ',time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '30-Mar-2024  ', event: 'Training',time: '11:00-13:00  ', location: 'Rinkai Futsal A' },
      ],
      'Junior Kids J1 and J2(8 to 12 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '3-Mar-2024  ',event: 'Training', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '09-Mar-2024  ',event: 'Training', time: '12:00-14:00  ', location: 'Mizue Multipurpose' },
        { date: '16-Mar-2024  ',event: 'Training', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '31-Mar-2024  ',event: 'Training', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location' },
        { date: '3-Mar-2024  ', event: 'Training',time: '17:00-19:00 ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '16-Mar-2024  ', event: 'Training',time: '17:00-19:00 ', location: 'Kasai Rugby' },
        { date: '31-Jan-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
      ],
    },
    'April': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '6-Apr-2024  ',event:  'Training', time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '13-Apr-2024  ',event: 'Training', time: '18:00-20:00  ', location: 'Rinkai Futsal B' },
        { date: '20-Apr-2024  ',event: 'Training  ',time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '27-Apr-2024  ',event: 'NOX CL U-15',time: '17:00-19:00  ', location: 'Kasai Rugby' },
        
      ],
      'Junior Kids J1 and J2(8 to 12 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '6-Apr-2024  ',event:  'Training',   time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '13-Apr-2024  ',event: 'Training',   time: '18:00-20:00  ', location: 'Rinkai Futsal B' },
        { date: '20-Apr-2024  ',event: 'Training',   time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '27-Apr-2024  ',event: 'NOX CL U-12',time: '17:00-19:00  ', location: 'Kasai Rugby' },
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location' },
        { date: '7-Apr-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Kasai Rugby Sports Park - (Yamazaki and Santanu)' },
        { date: '13-Apr-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer - (Yamazaki)' },
        { date: '27-Apr-2024  ', event: 'Training',time: '09:00-11:00  ', location: 'Kasai Rugby Sports Park - ( Yamazaki and Santanu )' },
      ],
    },
    
  };

  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Tokyo ${teamName}`}</strong></div>
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
      {['March','April'].map(month => renderMonthSection(month))}
    </div>
  );
}
