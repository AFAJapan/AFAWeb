import React from 'react';
import '../../styles/KidsAcademy.css'
import { Grid } from '@mui/material';

export default function AFAKidsAcademy() {
  return (
    <div>
      <div style={{position:'relative'}}>
        <img className='kidsacademy_banner' style={{ width: '100%' }} src='/assets/images/kidsAcademyBanner.svg' alt='kidsAcademy' />
        <p className='kidsacademy_title'>AFA Kids Academy</p>
      </div>
      <div className='kidsacademy_container'>
        <p className='kidsacademy_Desc'>We have two football schools in Tokyo and Yokohama respectively. Training is provided by qualified and skilled coaches over the weekends and public holidays.
          Feel free to come for a trial after contacting us.</p>
        <div>
        <p className='yokohama_title'>AFA Tokyo Academy</p>
          <div className='training_plan_title'>Training Plan</div>
          {/* <div className='training_hours'>Minimum 8 hours a month</div> */}
          {/* <div className='academy_table_header'>Upcoming Calendar</div> */}
          <div style={{maxWidth:"770px", margin:'0 auto'}}>
          <Grid container className='academy_table_header'>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              SCHEDULE
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} >
              LOCATIONS
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              COACHING STAFF
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
             Saturday / Sunday
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
            <div>
              <div>1.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/%E6%B1%9F%E6%88%B8%E5%B7%9D%E5%8C%BA%E8%91%9B%E8%A5%BF%E3%83%A9%E3%82%B0%E3%83%93%E3%83%BC%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%83%91%E3%83%BC%E3%82%AF/@35.6530272,139.8632554,17z/data=!4m6!3m5!1s0x601887994283999d:0x4a3b89b5e0331a9!8m2!3d35.6534111!4d139.866027!16s%2Fg%2F11sqknk912?entry=ttu'>Kasai Rugby sports park</a></div>
              <div>2.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/Edogawa+City+Waterside+Sports+Garden/@35.6927681,139.9076392,16z/data=!4m6!3m5!1s0x60188723243f9be7:0xc44c64859e14cee5!8m2!3d35.6927684!4d139.9141992!16s%2Fg%2F1thd1sn6?entry=tts&shorturl=1'>Mizube sports Garden</a></div>
              <div>3.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/Futsal+Court/@35.6488521,139.8524979,17z/data=!4m7!3m6!1s0x60187d5558f832d3:0x1ecea12f37cf8b97!8m2!3d35.6481641!4d139.8555365!15sCjRmdXRzYWwgY291cnQgMSBjaG9tZS0xIHJpbmthaS1jaG8gZWRvZ2F3YSBjaXR5IHRva3lvkgEMZnV0c2FsX2ZpZWxk4AEA!16s%2Fg%2F11f4m93t37?entry=tts&shorturl=1'>Rinkai Sports Park</a></div>
            </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
             Waseda united advanced coaching (Head coach: Higurashi
Coaches: Sasaki, Fujinuma, Suzuki)
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
            friendliness /tournaments
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
            Depends
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{paddingLeft:'1rem'}}>
            Depends
            </Grid>
          </Grid>
          </div>
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <Grid container className='academy_table_header'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              Category
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              Monthly training fee
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              Monthly Court fee
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
             duration per class
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
              classes / month
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Subjunior (Age 4-6) <br/> 
1 hour coaching per week
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2,000 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
              
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            1 Hour
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              3 classes
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Junior (Age 7-12) <br />
1 hour coaching per week
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            5,500 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            1,500 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            1 Hour
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              4 classes
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Junior (Age 7-12)<br/>
2 hours coaching per week
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            7,700 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            1,500 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2 Hours
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              4 classes
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Senior (Age 13-16)<br/> 2 hours coaching per week
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            7,700 Yen
            </Grid>
            <Grid item lg={2.5}  md={2.5} sm={2.5} xs={2.5}sx={{paddingLeft:'1rem'}}>
            1,500 Yen
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2 Hours
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              4 classes
            </Grid>
          </Grid>
          </div>
          {/* <Grid container className='academy_table_row'>
            <Grid item lg={4}>
              LOCATION
            </Grid>
            <Grid item lg={4}>
              DATE
            </Grid>
            <Grid item lg={4}>
              TIME
            </Grid>
          </Grid> */}
          {/* <Grid container className='academy_table_row'>
            <Grid item lg={4}>
              LOCATION
            </Grid>
            <Grid item lg={4}>
              DATE
            </Grid>
            <Grid item lg={4}>
              TIME
            </Grid>
          </Grid> */}
          {/* <Grid container className='academy_table_row'>
            <Grid item lg={4}>
              LOCATION
            </Grid>
            <Grid item lg={4}>
              DATE
            </Grid>
            <Grid item lg={4}>
              TIME
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={4}>
              LOCATION
            </Grid>
            <Grid item lg={4}>
              DATE
            </Grid>
            <Grid item lg={4}>
              TIME
            </Grid>
          </Grid> */}
          <div>
            <p className='batch_title'>Batches</p>
            <div className='batches'>
              <p>AFA Tokyo Senior Kids (13 to 16 Years)</p>
              <p>AFA Tokyo Junior Kids J1 (7 to 12 Years)</p>
              <p>AFA Tokyo Junior Kids J2 (7 to 12 Years)</p>
              <p>AFA Tokyo Sub Junior Kids (4 to 6 Years)</p>
            </div>
            <p className='batch_registration'>
            For registration, please complete the <a className='registartion_link' href='https://docs.google.com/document/d/12Nj1JcIN63h3II596_tI6JuZYiyEGtME/edit#heading=h.gjdgxs'>registration form </a>and return it to us.
            </p>
          </div>
          <p className='yokohama_title'>AFA Yokohama Academy</p>
          <div className='training_plan_title'>Training Plan</div>
          {/* <div className='training_hours'>Minimum 8 hours a month</div> */}
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <Grid container className='academy_table_header'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              SCHEDULE
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              Locations
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
              Coaching Staff
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}>
             duration per class
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
              class / month
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Saturday Morning
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            <div>
              <div>1.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/Tsuruma+Park+Sports+Area/@35.5085391,139.4676204,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f95222ad51f7:0x9cf83771cddb0a30!8m2!3d35.5085391!4d139.4676204!16s%2Fg%2F11fvb3lq0l?hl=en-JP&entry=ttu'>Grandberry park</a></div>
              <div>2.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/Tsuruma+Park+Sports+Area/@35.5085391,139.4676204,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f95222ad51f7:0x9cf83771cddb0a30!8m2!3d35.5085391!4d139.4676204!16s%2Fg%2F11fvb3lq0l?hl=en-JP&entry=ttu'>Shin-yokohama near 
 nissan stadium</a></div>
            </div>
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Waseda united advanced coaching (Head coach: Higurashi
Coaches: Nojima and Hayashi)
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2 Hours
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              3 classes
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Sunday Morning
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            <div>
              <div>1.&nbsp;<a className='locations_link' target='_blank' href='https://www.google.com/maps/place/Kayaba+Park/@35.5169589,139.5064156,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f8729f659f51:0x654d5df47a54a0bf!8m2!3d35.5169589!4d139.5064156!16s%2Fg%2F119w8tvmf?hl=en-JP&entry=ttuu'>Kayaba park, Kirigaoka, Tokaichiba</a></div>
            </div>
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            AFA team building coaching
            Coaches: 
            Arjun, Sharath and Vinay
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2 Hours
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              2 classes
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Matches / Tournaments
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Depends
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            Depends
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5} sx={{paddingLeft:'1rem'}}>
            2 Hours
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} sx={{paddingLeft:'1rem'}}>
              1 classes
            </Grid>
          </Grid>
          </div>
          <div style={{maxWidth:"1024px", margin:'0 auto'}}>
          <Grid container className='academy_table_header'>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            Category
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            Monthly training fee
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            Monthly Court fee
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
            Annual Fee (Yearly Once)
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            8 years and above
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            6,600 Yen
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            1,500 Yen
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            13,000 Yen
            </Grid>
          </Grid>
          <Grid container className='academy_table_row'>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            7 years and below
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            3,300 Yen
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            1,500 Yen
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{paddingLeft:'1rem'}}>
            13,000 Yen
            </Grid>
          </Grid>
          </div>

          <div>
            <p className='batch_title'>Batches</p>
            <div className='batches'>
              <p>AFA Yokohama Kids (8 to 13 Years)</p>
              <p>AFA Yokohama Junior Kids (4 to 7 Years)</p>
            </div>
            <p className='batch_registration'>
            For registration, please complete the <a className='registartion_link' href='https://docs.google.com/document/d/1Br-6eOpMzQpVYfFfW5QvfgzvJ2jBMBfm/edit#heading=h.gjdgxs'>registration form </a>and return it to us.
            </p>
          </div>
          <div id='teamsection'>
            <p className='teams_title'>Teams</p>
            <div className='teams'>
              <p>U12 : Under Development and in building stage</p>
              <p>U15 : Under Development and in building stage</p>
            </div>
            <p className='adult_teams_title'>AFA Adults</p>
            <div className='futsal_team'>
              <p>AFA football Team</p>
              <p>AFA Futsal Team 1</p>
              <p>AFA Futsal Team 2 </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
