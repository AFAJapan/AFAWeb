import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'May': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '4-May-2024  ',event:  'Training', time: '17:00-19:00  ', location: 'Kasai Rugby Sports park' },
        { date: '11-May-2024  ',event: 'Training', time: '17:00-19:00  ', location: 'Komatsugawa Park A' },
        { date: '19-May-2024  ',event: 'Training',time: '10:00-12:00  ', location: 'Rinkai Futsal B' },
        { date: '25-May-2024  ',event: 'Croatia Cup',time: '09:00-16:00  ', location: 'Suzukicho Daichi Ground' },
        { date: '26-May-2024  ',event: 'Training',time: '16:00-18:00  ', location: 'Rinkai Futsal A' },
        { date: '26-May-2024  ',event: 'NOX CL U-15',time: '16:00-18:00  ', location: 'Rinkai Futsal B' },
      ],
      'Junior Kids J1 and J2(8 to 12 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '4-May-2024  ',event:  'Training',   time: '17:00-19:00  ', location: 'Kasai Rugby Sports park' },
        { date: '11-May-2024  ',event: 'Training',   time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '18-May-2024  ',event: 'Training',   time: '14:00-16:00  ', location: 'Rinkai Futsal A' },
        { date: '25-May-2024  ',event: 'Croatia Cup', time: '09:00-16:00  ', location: 'Suzukicho Daichi Ground' },
        { date: '25-May-2024  ',event: 'Training',   time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location' },
        { date: '4-May-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Kasai Rugby Sports Park - (Santanu)' },
        { date: '11-May-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer - (Yamazaki)' },
        { date: '25-May-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer - ( Santanu )' },
      ],
    },
    'June': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '2-June-2024  ',event:  'Training', time: '19:00-21:00  ', location: 'Ojima Komatsugawa Park A' },
        { date: '09-June-2024  ',event: 'Training', time: '17:00-19:00  ', location: 'Rinkai Futsal A' },
        { date: '16-June-2024  ',event: 'Training', time:  '17:00-19:00',  location: 'Rinkai Futsal A' },
        { date: '23-June-2024  ',event: 'Training', time:  '17:00-19:00  ', location: 'Rinkai Futsal B' },
        
      ],
      'Junior Kids J1 and J2(8 to 12 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location  ' },
        { date: '2-June-2024  ',event:  'Training',   time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A' },
        { date: '08-June-2024  ',event: 'Training',   time: '17:00-19:00  ', location: 'Kasai Rugby Sports' },
        { date: '22-June-2024  ',event: 'Training',   time: '11:00-13:00  ', location: 'Rinkai Futsal A' },
        { date: '30-June-2024  ',event: 'Training',   time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A' },
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', event: 'Event', time: 'Time  ', location: 'Location' },
        { date: '2-June-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A - (Daichi)' },
        { date: '08-June-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Kasai Rugby Sports Park- (Daichi)' },
        { date: '30-June-2024  ', event: 'Training',time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A - (Santanu )' },
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
      {['May','June'].map(month => renderMonthSection(month))}
    </div>
  );
}
