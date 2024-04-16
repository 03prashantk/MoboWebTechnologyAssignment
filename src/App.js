import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Display from './component/Display/Display';

function App() {
  const [pageInfo, setPageInfo] = useState({});
  useEffect(() => {
    document.title = 'Facebook';
  }, []);

  const receivePageInfo = (pageInfo) => {
    setPageInfo(pageInfo);
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar sendPageInfo={receivePageInfo}/>

          <Display value={pageInfo} />
        </div>
      </div>
      <p> Some of the endpoints are not working because of the access token & restrictions. <br />
      Mobo Web Technology - Assignment</p>
    </>
  
  );
}

export default App;
