import { combineReducers } from "redux";

import centers from "./centers";
import user from "./user";
import courses from "./courses";
import compares from "./compares";

const combinedRedecers = combineReducers({ centers, user, courses, compares });

export default combinedRedecers;
