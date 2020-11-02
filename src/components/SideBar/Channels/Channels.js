import React, { useEffect, useState } from "react";
import "./Channels.css";
import Channel from "./Channel/Channel";
import data from "./channelData";
const Channels = ({ type }) => {
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    if (type === "followed") {
      setChannel(data.followed);
    } else if (type === "online") {
      setChannel(data.online);
    } else {
      setChannel(data.recommended);
    }
  }, [type]);

  return (
    <div className="Channels">
      {channel.map((d) => (
        <Channel
          title={d.title}
          game={d.game}
          views={d.views}
          seed={d.seed}
          key={d.id}
        />
      ))}
    </div>
  );
};

export default Channels;
