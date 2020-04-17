import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {Link} from 'react-router-dom';

import './Home.css';

let socket;

/*
TODO

Counter - Users
Counter - Rooms

brief des of application
also get icons for social media share

*/

const Home = () => {
    const [onlinecounter, setOnlineCounter] = useState([]);
    const { ENDPOINT } = require('../Config/config.js');
    socket = io(ENDPOINT);

    // Get the total count off online users
    useEffect(() => {
        socket.emit('onlineUsers');
        socket.on('connected_users', function (data){
        var onlinecounter=data.total;
        setOnlineCounter(onlinecounter);
        });
      }, [])

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                
                <h1 className="heading">Welcome to the conversation</h1>
                <p className="text" >Users Online: <a className="homeUserCount"> {onlinecounter}</a></p>
                <form className="formText">This is a work in progress</form>

                <Link to={`/Join`}>
                    <button className="button mt-20" type="submit">Room Setup</button>
                </Link>  

            </div>
        </div>
    )
}

export default Home;