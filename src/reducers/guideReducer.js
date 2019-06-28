import {
    CREATE_GUIDE_SUCCESS,
    CREATE_GUIDE_FAILURE
  } from "../actions/action";
  
  const initialState = {
    guide: {},
    isAuth: false,
    error: null,
    message: null,
    status: 400
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_GUIDE_SUCCESS:
        return {
          ...state,
          guide: action.payload,
          isAuth: true,
          message: action.payload.message
        };
      case CREATE_GUIDE_FAILURE:
        return {
          ...state,
          error: action.payload.status,
          message: action.payload.message
        }; 
      default:
        return state;
    }
  }
  