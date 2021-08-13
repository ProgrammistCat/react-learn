import React from "react";
import {Header} from "./components/header/header";
import {OurServices} from "./components/our-services/our-services";
import {GokulGarden} from "./components/gokul-garden/gokul-garden";
import {BigPhotoContainer} from "./components/big-photo-container/big-photo-container";
import {OurTeamContainer} from "./components/our-team-container/our-team-container";
import {BigGrayText} from "./components/big-gray-text/big-gray-text";
import {LatestNews} from "./components/latest-news/latest-news";
import {Footer} from "./components/footer/footer";


export const App = () => {

    return (
        <div>
            <Header />
            <OurServices />
            <GokulGarden />
            <BigPhotoContainer />
            <OurTeamContainer />
            <BigGrayText />
            <LatestNews />
            <Footer />
        </div>
    )
}
