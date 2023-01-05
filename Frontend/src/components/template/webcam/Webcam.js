import WebcamView from '../../views/Webcam';

function WebcamViewTemplate({ config, onWebcamAuth }) {
  return <WebcamView config={config} onWebcamAuth={onWebcamAuth}></WebcamView>;
}

export default WebcamViewTemplate;
