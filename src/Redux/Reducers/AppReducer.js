import {GET_JOB} from '../Actions/types';

const initialState = {
  jobs: null,
};

export const appReducer = (state = initialState,  action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        jobs: action.jobs,
      };

    default:
      return state;
  }
};
