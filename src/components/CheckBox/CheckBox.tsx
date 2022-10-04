import React from 'react';

type CheckBoxType = {
    setPersonalInfoForm: (personalInfoForm: any) => void,
    anyOf: string[],
    hobbyAnyOf: string,
}

const CheckBox = ({setPersonalInfoForm, anyOf, hobbyAnyOf}: CheckBoxType) => {

    const setCheckedId = (name: string) => {
        setPersonalInfoForm((prev: any) => ({...prev, hobbyAnyOf: name}))
    };

    return (
        <div className="d-flex flex-wrap">

            {anyOf.map((item, index) => {
                const isCurrentChecked = item === hobbyAnyOf

                return <div className="form-check me-2" key={index}>
                    <input className="form-check-input"
                           id={item}
                           type="checkbox"
                           name={item}
                           value={item}
                           onClick={() => setCheckedId(item)}
                           onChange={() => {}}
                           checked={isCurrentChecked}
                    />
                    <label className="form-check-label">{item}</label>
                </div>
            })}
        </div>
    );
};

export default CheckBox;