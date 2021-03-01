import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import SlidebarOption from '../SlidebarOption/SlidebarOption'
import db from '../../firebase';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {

    const [channel, setChannel] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => (
            setChannel(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        )) 
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Sean Thakur
                    </h3>
                </div>
                <EditIcon />
            </div>
            <SlidebarOption Icon={InsertCommentIcon} Text="Threads" />
            <SlidebarOption Icon={InboxIcon} Text="Mentions & Reactions" />
            <SlidebarOption Icon={DraftsIcon} Text="Saved Items" />
            <SlidebarOption Icon={BookmarkBorderIcon} Text="Channel browser" />
            <SlidebarOption Icon={PeopleAltIcon} Text="People & users groups" />
            <SlidebarOption Icon={AppsIcon} Text="Apps" />
            <SlidebarOption Icon={FileCopyIcon} Text="File browers" />
            <SlidebarOption Icon={ExpandLessIcon} Text="Show Less" />
            <div className="sidebar__line"></div>
            <SlidebarOption Icon={ExpandMoreIcon} Text="Channels" />
            <div className="sidebar__line"></div>
            <SlidebarOption Icon={AddIcon} Text="Add Channel" addChanneloption />
            {
                channel.map(c => (
                    <SlidebarOption Text={c.name} id={c.id} key={c.id}/>
                ))
            }
        </div>
    )
}

export default Sidebar
