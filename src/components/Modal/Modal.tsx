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
                <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span>FirstName: </span>
                    <span style={{color: 'brown'}}>{firstName}</span>
                </div>
                <div>
                    <span>LastName: </span>
                    <span style={{color: 'brown'}}>{lastName}</span>
                </div>
                <div>
                    <span>Ocean: </span>
                    <span style={{color: 'brown'}}>{optionsOcean}</span>
                </div>
                <div>
                    <span>Gender: </span>
                    <span style={{color: 'brown'}}>{sex}</span>
                </div>
                <div>
                    <span>Hobby: </span>
                    <span style={{color: 'brown'}}>{hobbyAnyOf}</span>
                </div>
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