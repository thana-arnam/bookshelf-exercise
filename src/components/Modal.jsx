"use client";
import { createPortal } from "react-dom";

const Modal = ({ children, close, title }) => {
    if (document === undefined) return null;
    return createPortal(
        <div className="modal-overlay" onClick={close}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="left"></div>
                    <div className="right">
                        <button className="button-icon" onClick={close}>
                            &#10008;
                        </button>
                    </div>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
