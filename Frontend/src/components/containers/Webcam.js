import { useEffect, useRef, useState } from 'react';

import Webcam from '../../webcam';
import WebcamViewTemplate from '../template/webcam/Webcam';

function WebcamContainer() {
  const [webcam, SetWebcam] = useState(null);
  const [isWebcamReady, SetIsWebcamReady] = useState(false);
  const [previewSnapShot, SetPreviewSnapShot] = useState(false);
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
    webcam
      .start()
      .then((result) => {
        SetIsWebcamReady(true);
        console.log(isWebcamReady);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePhoto = () => {
    const url = webcam.snap();
    SetPreviewSnapShot(url);
    //url.toString().split(';')
    console.log(canvasRef, 'k');
  };

  const configuration = {
    videoRef,
    canvasRef,
    snapShotRef,
    isWebcamReady,
  };

  useEffect(setUpConfiguration, [isWebcamReady]);

  return (
    <WebcamViewTemplate
      config={configuration}
      takePhoto={takePhoto}
      preview={previewSnapShot}
    />
  );
}

export default WebcamContainer;
