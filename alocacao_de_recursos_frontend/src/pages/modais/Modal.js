import React from "react";
import "./style.css";

const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Solicitar troca</h4>
                </div>
                <div className="modal-body">
                    <div className="div-salas">
                        <div>
                            <b>Espaço</b>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option1" checked={true} />
                                Laboratório
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option2" />
                                Living
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <b>Justificativa</b>
                        <textarea rows="5" cols="43" placeholder="Justifique a solicitação (opcional)" />
                    </div>

                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button"> Enviar </button>
                </div>
            </div>
        </div>
    )
}

export default Modal