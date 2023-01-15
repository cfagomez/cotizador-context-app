import CotizadorContext from "../context/CotizadorProvider"
import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador(CotizadorContext)

  return (
    <div className="bg-red-500 p-5 rounded-lg text-white text-center text-xl">
        {error}
    </div>
  )
}

export default Error