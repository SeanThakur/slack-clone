import React from 'react'
import './SlidebarOption.css'
import {useHistory} from 'react-router-dom'
import db from '../../firebase';

const SlidebarOption = ({Icon, Text, id, addChanneloption}) => {

    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Add channel to your list');
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className="SlidebarOption" onClick={addChanneloption ? addChannel : selectChannel}>
            {Icon && <Icon className="slidebarOption__Icon" />}
            {
                Icon ? (
                    <h2>
                        {Text}
                    </h2>
                ) : (
                    <div className="slidebarOption__channels">
                        <span className="slidebarOption__hashTags">#</span>
                        <h2>{Text}</h2>
                    </div>
                )
            }
        </div>
    )
}

export default SlidebarOption
