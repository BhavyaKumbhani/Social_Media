import React from "react";
import "./Right.css";

const Right = () => {
  return (
    <div className="RightBar">
      <div className="rightWrapper">
        <div className="Birthdaycontain">
          <img className="BirthImg" src="/assets/post/4.png" alt="" />
          <span className="BirthText">
            <b>Bhavya kumbhani</b> and <b>3 Other friends</b> have a birthday.
          </span>
        </div>
        <img
          className="celebrateImg"
          src="assets/post/celebration3.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlinefriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src="/assets/person/1.jpg" alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">Jhon Doe</div>
          </li>

          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src="/assets/person/1.jpg" alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">Jhon Doe</div>
          </li>

          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src="/assets/person/1.jpg" alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">Jhon Doe</div>
          </li>

          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src="/assets/person/1.jpg" alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">Jhon Doe</div>
          </li>

          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src="/assets/person/1.jpg" alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">Jhon Doe</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
