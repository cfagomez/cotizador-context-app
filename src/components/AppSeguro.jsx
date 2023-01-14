import React from 'react'
import Formulario from './Formulario'

const AppSeguro = () => {
  return (
    <>
        <header className='text-center mx-10 my-10'>
            <h1 className='text-4xl font-bold text-white'>Cotizador de Seguros de Auto</h1>
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 rounded-lg mx-auto shadow'>
            <Formulario />
        </main>
    </>    
  )
}

export default AppSeguro