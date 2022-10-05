import {ActionsType, InitialStateType} from "../../types/types";
import {IS_LOADING} from "../../constants/constants";

export const initialState = {
    isLoading: false,
}

export const signUpReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
};