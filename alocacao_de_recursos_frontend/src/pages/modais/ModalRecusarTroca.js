import React from "react";
import "./style.css";

const ModalRecusarTroca = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content-confirma">
                <div className="modal-header">
                    <h4 className="modal-title">Confirmar troca</h4>
                </div>
                <div className="modal-body">
                    <div>Tem certeza que deseja recusar a troca de sala?</div>                                    
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button"> Cancelar </button>
                    <button onClick={props.onClose} className="button"> Recusar </button>
                </div>
            </div>
        </div>
    )
}

export default ModalRecusarTroca