import React from 'react';
import '../../styles/FootballJapan.css';

export default function FootballJapan() {
    return (
        <div>
            <div style={{position:'relative'}}>
                <img className='football_banner' style={{ width: '100%' }} src='/assets/images/FootballJapan.svg' alt='aboutUs' />
                    <p className='football_title'>Football in Japan</p>
            </div>
                <div className='football_container'>
                    <p className='football_paragraph'>Football, also known as soccer, has gained significant popularity in Japan over the years. The sport was introduced to the country in the late 19th century by British teachers, and it has since grown into one of Japan's most popular and widely played sports. </p>
                    <p className='football_paragraph'>The professional football league in Japan is called the J.League, which was established in 1993. The J.League consists of three divisions: J1, J2, and J3.The league has seen a rise in competitiveness and attracts talented players from around the world. </p>
                    <p className='football_paragraph'>The Japanese national football team, known as the Samurai Blue, has made significant strides in international competitions. Youth development and grassroots football are highly emphasized in Japan. The country has a well-structured youth system, nurturing young talents from a young age. Many professional players in Japan's domestic league have emerged from this system and gone on to represent the national team .Overall, football holds a prominent place in Japanese sports culture, with a growing fan base, competitive leagues, and international recognition. The sport continues to evolve and play a significant role in shaping Japan's sporting landscape.</p>
                    <p className='football_paragraph'>AFA would like to contribute to the diversification of Japanese football with our strong intent of inclusiveness and uniting the world through the medium of football.</p>
                </div>
        </div>
    )
}
