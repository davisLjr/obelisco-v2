import "./switch_container.scss";

const SwitchContainer: React.FC = () => {
  return (
    <>
      <div className="storybook__container-switch">
        <label className="switch" htmlFor="switch-1">
          <input type="checkbox" id="switch-1" defaultChecked={false} />
          <span className="slider"></span>
          <span className="switch-label on">Prendido</span>
          <span className="switch-label off">Apagado</span>
        </label>
        <label className="switch" htmlFor="switch-2">
          <input type="checkbox" id="switch-2" defaultChecked={true} />
          <span className="slider"></span>
          <span className="switch-label on">Prendido</span>
          <span className="switch-label off">Apagado</span>
        </label>
      </div>
      <div className="storybook__container-switch">
        <label className="switch switch-dark" htmlFor="switch-dark-1">
          <input type="checkbox" id="switch-dark-1" defaultChecked={false} />
          <span className="slider"></span>
          <span className="switch-label on">Prendido</span>
          <span className="switch-label off">Apagado</span>
        </label>
        <label className="switch switch-dark" htmlFor="switch-dark-2">
          <input type="checkbox" id="switch-dark-2" defaultChecked={true} />
          <span className="slider"></span>
          <span className="switch-label on">Prendido</span>
          <span className="switch-label off">Apagado</span>
        </label>
      </div>
    </>
  );
};

export default SwitchContainer;
