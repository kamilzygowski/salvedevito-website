import React from 'react'
import "./Dashboard.scss";
import image from "../../assets/x.png"
import Video from '../../components/Video/Video';
import NewsBar from '../../components/Newsbar/Newsbar';

const Dashboard = () => {
  return (
    <div className="Dashboard">
        
        <Video />
        <NewsBar />
        Dashboard
    </div>
  )
}

export default Dashboard