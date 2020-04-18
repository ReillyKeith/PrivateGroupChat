import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {Link} from 'react-router-dom';

import './Home.css';

let socket;

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
                
                <h1 className="heading">Chat Now</h1>
                <p className="text" >Users Online: <a className="homeUserCount"> {onlinecounter}</a></p>
                <Link to={`/Join`}>
                    <button className="button mt-20" type="submit">Room Setup</button>
                </Link>  
                <Link to={`/Lobby`}>
                    <button className="button mt-20" type="submit">Main Lobby</button>
                </Link>  
            </div>
        </div>
    )
}

export default Home;