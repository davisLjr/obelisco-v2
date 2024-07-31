import "./modal_container.scss";

const ModalContainer: React.FC = () => {
  return (
    <>
      <div className="storybook__container-btn">
        <button
          type="button"
          className="btn btn-primary"
          // Cambiado 'data-toggle' por 'data-bs-toggle'
          data-bs-toggle="modal"
          // Cambiado 'data-target' por 'data-bs-target'
          data-bs-target="#exampleModal1"
        >
          Modal de confirmación
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Modal de peligro
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
        >
          Modal de reconocimiento
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal1"
        // Cambiado 'tabIndex' de -1 a '-1'
        tabIndex={-1}
        // Se añadió 'aria-labelledby' y 'aria-hidden'
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel1">
                ¡Importante!
              </h4>
              {/* Se añadió el botón de cierre con clase 'btn-close' */}
            </div>
            <div className="modal-body">
              <p>
                Antes de realizar la ficha de salud, tené en cuenta haber
                realizado los pasos previos correspondientes.
              </p>
            </div>
            <div className="modal-footer">
              {/* Cambiado 'data-dismiss' por 'data-bs-dismiss' */}
              <button
                type="button"
                className="btn btn-outline-link"
                data-bs-dismiss="modal"
              >
                Volver atrás
              </button>
              <button type="button" className="btn btn-primary">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel2">
                Eliminar documento
              </h4>
              {/* Se añadió el botón de cierre con clase 'btn-close' */}
            </div>
            <div className="modal-body">
              <p>El documento que seleccionaste será eliminado.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <small>CARGA EXITOSA</small>
              <h4 className="modal-title" id="exampleModalLabel3">
                Los archivos se cargaron correctamente
              </h4>
              {/* Se añadió el botón de cierre con clase 'btn-close' */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContainer;
