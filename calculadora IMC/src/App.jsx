import {data} from './Data/Data'

import { useState } from 'react'

import ImcCalc from './Components/ImcCalc'

import ImcTable from './Components/imcTable'

import './App.css'


function App() {

  const CalcImc = (e, height, weight) => {
    e.preventDefault()

    if(!weight || !height) return 

    const weightfloat = +weight.replace(",", ".")
    const heightfloat = +height.replace(",", ".")

    const imcResult = (weightfloat / (heightfloat * heightfloat)).toFixed(1)


    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState ("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
 

  return ( 
      <div className='container'>
      {!imc ? <ImcCalc CalcImc={CalcImc}/> : <ImcTable 
      data={data} 
      imc={imc} 
      info={info} 
      infoClass={infoClass} 
      resetCalc={resetCalc}/>}
      </div>  
  )
}

export default App
