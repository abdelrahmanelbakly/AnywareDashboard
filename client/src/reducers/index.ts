import { combineReducers } from "redux";
import announcements from './announcements';
import upcomming from "./upcomming";
import auth from './auth';
export default combineReducers({
    announcements,upcomming,auth
});