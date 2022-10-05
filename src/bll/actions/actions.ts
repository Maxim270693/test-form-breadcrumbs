import {GET_FORM_DATA, IS_ERROR, IS_LOADING, IS_SHOW_MODAL, STEP} from "../../constants/constants";
import {StepType} from "../../types/types";


export const getDataAC = (payload: any) => ({type: GET_FORM_DATA, payload} as const)
export const isLoadingAC = (payload: boolean) => ({type: IS_LOADING, payload} as const)
export const isErrorAC = (payload: string) => ({type: IS_ERROR, payload} as const)
export const stepAC = (payload: StepType) => ({type: STEP, payload} as const)
export const isShowModalAC = (payload: boolean) => ({type: IS_SHOW_MODAL, payload})