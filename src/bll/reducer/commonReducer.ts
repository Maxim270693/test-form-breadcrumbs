import {JSONSchemeType, StepType} from "../../types/types";
import {GET_FORM_DATA, IS_ERROR, STEP} from "../../constants/constants";

export const initialCommonReducerState = {
    form: {} as JSONSchemeType,
    step: 'SignUpInfo' as StepType,
    isError: '',
};

export const commonReducer = (state = initialCommonReducerState, action: any) => {
    switch (action.type) {
        case GET_FORM_DATA:
            return {...state, form: action.payload}
        case STEP:
            return {...state, step: action.payload}
        case IS_ERROR:
            return {...state, isError: action.payload};
        default:
            return state;
    }
}