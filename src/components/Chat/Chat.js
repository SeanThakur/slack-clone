import React, {useEffect, useState} from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom'
import db from '../../firebase';
import Messages from '../Messages/Messages';
import ChatInput from '../ChatInput/ChatInput';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const Chat = () => {

    const {roomId}  = useParams()

    const [roomName, setRoomName] = useState(null);
    const [roomMessage, setRoomMessage] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snap => 
                setRoomName(snap.data()));
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => (
                setRoomMessage(snap.docs.map(doc => doc.data()))
            ));
        }
    }, [roomId])

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <div className="chat__header__channelName">
                        <strong>#{roomName?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </div>
                </div>
                <div className="chat__headerRight">
                    <p>
                        < InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat__message">
                {
                    roomMessage.map(({message, user, userImage, timestamp}) => (
                        <Messages 
                            message={message}
                            user={user}
                            userImage={userImage}
                            timestamp={timestamp}
                        />
                    ))
                }
            </div>
            <div className="chat__submit">
                <ChatInput channelName={roomName} channelId={roomId} />
            </div>
        </div>
    )
}

export default Chat
