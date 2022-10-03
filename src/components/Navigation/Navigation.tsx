import React from "react";
import {useAppSelector} from "../../bll/store/store";
import {StepType} from "../../types/types";
import {useDispatch} from "react-redux";
import {stepAC} from "../../bll/actions/actions";

const Navigation = () => {
    const dispatch = useDispatch();

    const currentStep = useAppSelector<StepType>(state => state.common.step);

    return <nav>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="" onClick={(event) => {
                event.preventDefault()
                dispatch(stepAC('SignUpInfo'));

            }}>SignUpInfo</a></li>
            {currentStep === "PersonalInfo" &&
            <li className="breadcrumb-item active" aria-current="page">Personal Info</li>}
        </ol>
    </nav>;
};

export default React.memo(Navigation);