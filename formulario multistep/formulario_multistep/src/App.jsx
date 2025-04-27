//Components
import UseForm from './Components/UseForm';
import ReviewForm from './Components/ReviewForm';
import Thanks from './Components/Thanks';
import Steps from './Components/Steps';
import './App.css';

//Hooks
import { HookUseForm } from './hooks/HookUseForm';
import { useState } from 'react';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};


function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return{...prev, [key]: value};
    });
  };

  const formComponents = [
    <UseForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>,
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = HookUseForm(formComponents);
  return (
    <>
      <div className='app'>
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o fomulário abaixo para avaliar o produto</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>Voltar</button>)}
              {!isLastStep ? (<button type='submit'>Avançar</button>) : (<button type='button'>Enviar</button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
