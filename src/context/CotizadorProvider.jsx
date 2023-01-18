import { createContext, useState } from "react"
import { obtenerDiferenciaAño, calcularMarca, calcularPlan, formatearDinero } from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    plan: '',
    año: ''
  })

  const [error, setError] = useState('')

  const [resultado, setResultado] = useState(0)

  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {

    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = (e) => {

    e.preventDefault()

    if (Object.values(datos).includes('')) {

      return setError('Todos los campos son obligatorios')

    }

    setError(false)

    let resultado = 2000
    
    const diferencia = obtenerDiferenciaAño(datos.año)

    resultado -= ((diferencia * 3) * resultado) / 100

    resultado *= calcularMarca(datos.marca)

    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado)

    setCargando(true)
    
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 3000)

  }

  return (
    <CotizadorContext.Provider value={{datos, handleChangeDatos, error, cotizarSeguro, resultado, cargando}}>
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext