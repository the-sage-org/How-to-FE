import axios from "axios";
import { toast } from "react-toastify";
import serverAPI from "./serverAPI";
import { CREATE_GUIDE_SUCCESS, CREATE_GUIDE_FAILURE } from "./action";

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
      const error = 
      toast.error(err.response.data.errors[0].error);
      throw err;
    });
};
