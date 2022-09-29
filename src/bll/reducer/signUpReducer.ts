import {InitialStateType, ActionsType, StepType, JSONSchemeType} from "../../types/types";
import {GET_FORM_DATA, IS_LOADING, IS_ERROR, STEP} from "../../constants/constants";

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