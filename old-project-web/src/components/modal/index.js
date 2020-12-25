import React from 'react'

import './style.css'

export default function Modal() {
	return (
		<div>
			<div className="modal">
				<div className="modal-main">
					<div className="modal-header">
						<h5>Sair da sessão?</h5>
					</div>
					<div className="modal-body">Deseja realmente sair da sessão!</div>
					<div className="modal-footer">
						<button className="button-cancelar" type="button">
							cancelar
						</button>
						<button className="button-salvar" type="button">
							salvar
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
