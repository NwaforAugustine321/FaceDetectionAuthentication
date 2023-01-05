import { Container, Button } from 'react-bootstrap';

function WebcamView({ config, onWebcamAuth }) {
  return (
    <Container>
      <video
        ref={config.videoRef}
        id='webcam'
        autoPlay={true}
        playsInline={true}
        width='640'
        height='480'
      ></video>

      <canvas ref={config.canvasRef} id='canvas' className={'d-none'}></canvas>
      <img
        ref={config.snapShotRef}
        id='photo'
        alt='The screen capture will appear in this box.'
        style={{ width: 400, height: 300 }}
      />
      <div>
        <Button onClick={onWebcamAuth}>Login</Button>
      </div>
    </Container>
  );
}

export default WebcamView;
