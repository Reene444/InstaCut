import React, { useState, useRef , useEffect} from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

const VideoEditor = () => {
  const [loaded, setLoaded] = useState(true);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);
  const messageRef = useRef(null);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      if (messageRef.current) {
        messageRef.current.innerHTML = message;
      }
      console.log(message);
    });
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    console.log("1this is loaded:",loaded);
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    console.log("2this is loaded:",loaded);
    setLoaded(true);
    console.log("3this is loaded:",loaded);
  };

  const transcode = async () => {
    const ffmpeg = ffmpegRef.current;
    console.log("this 0",fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
    console.log("this 01:",ffmpeg.writeFile('input.webm',  fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm')));

    await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
    console.log("this 1");
    await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
    console.log("this 2");
    const data = await ffmpeg.readFile('output.mp4');
    console.log("this 3");
    videoRef.current.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
    console.log("this 4");
  };
  useEffect(() => {
    const initialize = async () => {
      await load();
      // setLoaded(true);
    };
    initialize();
  }, []);
  return (
      loaded ? (
      <>
        <video ref={videoRef} controls width="500"></video><br/>
        <button onClick={transcode}>Transcode webm to mp4</button>
        <p ref={messageRef}></p>
        <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
      </>
    ) : (
      <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
    )
  )
};

export default VideoEditor;