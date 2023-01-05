import { Container, Button, Row, Col, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function WebcamView({ config, takePhoto, preview }) {
  return (
    <Container fluid='sm' className='my-auto vh-100'>
      <Row className='h-100 align-items-center'>
        <Col>
          <Stack
            gap={2}
            className='col-md-6 mx-auto p-3'
            style={{ borderStyle: 'dotted' }}
          >
            <Row>
              <Col sm={12} lg={12}>
                <Row>
                  <Col lg={8}>
                    <video
                      className='w-100 rounded'
                      ref={config.videoRef}
                      id='webcam'
                      autoPlay={true}
                      playsInline={true}
                    ></video>
                    {config.videoRef.current == undefined && (
                      <div
                        className='w-100 h-100 rounded'
                        style={{ borderStyle: 'dotted', minHeight: '200px' }}
                      ></div>
                    )}
                  </Col>
                  <Col lg={4}>
                    {preview ? (
                      <Image
                        src={preview}
                        className='w-100 h-20 rounded'
                        ref={config.snapShotRef}
                        id='photo'
                        alt='The screen capture will appear in this box.'
                      />
                    ) : (
                      <div
                        className='w-100 h-100 rounded'
                        style={{ borderStyle: 'dotted', minHeight: '200px' }}
                      ></div>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col sm={12} lg={12}>
                <canvas
                  ref={config.canvasRef}
                  id='canvas'
                  className={'d-none'}
                  style={{
                    border: '1px solid blue',
                  }}
                ></canvas>
              </Col>
            </Row>

            <Row>
              <Col lg={2}>
                <Button variant='secondary'>Login</Button>
              </Col>
              <Col lg={10}>
                <Button variant='secondary' onClick={takePhoto}>
                  Take Photo
                </Button>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default WebcamView;
