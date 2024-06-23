// import "video-react/dist/video-react.css";
// import React, { useEffect } from 'react';
// import { Player } from 'video-react';
//
// <link rel="stylesheet" href="/css/video-react.css" />
//
//
// const VideoShow = () => {
//   return (
//     <Player
//       playsInline
//       poster="/assets/poster.png"
//       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//     />
//   );
// };
// export default VideoShow






import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { useEffect, useRef, useState } from 'react';
import workerUrl from "@ffmpeg/ffmpeg/dist/esm/worker.js?worker&url";
const VideoShow =()=> {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);
  const messageRef = useRef(null);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/'
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      messageRef.current.innerHTML = message;
      console.log(message);
    });
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
      ),
    });
    setLoaded(true);
  }

  const transcode = async () => {
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
    await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
    const data = await ffmpeg.readFile('output.mp4');
    videoRef.current.src =
      URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
  }
 useEffect(()=> {
     load();
     console.log("load:",loaded);

 },[])
  return (
    loaded
      ? (
        <>
          <video ref={videoRef} controls></video><br/>
          <button onClick={transcode}>Transcode webm to mp4</button>
          <p ref={messageRef}></p>
          <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
        </>
      )
      : (
        <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
      )
  );
}
export  default  VideoShow;