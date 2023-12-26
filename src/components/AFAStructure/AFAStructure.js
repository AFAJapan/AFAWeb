import React from 'react';
import '../../styles/Structure.css';
import { Grid } from '@mui/material';

let boardMembers = [
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Ajay.svg',
    memberName: 'Ajay Peethambaran',
    memberDesignation:'President',
    memberCerified:'Coach, JFA D Licence'
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Vinay.svg',
    memberName: 'Vinay Elothunkal',
    memberDesignation:'Director Yokohama Academy',
    memberCerified:'JFA Certified Kids Leader'
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/binu.svg',
    memberName: 'Mr. Binu Thomas',
    memberDesignation:'Director Tokyo Academy',
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Subrata.svg',
    memberName: 'Mr. Subrata Bhattacharjee',
    memberDesignation:'Director Coaching and Quality',
    memberCerified:'Coach Level 2 English FA '
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Deepak.svg',
    memberName: 'Mr. Deepak Chandran',
    memberDesignation:'Director Adults Team'
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Jitendra.svg',
    memberName: 'Mr. Jitendra Kumar',
    memberDesignation:'Director Finance'
  },
  {
    memberImage:'/assets/images/boardMembers/BoardDirectors/Sankar.svg',
    memberName: 'Dr. Sankar Sasidharan',
    memberDesignation:'Board Member'
  },
]

const foundingMembers = [
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/RijuPillai.svg',
    memberName: 'Riju Pillai',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Noimage.svg',
    memberName: 'Cesil Berchmans',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Vysakh.svg',
    memberName: 'Vysakh Kakkayur',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Noimage.svg',
    memberName: 'Sankar Sasidharan',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Deepak.svg',
    memberName: 'Mr. Deepak Chandran',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Vinay.svg',
    memberName: 'Vinay Elothunkal',
  },
  {
    memberImage:'/assets/images/boardMembers/FoundingMember/Ajay.svg',
    memberName: 'Mr. Ajay Peethambaran',
  }
]

let TokyoAcademyMembers = [
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/LaneeshVP.jpg',
    memberName: 'Laneesh V P',
    memberDesignation:'Junior Team Mentor',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/SunilKoodali.jpg',
    memberName: 'Sunil Koodali',
    memberDesignation:'Finance and Senior Team mentor',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/Noimage.svg',
    memberName: 'Santanu Mahadani',
    memberDesignation:'Sub Junior Coach',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/Daiichi.svg',
    memberName: 'Daiichi Yamasaki',
    memberDesignation:'Sub Junior Coach',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/Noimage.svg',
    memberName: 'Gnanavel Ravindran',
    memberDesignation:'Tournament Coordinator',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/VijayJavagal.jpg',
    memberName: 'Vijay Javagal',
    memberDesignation:'Tournament Coordinator',
  },
  {
    memberImage:'/assets/images/boardMembers/TokyoAcademy/binu.svg',
    memberName: 'Binu Thomas',
    memberDesignation:'Director Tokyo Academy',
  },
]

let YokohamaAcademyMembers = [
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/PavanKumar.svg',
    memberName: 'Pavan Kumar',
    memberDesignation:'Finance',
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/JayantaSarkar.svg',
    memberName: 'Jayanta Sarkar',
    memberDesignation:'Finance',
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/SharathKrishna.svg',
    memberName: 'Sharath Krishna',
    memberDesignation:'Coach',
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/Arjun.svg',
    memberName: 'Arjun Sukumaran',
    memberDesignation:'Coach',
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/Vinay.svg',
    memberName: 'Vinay Elothunkal',
    memberDesignation:'Director Yokohama Academy',
    memberCerified:'JFA Certified Kids Leader'
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/GanamPraveen.svg',
    memberName: 'Ganam Praveen',
    memberDesignation:'In House Coaching & Transportation Coordination',
  },
  {
    memberImage:'/assets/images/boardMembers/YokohamaAcademy/Rengaraj.svg',
    memberName: 'Rengaraj',
    memberDesignation:'Transportation coordination',
  },
]

