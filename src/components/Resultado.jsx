import CotizadorContext from "../context/CotizadorProvider"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES} from "../constants"
import { useCallback, useRef } from "react"

const Resultado = () => {

  const {resultado, datos} = useCotizador(CotizadorContext)
  const {marca, plan, año} = datos

  const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado])
  const [tipoPlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado])

  const añoRef = useRef(año)
    
  if (resultado === 0) {
    return null
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-gray-600">Resumen</h1>
      <p className="my-2">
        <span className="font-bold text-black">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold text-black">Año: </span>
        {añoRef.current}
      </p>
      <p className="my-2">
        <span className="font-bold text-black">Plan: </span>
        {tipoPlan.nombre}
      </p>
      <p className="text-2xl my-2">
        <span className="font-bold text-black">Total de la Cotizacion: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado
