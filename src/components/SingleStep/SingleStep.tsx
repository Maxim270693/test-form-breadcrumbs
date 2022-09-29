import React, {FC, ReactNode} from 'react';
import {StepType} from "../../types/types";
import {useAppSelector} from "../../bll/store/store";

type PropsType = {
    step: StepType
    children: ReactNode
}

const SingleStep: FC<PropsType> = ({step, children}) => {
    const currentStep = useAppSelector<StepType>(state => state.common.step);

    if (currentStep !== step)
        return null

    return <>{children}</>
};

export default SingleStep;