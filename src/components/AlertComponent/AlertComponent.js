import React, { useEffect, useState } from "react";
import './AlertComponent.css';
function AlertComponent(props) {
    const [modalDisplay, toggleDisplay] = useState('none');
    const openModal = () => {
        toggleDisplay('block');
    }
    const closeModal = () => {
        toggleDisplay('none');
        props.hideError(null);
    }
    useEffect(() => {
        if (props.errorMessage !== null) {
            openModal()
        } else{
            closeModal()
        }
    });

    return(
        <div
            className={"alert alert-danger alert-dissmissable mt-4"}
            role="alert"
            id="alertPopUp"
            style={{display: modalDisplay}}
        >
            <div className="d-flex alert-message">
                <span>{props.errorMessage}</span>
                <button type="button" className="close" aria-label="close " onClick={() => closeModal()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default AlertComponent;