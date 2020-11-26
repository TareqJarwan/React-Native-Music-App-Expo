import axios from 'axios';

const instance = axios.create({
  headers: {
    'x-happi-key': '34c664GOfIm6sxwrnEriR1mgawbqUPTL5Oj03kIRE9GXHb4W1trECxfm',
  },
});

export default instance;
