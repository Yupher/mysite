import React from "react";

const Experties = () => {
  return (
    <div className='experties'>
      <h1 className='experties-title'>Experties</h1>
      <div className='experties-content'>
        <div className='experties-network'>
          <h3>Networks</h3>
          <ul>
            <li>LANs</li>
            <li>WAN</li>
            <li>CISCO Routers</li>
            <li>Pfsense</li>
            <li>Deloyemnt of web applications with Linux server</li>
            <li>Load balancing with nginx</li>
          </ul>
        </div>
        <div className='experties-dev'>
          <h3>Developement</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>React-Redux</li>
            <li>React Context API</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Web Sockets</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experties;
