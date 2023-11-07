import React from "react";
import { useDispatch } from "react-redux";
import { addAnnouncement } from "../actions/announcements";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { addUpcomming } from "../api";
import { upcomming } from "../types";
import { addupcomming } from "../actions/upcomming";

const TestButton = () => {
  const newAnnouncement = {
    title: "New Announcement",
    message: "This is the message.",
    subject: "math",
    announcer: "John Doe",
    createdAt: new Date(),
  };
  const newUpcoming: upcomming = {
    Type: "quizz",
    Subject: "math",
    Topic: "integration",
    DueOn: new Date(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 365),
    createdAt: new Date()
};

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const handleClick = () => {
    dispatch(addupcomming(newUpcoming));
  };

  return <button onClick={handleClick}>Add Announcement</button>;
};

export default TestButton;