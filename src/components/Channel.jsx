import React, {/* useState, useEffect */} from 'react';
// import { Link } from 'react-router-dom';

const Channel = ({ channel, onChannelClick }) => {

  const handleChannelClick = () => {
    onChannelClick(channel.id);
  };

  return (
    <div>
      <li className="list-group-item list-group-item-action list-group-item-dark" onClick={handleChannelClick}>#{channel.name}</li>
    </div>
  );
};

export default Channel;
