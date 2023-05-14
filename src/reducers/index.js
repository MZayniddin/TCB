import { combineReducers } from "redux";

import centers from "./centers";
import user from "./user";

const combinedRedecers = combineReducers({ centers, user });

export default combinedRedecers;
