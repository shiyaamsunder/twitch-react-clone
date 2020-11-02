import React from "react";
import "./Channel.css";
const Channel = (props) => {
  return (
    <div className="Channel">
      <div className="Channel__avatar">
        <img
          className="Channel__avatar-image"
          src={`https://avatars.dicebear.com/api/male/${props.seed}.svg`}
          alt="avatar"
        />
      </div>
      <div className="Channel__details">
        <div className="Channel__details-left">
          <h5>{props.title}</h5>
          <p>{props.game}</p>
        </div>
        <div className="Channel__details-right">
          <div className="Channel__live"></div>
          {props.views}
        </div>
      </div>
    </div>
  );
};

export default Channel;
