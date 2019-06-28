import axios from "axios";
import { toast } from "react-toastify";
import serverAPI from "./serverAPI";
import {
  CREATE_GUIDE_SUCCESS,
  CREATE_GUIDE_FAILURE,
  FETCH_ALL_GUIDES_SUCCESS,
  FETCH_ALL_GUIDES_FAILURE,
  DELETE_GUIDE_SUCCESS,
  DELETE_GUIDE_FAILURE,
  UPDATE_GUIDE_SUCCESS,
  UPDATE_GUIDE_FAILURE
} from "./action";

export const createGuide = guideDetails => dispatch => {
  return axios
    .post(`${serverAPI}/guide`, guideDetails)
    .then(response => {
      if (response.status === 201) {
        console.log(response);
        response.message = "Guide successfully created";
        dispatch({ type: CREATE_GUIDE_SUCCESS, payload: response });
        toast.success("Guide successfully created!");
        return response;
      }
    })
    .catch(err => {
      console.log(err.response);
      err.response.message = "Guide creation failed";
      dispatch({ type: CREATE_GUIDE_FAILURE, payload: err.response });
      const error = toast.error(err.response.data.errors[0].error);
      throw err;
    });
};

export const fetchGuides = () => dispatch => {
  return axios
    .get(`${serverAPI}/guide`)
    .then(response => {
      console.log(response.data.data);
      dispatch({
        type: FETCH_ALL_GUIDES_SUCCESS,
        payload: response.data.data || []
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ALL_GUIDES_FAILURE, payload: err.response });
      console.log(err.response);
      throw err;
    });
};

export const deleteGuide = (guideId) => dispatch => {
    return axios.delete(`${serverAPI}/guide/${guideId}`)
      .then(res => {
          console.log(res.data.data.message);
          toast.success(res.data.data.message);
        dispatch({
          type: DELETE_GUIDE_SUCCESS,
          payload: {guideId, message: res.data.data.message}
        })
      })
      .catch(err => {
          toast.error(err.response.data.error)
        dispatch({ type: DELETE_GUIDE_FAILURE, payload: err.response.data.error })
        console.log(err.response.data);
        throw err;
      });
  }

  export const updateGuide = (guideId, guide) => dispatch => {
    return axios.patch(`${serverAPI}/guide/${guideId}`, guide)
      .then(res => {
          toast.success(res.data.message)
        dispatch({
          type: UPDATE_GUIDE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
          toast.error(err.response.data.error)
        dispatch({ type: UPDATE_GUIDE_FAILURE, payload: err.response.data })
        console.log(err.response.data);
        throw err;
      });
  }
