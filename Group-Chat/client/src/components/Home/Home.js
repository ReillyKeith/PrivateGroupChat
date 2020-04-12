import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

/*
TODO

Counter - Users
Counter - Rooms

brief des of application
also get icons for social media share

*/

const Home = () => {

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <h1 className="heading">Welcome to the conversation</h1>
                <p className="text" >Join a room and start talking...</p>
                <Link to={`/Join`}>
                    <button className="button mt-20" type="submit">Room Setup</button>
                </Link>  

                <a class="fa-facebook-square" href="https://www.facebook.com/sharer/sharer.php?u=http://www.1234.ie"/>
                <a class="tw tw-twitter-square" href="https://twitter.com/home?status=http://www.1234.ie "/>
                <a class="pn-pinterest-square" href="https://pinterest.com/pin/create/button/?url=http://www.1234.ie&media=&description="/>
                <a class="lk-linkedin-square" href="https://www.linkedin.com/shareArticle?mini=true&url=http://www.1234.ie&title=&summary=&source="/>
            </div>
        </div>
    )
}

export default Home;