import { combineReducers } from "redux";

import centers from "./centers";
import user from "./user";
import courses from "./courses"

const combinedRedecers = combineReducers({ centers, user, courses });

export default combinedRedecers;
