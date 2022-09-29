import {applyMiddleware, combineReducers, createStore} from "redux";
import {signUpReducer} from "../reducer/signUpReducer";
import {useSelector} from "react-redux";
import {TypedUseSelectorHook} from "react-redux/es/types";
import {RootStateType} from "../../types/types";
import thunk from "redux-thunk";
import {commonReducer} from "../reducer/commonReducer";

export const rootReducer = combineReducers({
    signUp: signUpReducer,
    common: commonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;