import React from 'react'
import './our-services.css'

import ImgTwo from '../../attachments/img/photo-two.png'
import ImgThree from '../../attachments/img/photo-three.png'
import ImgFour from '../../attachments/img/photo-four.png'
import {Card} from "./card/card";


export const OurServices = ({}) => {



    const cards = [
        {
            img: ImgTwo,
            subheading: 'Fabulous weddings.',
            content: 'A fairy tale wedding gets accomplished here. Best Marriage Hall in Dwarka.'
        },
        {
            img: ImgThree,
            subheading: 'Birthday parties.',
            content: 'An unforgettable birthday celebration in the best banquet hall in Dwarka.'
        },
        {
            img: ImgFour,
            subheading: 'Shagun ceremony.',
            content: 'Small functions hall in Dwarka – Gokul Garden'
        },
    ]


    return (
        <div className={'our-services'}>
            <div className="container">
                <div className="red-head">Our services</div>

                <div className="right">

                    {
                        cards.map(i => (<Card
                            img={i.img}
                            subheading={i.subheading}
                            content={i.content}
                        />))
                    }

                    <div className="circle-and-line">
                        <div className="vertical-line">
                        </div>

                        <div className="circle">view all</div>
                    </div>
                </div>
            </div>
        </div>
    )
}