import React from 'react';
import Header from './albums/header.jsx';
import PhotoGrid from './albums/photoGrid.jsx';
import VideoEditor from './VideoEditor.jsx';


const Albums = () => {

  return (
    <div>
      <Header/>
      <div style={{ marginTop: '20px', padding: '20px' }}>

       <PhotoGrid />
        <VideoEditor />
      </div>
    </div>
  );
};

export default Albums;
