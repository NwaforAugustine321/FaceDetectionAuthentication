import WebcamView from '../../views/Webcam';

function WebcamViewTemplate({ config, takePhoto, preview }) {
  return (
    <WebcamView
      config={config}
      takePhoto={takePhoto}
      preview={preview}
    ></WebcamView>
  );
}

export default WebcamViewTemplate;
