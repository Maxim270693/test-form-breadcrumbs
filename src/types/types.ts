import {rootReducer} from "../bll/store/store";
import {initialState} from "../bll/reducer/signUpReducer";
import {getDataAC, isErrorAC, isLoadingAC, isShowModalAC, stepAC} from "../bll/actions/actions";

// type store
export type RootStateType = ReturnType<typeof rootReducer>;

// type initialState
export type InitialStateType = typeof initialState;

// type ActionsType
export type ActionsInfoType =
    IsShowModalActionType

export type ActionsType =
    IsErrorActionType
    | IsLoadingActionType
    | stepActionType
    | GetDataActionType

type GetDataActionType = ReturnType<typeof getDataAC>;
type IsLoadingActionType = ReturnType<typeof isLoadingAC>;
type IsErrorActionType = ReturnType<typeof isErrorAC>;
type stepActionType = ReturnType<typeof stepAC>;
type IsShowModalActionType = ReturnType<typeof isShowModalAC>

// type step
export type StepType = 'SignUpInfo' | 'PersonalInfo';

//type JSONScheme
type FirstNameType = {
    required: boolean,
    minLength: string,
    maxLength: string
}

type LastNameProps = {
    required: boolean,
    minLength: string,
    maxLength: string
}

type MobilePhoneType = {
    "required": boolean,
    "regExp": string,
}

type PasswordType = {
    required: boolean,
    minLength: string,
    maxLength: string,
}

type EmailType = {
    "required": boolean,
    "regExp": string
}

type BirthdayType = {
    required: boolean,
    minAge: string,
    maxAge: string,
}

type OceanType = {
    required: boolean,
    oneOf: string[],
}

type HobbyType = {
    required: boolean,
    anyOf: string[],
}

type SexType = {
    required: boolean
}

export type JSONSchemeType = {
    firstName: FirstNameType,
    lastName: LastNameProps,
    mobilePhone: MobilePhoneType,
    password: PasswordType,
    email: EmailType,
    birthday: BirthdayType,
    ocean: OceanType,
    hobby: HobbyType,
    sex: SexType,
}

// type personalInfoForm
export type PersonalInfoFormType = {
    firstName: string,
    lastName: string,
    date: string,
    optionsOcean: string,
    sex: string,
    hobbyAnyOf: string,
}

