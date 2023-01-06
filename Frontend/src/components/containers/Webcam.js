import { useEffect, useRef, useState } from 'react';

import Webcam from '../../sdk/webcam';
import WebcamViewTemplate from '../template/webcam/Webcam';
import FetchSdk from '../../sdk/fetchsdk';

function WebcamContainer({ payload }) {
  const [webcam, SetWebcam] = useState(null);
  const [isWebcamReady, SetIsWebcamReady] = useState(false);
  const [previewSnapShot, SetPreviewSnapShot] = useState(false);
  const [authValidating, SetAuthValidating] = useState(false);

  const videoRef = useRef();
  const canvasRef = useRef();
  const snapShotRef = useRef();

  const sdk = new FetchSdk();

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

    SetAuthValidating(true);
    payload.image = url.toString().split(';')[1].split(',')[1];
    sdk.post('login', payload);
    setTimeout(() => {
      SetAuthValidating(false);
    }, 5000);
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
      authValidating={authValidating}
    />
  );
}

export default WebcamContainer;
