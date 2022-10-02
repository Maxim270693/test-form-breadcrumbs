import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import MaskedInput from 'react-text-mask';
import {useDispatch} from "react-redux";
import {isErrorAC, stepAC} from "../../bll/actions/actions";
import Error from "../Error/Error";
import {useAppSelector} from "../../bll/store/store";
import {getSchema} from "../../bll/thunks/thunks";
import {JSONSchemeType} from "../../types/types";

type SignUpInfoType = {
    phone: string,
    onChange: (event: any) => void
}

const SignUpInfo = ({onChange, phone}: SignUpInfoType) => {
    const dispatch = useDispatch();

    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const {email, password, repeatPassword} = signUpForm

    const isError = useAppSelector<string>(state => state.signUp.isError);
    const form = useAppSelector<JSONSchemeType>(state => state.common.form);

    const onChangeInputsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        return setSignUpForm(prev => ({...prev, [event.target.name]: event.target.value}))
    };

    console.log('signUpForm', signUpForm)

    const validateDate = (event: FormEvent<HTMLFormElement>) => {
        console.log(event)
        event.preventDefault();
        if (!phone) {
            return dispatch(isErrorAC(("Поле Mobile phone не может быть пустым")));
        } else if (!email) {
            return dispatch(isErrorAC(("Поле email не может быть пустым")));
        } /*else if (!/form.email.regExp/.test(email)) { // (!/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/.test(email))
            return dispatch(isErrorAC('Неправельный email адресс'))
        }*/ else if (!password) {
            return dispatch(isErrorAC(("Поле пароль не может быть пустым")));
        } else if (password.length < Number(form.password.minLength)) {
            dispatch(isErrorAC(`Пароль не может быть менее ${form.password.minLength} сисмволов`))
        } else if (password.length > Number(form.password.maxLength)) {
            return dispatch(isErrorAC(`Пароль не может быть более ${form.password.maxLength} сисмволов`))
        } else if (repeatPassword !== password) {
            return dispatch(isErrorAC("Неправельный пароль"))
        } else if (!isError) {
            dispatch(stepAC('PersonalInfo'));
        }
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(getSchema())
    }, [form]);

    return (
        <div className="d-flex flex-column align-items-center">
            <h1>SignUp</h1>

            <form className="d-flex flex-column w-25" onSubmit={validateDate}>
                <MaskedInput
                    mask={['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    name="phone"
                    onChange={onChange}
                    value={phone}
                    placeholder="Mobile phone"
                    className="form-control mb-3 w-100"
                />
                <input type="email"
                       name="email"
                       placeholder="Email"
                       value={email}
                       onChange={onChangeInputsHandler}
                       className="form-control mb-3 w-100"
                />
                <input type="password"
                       name="password"
                       placeholder="Password"
                       value={password}
                       onChange={onChangeInputsHandler}
                       className="form-control mb-3 w-100"
                />
                <input type="password"
                       name="repeatPassword"
                       placeholder="Repeat Password"
                       value={repeatPassword}
                       onChange={onChangeInputsHandler}
                       className="form-control mb-2 w-100"
                />

                {isError && <Error>{isError}</Error>}

                <button className="btn btn-outline-primary text-uppercase mt-1"
                >
                    next
                </button>
            </form>
        </div>
    );
};

export default SignUpInfo;