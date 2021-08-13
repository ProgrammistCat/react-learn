import React from 'react'
import './card.css'



export const Card = ({subheading, content, img}) => {
    return (
        <div className="card">
            <div className="photo-and-text">
                <div className="col">
                    <div className="photo">
                        <img className="png-two" src={img} />
                    </div>
                </div>

                <div className="col-content">
                    <div>
                        <div className="subheading">
                            {subheading}
                        </div>

                        <div className="content">
                            {content}
                        </div>
                    </div>

                    <div className="text">learn more</div>
                </div>
            </div>

            <div className="stick"></div>
        </div>
    )
}