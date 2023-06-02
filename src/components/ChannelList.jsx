import React, {/* useState, useEffect */} from 'react';
import Channel from './Channel';

const ChannelsList = ({ channels, onChannelClick }) => {
    return (
        <div className="row">
            <div className="col-md-2 list-group">
                <center><h2>Channels</h2></center>
                {channels.map((channel) => (
                    <Channel key={channel.id} channel={channel} onChannelClick={onChannelClick} />
                ))}
            </div>
        </div>
    );
  };
  

export default ChannelsList;