let AdultMembers = [
  {
    memberImage:'/assets/images/boardMembers/AdultMembers/SharathKrishna.svg',
    memberName: 'Sharath Krishna',
    memberDesignation:'Tournament Coordinator',
  },
  {
    memberImage:'/assets/images/boardMembers/AdultMembers/Subrata.svg',
    memberName: 'Subrata Bhattacharjee',
    memberDesignation:'Coach',
    memberCerified:'Coach, Level 2 English FA'
  },
  {
    memberImage:'/assets/images/boardMembers/AdultMembers/Sabarinath.svg',
    memberName: 'Sabarinath Vijayan',
    memberDesignation:'Sub Coach',
    memberCerified:'Coach, JFA D Licence'
  },
  {
    memberImage:'/assets/images/boardMembers/AdultMembers/SijoXaviar.svg',
    memberName: 'Sijo Xaviar',
    memberDesignation:'Finance',
  },
  {
    memberImage:'/assets/images/boardMembers/AdultMembers/Deepak.svg',
    memberName: 'Deepak Chandran',
    memberDesignation:'Director Adults Team',
  },
]

export default function AFAStructure() {
  return (
    <div>
      <div style={{position:'relative'}}>
      <img className='structure_banner' style={{width:'100%'}} src='/assets/images/Structure.svg' alt='structured' />
        <p className='structure_title'>AFA Structure and Organization Chart</p>
      </div>
      <div>
        <p className='board_title'>AFA Founding Members</p>
      </div>
      <Grid container spacing={2} sx={{padding:'2rem', justifyContent:'center'}}>
        {
          foundingMembers.map((member)=>(
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className='member_card'>
                <img style={{width:'100%'}} src={member.memberImage} alt={member.memberName} />
                <div className='member_details'>
                  <p className='founding_member_name'>{member.memberName}</p>    
                </div>
              </div>
            </Grid>
          ))
        }
      </Grid>
      <div>
        <p className='board_title'>AFA Board of Directors</p>
      </div>
      <Grid container spacing={2} sx={{padding:'2rem',justifyContent:'center'}}>
        {
          boardMembers.map((member)=>(
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className='member_card'>
                <img style={{width:'100%'}} src={member.memberImage} alt={member.memberName} />
                <div className='member_details'>
                  <div className='member_name'>{member.memberName}</div>
                  <div className={member.memberCerified?'member_designation':'member_designation_nocertified'}>{member.memberDesignation}</div>   
                  {member.memberCerified && <p className='member_certified'>{member.memberCerified}</p> }
                </div>
              </div>
            </Grid>
          ))
        }
      </Grid>
      <div>
        <p className='board_title'>AFA Tokyo Academy</p>
      </div>
      <Grid container spacing={2} sx={{padding:'2rem'}}>
        {
          TokyoAcademyMembers.map((member)=>(
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className='member_card'>
                <img style={{width:'100%', height:'284.2px'}} src={member.memberImage} alt={member.memberName} />
                <div className='member_details'>
                  <div className='member_name'>{member.memberName}</div>
                  <div className={member.memberCerified?'member_designation':'member_designation_nocertified'}>{member.memberDesignation}</div>   
                  {member.memberCerified && <p className='member_certified'>{member.memberCerified}</p> }
                </div>
              </div>
            </Grid>
          ))
        }
      </Grid>
      <div>
        <p className='board_title'>AFA Yokohama Academy</p>
      </div>
      <Grid container spacing={2} sx={{padding:'2rem'}}>
        {
          YokohamaAcademyMembers.map((member)=>(
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className='member_card'>
                <img style={{width:'100%'}} src={member.memberImage} alt={member.memberName} />
                <div className='member_details'>
                  <div className='member_name'>{member.memberName}</div>
                  <div className={member.memberCerified?'member_designation':'member_designation_nocertified'}>{member.memberDesignation}</div>   
                  {member.memberCerified && <p className='member_certified'>{member.memberCerified}</p> }
                </div>
              </div>
            </Grid>
          ))
        }
      </Grid>
      <div>
        <p className='board_title'>AFA Adults Team</p>
      </div>
      <Grid container spacing={2} sx={{padding:'2rem'}}>
        {
          AdultMembers.map((member)=>(
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className='member_card'>
                <img style={{width:'100%'}} src={member.memberImage} alt={member.memberName} />
                <div className='member_details'>
                  <div className='member_name'>{member.memberName}</div>
                  <div className={member.memberCerified?'member_designation':'member_designation_nocertified'}>{member.memberDesignation}</div>   
                  {member.memberCerified && <p className='member_certified'>{member.memberCerified}</p> }
                </div>
              </div>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}
