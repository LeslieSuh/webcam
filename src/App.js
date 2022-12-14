import React, { useRef, useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button>SNAP!</button>
      </div>
      <div className={"result" + (hasPhoto ? " hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button>CLOSE!</button>
      </div>
      <div className="diary">
        <DiaryEditor />
      </div>
    </div>
  );
}

export default App;
