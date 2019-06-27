import {
  CREATE_GUIDE_SUCCESS,
  CREATE_GUIDE_FAILURE,
  FETCH_ALL_GUIDES_SUCCESS,
  FETCH_ALL_GUIDES_FAILURE,
  DELETE_GUIDE_SUCCESS,
  DELETE_GUIDE_FAILURE
} from "../actions/action";

const initialState = {
  guide: {},
  guides: [],
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
        message: action.payload.message
      };
    case CREATE_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      };
    case FETCH_ALL_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload
      };
    case FETCH_ALL_GUIDES_FAILURE:
      return {
        ...state,
        error: action.payload.status
      };
    case DELETE_GUIDE_SUCCESS:
      return {
        ...state,
        guide: action.payload
      };
    case DELETE_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
