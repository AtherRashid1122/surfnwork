import axios from 'axios';
import {BASE_URL} from '../BaseUrl';
import {GET_JOB} from './types';

export const getjobs = (params) => {
  console.log(params);

  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${BASE_URL}Authentication/get_jobs`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
          },
        },
      );

      if (res.data.status) {
        dispatch({
          type: GET_JOB,
          jobs: res.data.data,
        });
      } else {
        dispatch({
          type: GET_JOB,
        });
      }

      // console.log('jobs', res);
    } catch (err) {
      dispatch(authfailed(err));
    }
  };
};
