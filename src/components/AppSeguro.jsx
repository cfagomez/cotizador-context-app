import Resultado from './Resultado'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import CotizadorContext from '../context/CotizadorProvider'
import Spinner from './Spinner'

const AppSeguro = () => {

  const {cargando} = useCotizador(CotizadorContext)

  return (
    <>
        <header className='text-center mx-10 my-10'>
            <h1 className='text-4xl font-bold text-white'>Cotizador de Seguros de Auto</h1>
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 rounded-lg mx-auto shadow mt-10 p-10'>
            <Formulario />
            {
              cargando ? (
                <Spinner />
              ) : (
                <Resultado />
              )
            }
        </main>
    </>    
  )
}

export default AppSeguro