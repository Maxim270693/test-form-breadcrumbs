import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useAppSelector} from "../../bll/store/store";
import {useDispatch} from "react-redux";
import {PersonalInfoFormType} from "../../types/types";
import {isShowModalAC} from "../../bll/actions/actions";

type PersonalInfoFormPropsType = {
    personalInfoForm: PersonalInfoFormType
}

const ModalComponent = ({personalInfoForm}: PersonalInfoFormPropsType) => {
    const dispatch = useDispatch();

    const isShowModal = useAppSelector<boolean>(state => state.info.isShowModal);

    const {firstName, lastName, date, optionsOcean, sex, hobbyAnyOf} = personalInfoForm;

    const handleClose = () => dispatch(isShowModalAC(false));

    return (
        <Modal
            show={isShowModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Your Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>FirstName: {firstName}</div>
                <div>LastName: {lastName}</div>
                <div>Birthday: {date}</div>
                <div>Ocean: {optionsOcean}</div>
                <div>Gender: {sex}</div>
                <div>Hobby: {hobbyAnyOf}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                        onClick={handleClose}
                >
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;