import React from 'react';
import '../../../styles/Banner.css';
import Carousel from 'react-material-ui-carousel';

export default function Banner() {
    var items = [
        {
            bannerImage: "/assets/images/AFABanner.svg",
        },
        {
            bannerImage: "/assets/images/AFABanner2.svg",
        },
        {
            bannerImage: "/assets/images/AFABanner3.svg",
        },
        {
            bannerImage: "/assets/images/AFABanner4.svg",
        },
        {
            bannerImage: "/assets/images/AFABanner5.svg",
        }
    ]
    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <div>
            <img className='banner_image' src={props.item.bannerImage} alt='bannner' />
            <p className='banner_text'>Welcome to Aalthara Football Association:
                Empowering Football  in Japan</p>
        </div>
    )
}
