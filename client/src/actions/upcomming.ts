import { fetchUpcomming, addUpcomming } from "../api";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { upcomming } from "../types";


export const getUpcomming = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const { data } = await fetchUpcomming();
    dispatch({ type: 'FetchAllUpcomming', payload: data});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const addupcomming = (newUpcomming:upcomming) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await addUpcomming(newUpcomming);
    dispatch({ type: 'AddUpcomming', payload: response.data});
  } catch (error) {
    console.error(error);
  }
};