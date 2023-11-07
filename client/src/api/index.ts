import axios from "axios";
import { announcement, upcomming } from "../types";
const announcementurl = "http://localhost:4000/announcements"

export const fetchAnnouncements = () => axios.get(announcementurl);
export const addAnnouncements = (newAnnouncement:announcement)=>axios.post(announcementurl,newAnnouncement);

const upcommingurl = "http://localhost:4000/upcomming"

export const fetchUpcomming = () => axios.get(upcommingurl);
export const addUpcomming = (newUpcomming:upcomming)=>axios.post(upcommingurl,newUpcomming);