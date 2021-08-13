import BigPhoto from '../../attachments/img/big-photo.png'
import './big-photo-container.css'
import React from "react";

export const BigPhotoContainer = ({}) => {
    return (
        <div className={'big-photo-container'}>
            <div className="container">
                <img className="big-photo" src={BigPhoto} />
            </div>
        </div>
    )
}