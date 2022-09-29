import {Dispatch} from "redux";
import {getDataAC, isLoadingAC} from "../actions/actions";
import {API} from "../../api/API";

export const getSchema = () => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true));
        const JSONSchema = await API.getJSONSchema()
        dispatch(getDataAC(JSONSchema))
    } catch (e) {

    } finally {
        dispatch(isLoadingAC(false));
    }
}