import { combineReducers } from "redux";
import PagesNavReducer from "./Ducks/PagesNavigationReducer";
import CartReducer from "./Ducks/CartReducer"
import UserDataReducer from "./Ducks/UserDataReducer";

//========= The RootReducer combining all Reducers ========
const rootReducer = combineReducers({
    pagesNavigation: PagesNavReducer,
    cartData : CartReducer,
    userData : UserDataReducer,
});


export default rootReducer;