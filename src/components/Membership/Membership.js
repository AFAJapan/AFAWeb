import React from 'react';
import '../../styles/Membership.css';
import { Grid } from '@mui/material';

export default function Membership() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:aaltharasuperleague@gmail.com';
      };

    return (
        <div>
            <div style={{position:'relative'}}>
                <img className='membership_banner' style={{ width: '100%' }} src='/assets/images/MembershipBanner.svg' alt='membership' />
                <p className='membership_title'>Membership</p>
            </div>
            <div className='membership_container'>
                <p className='membership_kid_title'>AFA Academy Membership for Kids</p>
                <p className='membership_kid_desc'>We are thrilled to invite you and your kid to join Aalthara football academy (AFA), where passionate athletes come together to nurture their skills and reach new heights in the game we all love. We guarantee your kid a comprehensive and professional training program designed to develop young talents and prepare them for a successful football career.</p>
                <p className='membership_kid_desc'>At AFA, we emphasize the importance of holistic development, focusing not only on technical skills but also on character building, teamwork, and discipline. Our team of home coaches, experienced coaches from collaborations and partnerships, and also trainers are committed to providing a nurturing and challenging environment that fosters growth and excellence</p>
                <p className='membership_benefits_title'>AFA Academy membership benefits</p>
                <p className='membership_benefits_subtitle'>High-quality training</p>
                <p className='membership_benefits_desc'>Our training sessions are meticulously planned, focusing on enhancing technical abilities, tactical understanding, physical fitness, and mental agility.</p>
                <p className='membership_benefits_subtitle'>State-of-the-art facilities</p>
                <p className='membership_benefits_desc'>We boast top-notch training facilities, including well-maintained pitches, advanced equipment, and a supportive infrastructure that allows athletes to excel.</p>
                <p className='membership_benefits_subtitle'>Competitive opportunities</p>
                <p className='membership_benefits_desc'>As a member, you'll have the chance to participate in local and regional tournaments, leagues, and friendly matches, giving you valuable exposure and the chance to showcase your skills.</p>
                <p className='membership_benefits_subtitle'>Individualized attention</p>
                <p className='membership_benefits_desc'>We believe in personalized attention, and our coaches will closely monitor your progress, providing feedback and guidance tailored to your specific needs and aspirations.</p>
                <p className='membership_benefits_subtitle'>Mentorship and guidance</p>
                <p className='membership_benefits_desc'>Our experienced coaching staff is dedicated to mentoring young athletes, guiding them through challenges, and instilling a strong work ethic and sportsmanship values.</p>
                <p className='membership_benefits_subtitle'>AFA membership</p>
                <p className='membership_benefits_desc'>Training sessions, Facilities, Coaching, Competitions, Nutrition guidance, Personal development assistance, Injury prevention program.</p>
                <p className='membership_adult_title'>AFA Memberships for Adults</p>
                {/* <div className='member_table_header'>Upcoming Calendar</div> */}
                {/* <Grid container className='member_table_row'>
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
                <Grid container className='member_table_row'>
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
                <Grid container className='member_table_row'>
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
                <Grid container className='member_table_row'>
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
                <p className='adult_member_title'>Adult Member</p>
                <ul className='adult_member_points'>
                    <li>Included sports insurance for one year(Optional)</li>
                    <li>Minimum 6 hours playing opportunity/month</li>
                    <li>Playing mode will be Football or futsal</li>
                    <li>Playing locations will be in Kanto Area</li>
                    <li>Members can join academy events/playing sessions too where adults are welcomed</li>
                    <li>Members can join any of the divisions of teams when going for external tournaments</li>
                    <li>Members will have a dedicated person to avail sports insurance</li>
                    <li>Members will be eligible to represent AFA in social events</li>
                    <li>Members can join adult coaching sessions by professional coaches</li>
                    <li>Members will be eligible to take responsibilities and positions for AFA</li>
                    <li>Members immediate family can play/participate in family football events</li>
                </ul>
                <p className='parent_member_title'>Parent Member (For parents of kids academy)</p>
                <ul className='parent_member_points'>
                    <li>Members can join any AFA Social events.</li>
                    <li>Members can join academy events/playing sessions too where adults are welcomed</li>
                    <li>Members will be eligible to represent AFA in social events.</li>
                    <li>Members will be eligible to take responsibilities and positions for AFA.</li>
                    <li>Parents of academy kids will be a default adults supporting member.</li>
                    <li>Sports insurance coverage.</li>
                </ul>
                <p className='support_member_title'>Supporting Member</p>
                <ul className='support_member_points'>
                    <li>Members can join any AFA Social events. </li>
                    <li>Members can join academy events/playing sessions too where adults are welcomed.</li>
                    <li>Members will be eligible to represent AFA in social events.</li>
                    <li>Members will be eligible to take responsibilities and positions for AFA.</li>
                    <li>Parents of academy kids will be a default adults supporting member.</li>
                </ul>
                <p className='registration_title'>Registration</p>
                <p className='registration_desc'>To accept this invitation and secure your membership, please complete the attached registration form for <a target='_blank' className='member_register_link' href='https://docs.google.com/document/d/12Nj1JcIN63h3II596_tI6JuZYiyEGtME/edit#heading=h.gjdgxs'>AFA Tokyo Academy</a> and <a target='_blank' className='member_register_link' href='https://docs.google.com/document/d/1Br-6eOpMzQpVYfFfW5QvfgzvJ2jBMBfm/edit#heading=h.gjdgxs'>AFA Yokohama Academy</a> and return it to us. We encourage you to respond promptly to guarantee your spot in the upcoming season.</p>
                <p className='registration_desc'>We look forward to welcoming you to Aalthara football academy and embarking on an exciting journey together.Should you have any questions or require further information, <span className='register_italic'>please don't hesitate to reach out to us at </span><a onClick={handleEmailClick} className='register_mail' target='_blank' href='#'>aaltharasuperleague@gmail.com</a></p>
            </div>
        </div>
    )
}
