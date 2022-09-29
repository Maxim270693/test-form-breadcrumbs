import React, {ChangeEvent, FormEvent, useState} from 'react';
import './PersonalInfo.scss';
import '../SignUpInfo/SignUpInfo.scss';
import {useDispatch} from "react-redux";
import Error from "../Error/Error";
import {useAppSelector} from "../../bll/store/store";
import {stepAC} from "../../bll/actions/actions";

const PersonalInfo = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const isError = useAppSelector<string>(state => state.signUp.isError);


    const onFirstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value);
    }

    const onLastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (firstName.length > 2 || firstName.length < 30) {
            // dispatch(isErrorAC(true));
        }
        if (lastName.length > 2 || lastName.length < 30) {
            // dispatch(isErrorAC(true));
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1>PersonalInfo</h1>
            <form className="d-flex flex-column w-25" onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="First Name"
                       value={firstName}
                       onChange={onFirstNameHandler}
                       className="form-control mb-3 w-100"
                    // maxLength={schema.firsName.max}
                />
                <input type="text"
                       placeholder="Last Name"
                       value={lastName}
                       onChange={onLastNameHandler}
                       className="form-control mb-3 w-100"
                />

                <div className="input-group-btn mb-3" data-toggle="buttons">
                    <label className="btn btn-primary active me-2">
                        <input type="radio" name="sex" id="sexFemale" autoComplete="off"/>Female
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio" name="sex" id="sexMale" autoComplete="off"/>Male
                    </label>
                </div>

                <input type="date"
                       className="form-control mb-3 w-100"
                />

                <select className="form-select mb-3 w-100">
                    schema.ocean.map(
                    <option value="">Atlantic</option>
                    <option value="">Pacific</option>
                    <option value="">Indian</option>
                    <option value="">Arctic</option>
                </select>

                <div className="d-flex flex-wrap mb-3">
                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox" id="Sport" name="option1"
                               value="Sport"/>
                        <label className="form-check-label">Sport</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox" id="Beauty" name="option1"
                               value="Beauty"/>
                        <label className="form-check-label">Beauty</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox" id="IT" name="option1"
                               value="IT"/>
                        <label className="form-check-label">IT</label>
                    </div>

                    <div className="form-check me-2">
                        <input className="form-check-input" type="checkbox" id="Pets" name="option1"
                               value="Pets"/>
                        <label className="form-check-label">Pets</label>
                    </div>
                </div>

                {isError && <Error/>}

                <button className="btn btn-warning mb-2"
                        onClick={() => dispatch(stepAC('SignUpInfo'))}
                >change</button>
                <button className="btn btn-success">complete</button>
            </form>
        </div>
    );
};

export default PersonalInfo;