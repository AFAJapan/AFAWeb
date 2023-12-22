import React from 'react';
import '../../styles/AFAValues.css';

export default function AFAValues({isMobile}) {
    return (
        <div style={{textAlign:'center'}}>
            <div style={{position:'relative'}}>
            <img className='values_banner' style={{ width: '100%',filter: 'brightness(50%)'}} src='/assets/images/ValuesBanner.jpeg' alt='aboutUs' />
            <div className='values_absolute_container'>
                    <div>
                      <img style={{width:!isMobile ? '' : '100px'}} src='/assets/logo/AFALogoValues.svg' alt='aboutUs' />
                    </div>
                    {
                        !isMobile && <div style={{display:'inline-flex'}}>
                        <div>
                         <div style={{marginLeft:'12rem'}} className='value_letter'>C</div>
                         <div className='letter_desc'>COMPASSION</div>
                        </div>
                        <div>
                         <div className='value_letter'>O</div>
                         <div style={{marginRight:'10rem'}} className='letter_desc'>oPEN</div>
                        </div>
                        <div>
                         <div className='value_letter'>R</div>
                         <div style={{marginRight:'8rem'}} className='letter_desc'>rESPECT</div>
                        </div>
                       </div>
                    }
                   <p className='values_title'>AFA Values</p>
            </div>
            </div>
            <div>
                <div className='values_container'>
                   <div className='values_desc_sec'>
                    <p className='values_subtitle'>Compassion</p>
                    <p className='values_description'>In both football and life, compassion enhances relationships, promotes fairness, and encourages personal growth. We want to stick to the value of compassion which will provide an ideal ecosystem and team dynamics, great sportsmanship in all aspects of life and give opportunities for more engagement through mentorship. </p>
                    <p className='values_subtitle'>open</p>
                    <p className='values_description'>At AFA, we pride ourselves on our commitment to being open. We believe in creating an inclusive and welcoming environment for all aspiring footballers, regardless of their skill level, background, or experience. Our open approach ensures that every player has the opportunity to learn, grow, and reach their full potential. We embrace diversity and value the unique talents and perspectives that each individual brings to our academy. Join us and experience the power of openness as we shape not only exceptional footballers but also well-rounded individuals.</p>
                    <p className='values_subtitle'>Respect</p>
                    <p className='values_description'>Respect is the cornerstone of AFA, guiding everything we do. We instill in our players the importance of respecting themselves, their teammates, coaches, opponents, and the game itself. We believe that by fostering an environment of respect, we create a positive atmosphere where individuals can thrive both on and off the field. Respect cultivates sportsmanship, teamwork, and fair play, building character and integrity in our players. Join us to experience a football club where respect is not only taught but cherished as a core value.</p>
                   </div>
                </div>
            </div>
        </div>
    )
}
