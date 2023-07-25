import React from "react";
import ReactDOM from "react-dom";

import classes from "../../styles/pop.module.css"
const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body bg-white text-white">fkfkkfskfdsklfkdsfkldsk{children}</div>
                </div>
            </div>
        </div>
    );
    return modalContent;
};

export default Modal