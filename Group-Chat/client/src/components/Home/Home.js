import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = () => {

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <h1 className="heading">Welcome to the conversation</h1>
                <p className="text" >Join a room and start talking...</p>
                <Link to={`/Join`}>
                    <button className="button mt-20" type="submit">Room Setup</button>
                </Link>    
            </div>
        </div>
    )
}

export default Home;