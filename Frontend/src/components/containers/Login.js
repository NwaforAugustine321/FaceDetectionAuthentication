import { useState } from 'react';

import LoginTemplate from '../template/login/Login';

function LoginContainer({ WebcamContainer }) {
  const [status, SetStatus] = useState('EMAIL_STATUS');
  const [payload, SetPayload] = useState({
    email: '',
    image: '',
  });

  const handSubmit = () => {
    if (payload.email) {
      SetStatus('PHOTO_SNAPSHOT');
    }
  };

  const handChange = (e) => {
    SetPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  return status == 'PHOTO_SNAPSHOT' ? (
    <WebcamContainer payload={payload} />
  ) : (
    <LoginTemplate handSubmit={handSubmit} handChange={handChange} />
  );
}

export default LoginContainer;
