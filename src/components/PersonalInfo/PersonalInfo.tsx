import React, {ChangeEvent, FormEvent, useState} from 'react';
import './PersonalInfo.scss';
import '../SignUpInfo/SignUpInfo.scss';
import {useDispatch} from "react-redux";
import Error from "../Error/Error";
import {useAppSelector} from "../../bll/store/store";
import {stepAC} from "../../bll/actions/actions";
import {JSONSchemeType} from "../../types/types";

const PersonalInfo = () => {
    const dispatch = useDispatch();

    const [personalInfoForm, setPersonalInfoForm] = useState({
        firstName: '',
        lastName: '',
        female: '',
        male: '',
        date: '',
        optionsOcean: '',
        hobby: ['Sport', 'Beauty', 'IT', 'Pets'],
    });

    const {firstName, lastName, female, male, date, optionsOcean} = personalInfoForm;

    const isError = useAppSelector<string>(state => state.signUp.isError);
    const form = useAppSelector<JSONSchemeType>(state => state.common.form);

    const {ocean} = form;
    const {oneOf} = ocean;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoForm(prev => ({
            ...prev, [event.target.name]: event.target.value
        }))
    };

    const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) => {

    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (firstName.length > 2 || firstName.length < 30) {
            // dispatch(isErrorAC(true));
        }
        if (lastName.length > 2 || lastName.length < 30) {
            // dispatch(isErrorAC(true));
        }
    }

    const options = oneOf.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

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
                    // maxLength={schema.firsName.max}
                />
                <input type="text"
                       placeholder="Last Name"
                       name="lastName"
                       value={lastName}
                       onChange={onChangeHandler}
                       className="form-control mb-3 w-100"
                />

                <div className="input-group-btn mb-3" data-toggle="buttons">
                    <label className="btn btn-primary me-2">
                        <input type="radio"
                               name="sex"
                            // value={female}
                            // onChange={onChangeHandler}
                               id="sexFemale"
                               autoComplete="off"
                        />
                        Female
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio"
                               name="sex"
                            // value={male}
                            // onChange={onChangeHandler}
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
                />

                <select className="form-select mb-3 w-100"
                        name="optionsOcean"
                        value={optionsOcean}
                    //@ts-ignore
                        onChange={onChangeHandler}>
                    {options}
                </select>

                <div className="d-flex flex-wrap mb-3">
                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox"
                               name="Sport"
                               value="Sport"/>
                        <label className="form-check-label">Sport</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox"
                               name="Beauty"
                               value="Beauty"/>
                        <label className="form-check-label">Beauty</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input"
                               type="checkbox"
                               name="hobby"
                               onChange={onChangeCheckboxHandler}
                               value="IT"/>
                        <label className="form-check-label">IT</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input"
                               type="checkbox"
                               name="Pets"
                               onChange={onChangeHandler}
                               value="Pets"/>
                        <label className="form-check-label">Pets</label>
                    </div>
                </div>

                {isError && <Error/>}

                <button className="btn btn-warning mb-2"
                        onClick={() => dispatch(stepAC('SignUpInfo'))}
                >change
                </button>
                <button className="btn btn-success"
                        onClick={() => {
                        }}
                >complete
                </button>
            </form>
        </div>
    );
};

export default PersonalInfo;