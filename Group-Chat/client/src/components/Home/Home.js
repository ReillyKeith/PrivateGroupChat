import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

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
    const ENDPOINT = `http://127.0.0.1:5000`;
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