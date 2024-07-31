import SwitchContainer from "../../../src/components/Switch/Switch";
import ModalContainer from "../../../src/components/Modal/Modal";
import TooltipContainer from "../../../src/components/Tooltip/Tooltip";
export default function Home() {
  return (
    <main>
      {/* <button className="btn btn-primary">hola</button> */}

      <h1 className="headline-lg">nunito</h1>
      <p className="text-xs">open</p>

      <div className="storybook__container-banner">
        <div className="banner">
          <div className="banner-content">
            <p className="banner-text">
              Esta descripción de banner
              <strong>puede tener énfasis</strong>y
              <a href="#" target="_blank" rel="noreferrer">
                enlace
              </a>
              .
            </p>
          </div>
        </div>
        <div className="banner banner-dark">
          <div className="banner-content">
            <p className="banner-text">
              Esta descripción de banner <strong>puede tener énfasis</strong> y{" "}
              <a href="#" target="_blank" rel="noreferrer">
                enlace
              </a>
              .
            </p>
          </div>
        </div>
        <div className="container">
          {/* Switch */}
          <h4>Switch</h4>
          <SwitchContainer></SwitchContainer>

          {/* Modal */}
          <h4>Modal</h4>
          <ModalContainer></ModalContainer>

          {/* Tooltip */}
          <h4>Tooltip</h4>
          <TooltipContainer></TooltipContainer>
        </div>
      </div>
    </main>
  );
}
