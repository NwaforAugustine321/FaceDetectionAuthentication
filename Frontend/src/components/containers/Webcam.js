import { useEffect, useRef, useState } from 'react';

import Webcam from '../../webcam';
import WebcamViewTemplate from '../template/webcam/Webcam';

function WebcamContainer() {
  const [webcam, SetWebcam] = useState(null);
  const videoRef = useRef();
  const canvasRef = useRef();
  const snapShotRef = useRef();

  const setUpConfiguration = () => {
    const webcam = new Webcam({
      videoRef: videoRef.current,
      canvasRef: canvasRef.current,
      snapShotRef: snapShotRef.current,
      faceMode: 'user',
      sound: '',
    });

    SetWebcam(webcam);
  };

  const startWebcamAuth = () => {
    webcam
      .start()
      .then((result) => {
        console.log('webcam started');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const configuration = {
    videoRef,
    canvasRef,
    snapShotRef,
  };

  useEffect(setUpConfiguration, []);

  return (
    <WebcamViewTemplate config={configuration} onWebcamAuth={startWebcamAuth} />
  );
}

export default WebcamContainer;
