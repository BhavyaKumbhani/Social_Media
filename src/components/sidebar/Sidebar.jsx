import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {
    return (
        <div className='SideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarlist">
                    <li className="sidebaritem">
                        <RssFeedIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Feed</span>
                    </li>
                    <li className="sidebaritem">
                        <ChatIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Chat</span>
                    </li>
                    <li className="sidebaritem">
                        <GroupIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Group</span>
                    </li>
                    <li className="sidebaritem">
                        <SlowMotionVideoIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Video</span>
                    </li>
                    <li className="sidebaritem">
                        <QuestionMarkIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Question</span>
                    </li>
                    <li className="sidebaritem">
                        <BookmarkIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Bookmark</span>
                    </li>
                </ul>
                <button className='btn'>Show More</button><hr className='btnhr'/>
                <ul className='Friendlist'>
                    <li className='friendlistItem'>
                    <img src='/assets/Person/download (2).jpg' className='sideimg' />
                    <span className='imgText'>Arpan Jana</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
