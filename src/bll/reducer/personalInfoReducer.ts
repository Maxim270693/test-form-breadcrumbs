import {ActionsInfoType} from "../../types/types";
import {IS_SHOW_MODAL} from "../../constants/constants";

export const initialStatePersonalInfo = {
    isShowModal: false,
}

export const personalInfoReducer = (state = initialStatePersonalInfo, action: ActionsInfoType) => {
    switch (action.type) {
        case IS_SHOW_MODAL:
            return {...state, isShowModal: action.payload}
        default:
            return state;
    }
};