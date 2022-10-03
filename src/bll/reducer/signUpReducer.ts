import {ActionsType, InitialStateType} from "../../types/types";
import {IS_ERROR, IS_LOADING} from "../../constants/constants";

export const initialState = {
    isLoading: false,
    isError: '',

}

export const signUpReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case IS_ERROR:
            return {...state, isError: action.payload};
        default:
            return state;
    }
};