import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Masher, MasherDefaultProps } from '@moviemasher/client-react';
import { TextContainerId } from '@moviemasher/moviemasher.js';
import '@moviemasher/theme-default/moviemasher.css';

const VideoEditor = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (rootRef.current) {
      // Create mash object containing text clip on a track
      const clip = {
        container: { string: 'Hello World!' },
        containerId: TextContainerId,
      };
      const mash = { tracks: [{ clips: [clip] }] };

      // Create props and render Masher
      const props = MasherDefaultProps({ edited: { mash } });
      const masher = React.createElement(Masher, props);

      createRoot(rootRef.current).render(masher);
    }
  }, []);

  return <div ref={rootRef} className="moviemasher" style={{ width: '100vw', height: '100vh', display: 'flex' }} />;
};

export default VideoEditor;