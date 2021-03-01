import React ,{useState} from 'react'
import './ChatInput.css'
import db from '../../firebase'
import firebase from 'firebase'

const ChatInput = ({channelName, channelId}) => {

    const [message, setMessage] = useState('');

    const messageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(channelId) {
            db.collection("rooms").doc(channelId).collection("messages").add({
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: 'vikas',
                userImage: 'https://png.pngtree.com/element_our/sm/20180301/sm_5a9797d5c93d3.jpg',
            });
            setMessage('');
        }
    }

    return (
        <div className="ChatInput">
            <form onSubmit={submitHandler}>
                <input 
                    placeholder={`Message in #${channelName?.name}`}
                    value={message}
                    onChange={messageChangeHandler}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatInput
