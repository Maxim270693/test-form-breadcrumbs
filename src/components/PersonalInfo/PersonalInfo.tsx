import React, {ChangeEvent, FormEvent, useState} from 'react';
import './PersonalInfo.scss';
import '../SignUpInfo/SignUpInfo.scss';
import {useDispatch} from "react-redux";
import Error from "../Error/Error";
import {useAppSelector} from "../../bll/store/store";
import {isErrorAC, stepAC} from "../../bll/actions/actions";
import {JSONSchemeType} from "../../types/types";
import {JSONScheme} from "../../constants/JSONScheme";
import CheckBox from "../CheckBox/CheckBox";

const PersonalInfo = () => {
    const dispatch = useDispatch();

    const [personalInfoForm, setPersonalInfoForm] = useState({
        firstName: '',
        lastName: '',
        date: '',
        optionsOcean: 'Atlantic',
        sex: '',
        hobbyAnyOf: '',
    });

    const {firstName, lastName, date, optionsOcean, hobbyAnyOf} = personalInfoForm;

    const isError = useAppSelector<string>(state => state.signUp.isError);
    const form = useAppSelector<JSONSchemeType>(state => state.common.form);

    const {ocean, hobby} = form;
    const {oneOf} = ocean;
    const {anyOf} = hobby;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoForm(prev => ({
            ...prev, [event.target.name]: event.target.value
        }))
        dispatch(isErrorAC(''))
    };

    const showForm = () => {
        console.log('personalInfoForm', personalInfoForm)
    }

    const options = oneOf.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })


    let dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();

    const minYear = year - +JSONScheme.birthday.maxAge;
    const maxYear = year - +JSONScheme.birthday.minAge;

    const min = `${minYear}-${day}-${month}`;
    const max = `${maxYear}-${day}-${month}`;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        showForm();
        if (personalInfoForm.date > max) {
            dispatch(isErrorAC(`Age cannot be more than ${JSONScheme.birthday.minAge} years`))
        }
        if (personalInfoForm.date < min) {
            dispatch(isErrorAC(`Age cannot be less than ${JSONScheme.birthday.maxAge} years`))
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1>PersonalInfo</h1>
            <form className="d-flex flex-column w-25" onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="First Name"
                       name="firstName"
                       value={firstName}
                       onChange={onChangeHandler}
                       className="form-control mb-3 w-100"
                       required
                       minLength={JSON.parse(JSONScheme.firstName.minLength)}
                       maxLength={JSON.parse(JSONScheme.firstName.maxLength)}
                />
                <input type="text"
                       placeholder="Last Name"
                       name="lastName"
                       value={lastName}
                       onChange={onChangeHandler}
                       className="form-control mb-3 w-100"
                       required
                       minLength={JSON.parse(JSONScheme.firstName.minLength)}
                       maxLength={JSON.parse(JSONScheme.firstName.maxLength)}
                />

                <div className="input-group-btn mb-3" data-toggle="buttons">
                    <label className="btn btn-primary me-2">
                        <input type="radio"
                               name="sex"
                               value="female"
                               onChange={onChangeHandler}
                               id="sexFemale"
                               autoComplete="off"
                        />
                        Female
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio"
                               name="sex"
                               value="male"
                               onChange={onChangeHandler}
                               id="sexMale"
                               autoComplete="off"
                        />
                        Male
                    </label>
                </div>

                <input type="date"
                       name="date"
                       value={date}
                       onChange={onChangeHandler}
                       className="form-control mb-3 w-100"
                       required
                />

                <select className="form-select mb-3 w-100"
                        name="optionsOcean"
                        value={optionsOcean}
                    //@ts-ignore
                        onChange={onChangeHandler}>
                    {options}
                </select>

               <CheckBox setPersonalInfoForm={setPersonalInfoForm}
                         anyOf={anyOf}
                         hobbyAnyOf={hobbyAnyOf}
               />

                {isError && <Error>{isError}</Error>}

                <button className="btn btn-warning mb-2 mt-2"
                        onClick={() => dispatch(stepAC('SignUpInfo'))}
                >change
                </button>
                <button className="btn btn-success">complete</button>
            </form>
        </div>
    );
};

export default PersonalInfo;