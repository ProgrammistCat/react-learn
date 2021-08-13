import React from 'react'
import './header.css'

import Img from '../../attachments/img/icon.png'
import ImgLine from '../../attachments/img/line.png'



export const Header = ({}) => {
    return (
        <div className="header">
            <div className="nav">
                <div className="nav-container">
                    <div className="text">
                        <a className="nav-item">What we do</a>
                    </div>

                    <div className="text">
                        <a className="nav-item">About us</a>
                    </div>

                    <div className="text">
                        <a className="nav-item">Our team</a>
                    </div>

                    <div className="picture">
                        <a href="">
                            <img className="icon" src={Img} />
                        </a>
                    </div>

                    <div className="text">
                        <a className="nav-item">Gallery</a>
                    </div>

                    <div className="text">
                        <a className="nav-item">Contact</a>
                    </div>

                    <div className="lines">
                        <img className="line" src={ImgLine} />
                        <img className="line" src={ImgLine} />
                        <img className="line" src={ImgLine} />
                    </div>
                </div>
            </div>

            <div className="head-subhead">
                <div className="head">
                    Come as You are. We'll take <br />
                    care of the rest.
                </div>

                <div className="subhead">
                    We host every kind of function
                </div>
            </div>
        </div>
    )
}