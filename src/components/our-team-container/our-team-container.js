import './our-team-container.css'
import PhotoMen from '../../attachments/img/photo-men.png'
import PhotoMenTwo from '../../attachments/img/photo-men-two.png'
import PhotoMenThree from '../../attachments/img/photo-men-three.png'
import PhotoMenFour from '../../attachments/img/photo-men-four.png'
import React from "react";


export const OurTeamContainer = ({}) => {
    return (
        <div className={'our-team-container'}>
            <div className="our-team-text">
                <div className="container">
                    <div className="red-head">Our team</div>

                    <div className="right">
                        At Gokul Garden – Grand Banquet Hall, <br />
                        understand the importance of coordination <br />
                        between the team towards the success of any <br />
                        business. Our team is incredibly skilled trained <br />
                        from abroad, and worked all over the country.
                    </div>
                </div>
            </div>

            <div className="photos-humans">
                <div className="photo-and-description">
                    <img className="photo-human" src={PhotoMen} />

                    <div className="description">Name, Position</div>
                </div>

                <div className="photo-and-description">
                    <img className="photo-human" src={PhotoMenTwo} />

                    <div className="description">Name, Position</div>
                </div>

                <div className="photo-and-description">
                    <img className="photo-human" src={PhotoMenThree} />

                    <div className="description">Name, Position</div>

                    <div className="circle-and-line">
                        <div className="vertical-line">

                        </div>

                        <div className="circle">view all</div>
                    </div>
                </div>

                <div className="photo-and-description">
                    <img className="photo-human" src={PhotoMenFour} />

                    <div className="description">Name, Position</div>
                </div>
            </div>
        </div>
    )
}