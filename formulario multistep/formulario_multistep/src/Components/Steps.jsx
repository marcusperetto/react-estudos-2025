import "./Steps.css";

const Steps = ({currentStep}) => {
  return (
    <div>
      <div className="steps">
        <div className="step active">
            <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active": ""}`}>
            <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active": ""}`}>
            <p>Envio</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
