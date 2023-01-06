import WebcamView from '../../views/Webcam';

function WebcamViewTemplate({ config, takePhoto, preview, authValidating }) {
  return (
    <WebcamView
      config={config}
      takePhoto={takePhoto}
      authValidating={authValidating}
      preview={preview}
    ></WebcamView>
  );
}

export default WebcamViewTemplate;
