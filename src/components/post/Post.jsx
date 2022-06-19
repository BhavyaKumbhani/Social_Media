import React from "react";
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = ({post}) => {
  console.log("first",post)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="posttopLeft">
            <img
              className="posttopleftimg"
              src="/assets/post/download (4).jpg"
            />
            <span className="posttopleftname">Bhavya Kumbhani</span>
            <span className="posttopleftTime">5 minutes ago</span>
          </div>
          <div className="posttopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
            <div>
            <span className="postcenterText">Hey This is my First project..:)</span>
            </div>            
            <img className="postcenterImg" src="/assets/Person/modal2.jpg" />
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
              <div>
                <img className="likeIcon" src="/assets/post/download(8).jpg" alt="" />
                <img className="likeIcon" src="/assets/post/download(9).png" alt="" />
              </div>
            <span className="PostbottomCounter">32 People like it.</span>
            </div>
            <div className="postbottomright">
                <span className="postComment">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
