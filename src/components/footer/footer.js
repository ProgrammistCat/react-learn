import './footer.css'
import React from "react";

export const Footer = ({}) => {
    return (
        <div className={'footer'}>
            <div className="newsletter">
                <div className="text-and-text">
                    <div className="yellow-text">Newsletter:</div>

                    <div className="content">
                        <div className="e-mail-stick">
                            <div className="e-mail">Enter your e-mail address</div>

                            <div className="short-stick"></div>
                        </div>

                        <div className="long-stick"></div>
                    </div>
                </div>

                <div className="small-gray-text">© GokulGarden 2021</div>
            </div>

            <div className="contacts">
                <div className="text-and-text">
                    <div className="yellow-text">Contacts:</div>

                    <div className="contacts-our-sites-text">gokulgarden12@gmail.com <br />
                        <br /> Facebook <br /> <br /> Instagram</div>
                </div>

                <div className="small-gray-text">Terms of Use</div>
            </div>

            <div className="our-sites">
                <div className="text-and-text">
                    <div className="yellow-text">Our sites:</div>

                    <div className="contacts-our-sites-text">Govindam <br /> <br /> GokulFarms</div>
                </div>

                <div className="small-gray-text">Privacy Policy</div>
            </div>
        </div>
    )
}