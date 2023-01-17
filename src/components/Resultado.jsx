import CotizadorContext from "../context/CotizadorProvider"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES} from "../constants"

const Resultado = () => {

  const {resultado, datos} = useCotizador(CotizadorContext)
  const {marca, plan, año} = datos

  const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
  const [tipoPlan] = PLANES.filter(p => p.id === Number(plan))
    
  if (resultado === 0) {
    return null
  }

  return (
    <div className="text-center pb-10">
      <h1 className="text-4xl font-bold text-gray-600">Resumen</h1>
      <p className="my-2">
        <span className="font-bold text-black">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold text-black">Año: </span>
        {año}
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
