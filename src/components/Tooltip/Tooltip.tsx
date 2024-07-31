import "./tooltip_container.scss";

const TooltipContainer: React.FC = () => {
  return (
    <>
      <div className="storybook__container-tooltip">
        <div className="storybook__container-tooltip-row">
          <span
            data-direction="top-right"
            data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">turn_right</span>
            </button>
          </span>
          <span
            data-direction="top"
            data-tooltip='Esta es la descripción de un tooltip "arriba".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">arrow_upward</span>
            </button>
          </span>
          <span
            data-direction="top-left"
            data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">turn_left</span>
            </button>
          </span>
        </div>
        <div className="storybook__container-tooltip-row">
          <div className="storybook__container-tooltip-column left">
            <span
              data-direction="right-bottom"
              data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">south_east</span>
              </button>
            </span>
            <span
              data-direction="right"
              data-tooltip='Esta es la descripción de un tooltip "derecha".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">arrow_forward</span>
              </button>
            </span>
            <span
              data-direction="right-top"
              data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">north_east</span>
              </button>
            </span>
          </div>
          <div className="storybook__container-tooltip-column right">
            <span
              data-direction="left-bottom"
              data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">south_west</span>
              </button>
            </span>
            <span
              data-direction="left"
              data-tooltip='Esta es la descripción de un tooltip "izquierda".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">keyboard_backspace</span>
              </button>
            </span>
            <span
              data-direction="left-top"
              data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
              tabIndex={0}
            >
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span className="material-icons-round">north_west</span>
              </button>
            </span>
          </div>
        </div>
        <div className="storybook__container-tooltip-row">
          <span
            data-direction="bottom-right"
            data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">
                subdirectory_arrow_right
              </span>
            </button>
          </span>
          <span
            data-direction="bottom"
            data-tooltip='Esta es la descripción de un tooltip "abajo".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">arrow_downward</span>
            </button>
          </span>
          <span
            data-direction="bottom-left"
            data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
            tabIndex={0}
          >
            <button
              type="button"
              className="btn btn-primary btn-icon"
              aria-label="Botón"
            >
              <span className="material-icons-round">
                subdirectory_arrow_left
              </span>
            </button>
          </span>
        </div>
        <br />
        <br />
        <div className="storybook__container-tooltip-row">
          <span
            data-direction="top-right"
            data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
          <span
            data-direction="top"
            data-tooltip='Esta es la descripción de un tooltip "arriba".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
          <span
            data-direction="top-left"
            data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
        </div>
        <div className="storybook__container-tooltip-row">
          <div className="storybook__container-tooltip-column left">
            <span
              data-direction="right-bottom"
              data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
            <span
              data-direction="right"
              data-tooltip='Esta es la descripción de un tooltip "derecha".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
            <span
              data-direction="right-top"
              data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
          </div>
          <div className="storybook__container-tooltip-column right">
            <span
              data-direction="left-bottom"
              data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
            <span
              data-direction="left"
              data-tooltip='Esta es la descripción de un tooltip "izquierda".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
            <span
              data-direction="left-top"
              data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
              className="icon-box bg-light"
              tabIndex={0}
            >
              <span className="material-symbols-rounded">help</span>
            </span>
          </div>
        </div>
        <div className="storybook__container-tooltip-row">
          <span
            data-direction="bottom-right"
            data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
          <span
            data-direction="bottom"
            data-tooltip='Esta es la descripción de un tooltip "abajo".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
          <span
            data-direction="bottom-left"
            data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
            className="icon-box bg-light"
            tabIndex={0}
          >
            <span className="material-symbols-rounded">help</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default TooltipContainer;
