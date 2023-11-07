import { fetchAnnouncements, addAnnouncements } from "../api";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { announcement } from "../types";

export const getAnnouncements = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const { data } = await fetchAnnouncements();
    dispatch({ type: 'FetchAllAnnouncements', payload: data});
  } catch (error) {
    console.error(error);
  }
};

export const addAnnouncement = (newAnnouncement:announcement) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await addAnnouncements(newAnnouncement);
    dispatch({ type: 'AddAnnouncements', payload: response.data});
  } catch (error) {
    console.error(error);
  }
};