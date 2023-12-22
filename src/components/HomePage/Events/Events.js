import React from 'react';
import '../../../styles/Events.css';
import { Grid } from '@mui/material';

export default function Events({isMobile}) {
  return (
    <div>
        <p className='events_title'>AFA 4th International Kids Futsal Cup 2023</p>
        <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Location</div>
                <div><a className='events_location_link' href='https://www.google.com/maps/place/%E6%B1%9F%E6%88%B8%E5%B7%9D%E5%8C%BA%E8%91%9B%E8%A5%BF%E3%83%A9%E3%82%B0%E3%83%93%E3%83%BC%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%83%91%E3%83%BC%E3%82%AF/@35.6530272,139.8632554,17z/data=!4m6!3m5!1s0x601887994283999d:0x4a3b89b5e0331a9!8m2!3d35.6534111!4d139.866027!16s%2Fg%2F11sqknk912?entry=tts&shorturl=1'>Kasai Rugby Sports Park </a></div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Date</div>
                <div className='events_Date_time'>2023 November 18</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Time</div>
                <div className='events_Date_time'>9:00 AM to 1:00 PM</div>
            </Grid>
        </Grid>
        <img style={{marginTop:'2rem',}} className='events_image' src='/assets/images/EventsImage.svg' alt='Events Image' />
    </div>
  )
}
