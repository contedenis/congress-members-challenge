import axios from 'axios';

const PRO_PUBLICA_API = {
  url: 'https://api.propublica.org',
};

const proPublicaApi = () => {
  const instance = axios.create({
    baseURL: PRO_PUBLICA_API.url,
    headers: {
      'X-API-Key': 'C4xdgQDrXUPEMBL1h4lnNp2sXjO7g8wiqTmSAeLa',
    },
  });
  return instance;
};

const proPublicaApiInstance = proPublicaApi();

export {
  proPublicaApiInstance,
};
