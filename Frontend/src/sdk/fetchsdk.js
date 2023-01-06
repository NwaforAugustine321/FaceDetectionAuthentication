import axios from 'axios';

function FetchSdk() {
  const baseUrl = 'http://localhost:4000/';
  let instance = axios.create({
    baseURL: baseUrl,
  });

  this.get = function (url) {};
  this.post = async function (url, payload) {
    console.log(payload);
    const { data } = await instance.post(url, payload);

    return data;
  };
}

export default FetchSdk;
