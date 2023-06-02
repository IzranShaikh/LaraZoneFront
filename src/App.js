import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Channel from './components/Channel';
import MessageArea from './components/MessageArea';
import Reg from './components/Reg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [selectedChannelId, setSelectedChannelId] = useState(null);
  const [channels, setChannels] = useState([]);

  const handleChannelClick = (channelId) => {
    setSelectedChannelId(channelId);
  };

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/channel');
        const jsonData = await response.json();
        setChannels(jsonData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/reg" element={<Reg />} />
          <Route path="/" element={
            <>
              <div className="row">
                <div className="col-md-2 list-group">
                  <center><h2>Channels</h2></center>
                  {channels.map((channel) => (
                    <Channel key={channel.id} channel={channel} onChannelClick={handleChannelClick} />
                  ))}
                </div>
                <div className="col-md-10">
                  <MessageArea selectedChannelId={selectedChannelId} />
                </div>
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );

};

export default App;
