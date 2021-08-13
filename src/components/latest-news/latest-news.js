import NewPhoto from '../../attachments/img/new-photo.png'
import NewPhotoTwo from '../../attachments/img/new-photo-two.png'
import NewPhotoThree from '../../attachments/img/new-photo-three.png'
import './latest-news.css'
import React from "react";

export const LatestNews = ({}) => {
    return (
        <div className={'latest-news'}>
            <div className="container">
                <div className="red-head">Latest news</div>

                <div className="stick-center">
                    <div className="stick"></div>
                </div>

                <div className="new">
                    <div className="new-head">Wedding planning services</div>

                    <div className="photo-and-new-content">
                        <div className="img-container">
                            <img className="new-photo" src={NewPhoto} />
                        </div>

                        <div className="new-content">
                            <div className="new-text">These day people attracted towards
                                the wedding idea that gives <br /> them best wedding experience.</div>

                            <div className="read-post">read post</div>
                        </div>
                    </div>
                </div>

                <div className="stick-center">
                    <div className="stick"></div>
                </div>

                <div className="new">
                    <div className="new-head">Indian Wedding Guides</div>

                    <div className="photo-and-new-content">
                        <div className="img-container">
                            <img className="new-photo" src={NewPhotoTwo} />
                        </div>

                        <div className="new-content">
                            <div className="new-text">Indian wedding is an open-source of happiness.
                                Weddings are <br /> known for their culture, tradition, style and magnificence.</div>

                            <div className="read-post">read post</div>
                        </div>
                    </div>
                </div>

                <div className="stick-center">
                    <div className="stick"></div>
                </div>

                <div className="new">
                    <div className="new-head">Indoor Marriage Hall in <br /> Dwarka – Gokul Garden</div>

                    <div className="photo-and-new-content">
                        <div className="img-container">
                            <img className="new-photo" src={NewPhotoThree} />
                        </div>

                        <div className="new-content">
                            <div className="new-text">As we know different type of people
                                have different needs and <br /> requirements. Based on that we provide the...</div>

                            <div className="read-post">read post</div>
                        </div>
                    </div>
                </div>

                <div className="stick-center">
                    <div className="stick"></div>
                </div>

                <div className="circle-and-line">
                    <div className="vertical-line">

                    </div>

                    <div className="circle">view all</div>
                </div>
            </div>
        </div>
    )
}