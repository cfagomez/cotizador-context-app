import { Fragment } from "react"
import { MARCAS, AÑOS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <form className="mt-10 p-10">
        <div className="my-5">
            <label className="uppercase text-gray-400 font-bold py-10">Marca</label>
            <select 
                name="marca"
                className="w-full p-2 border border-gray-400"
            >
                <option>-- Seleccione una marca --</option>
                {
                    MARCAS.map(marca => (
                        <option 
                            value={marca.id}
                            key={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))
                }
            </select>
        </div>
        <div className="my-5">
            <label className="uppercase text-gray-400 font-bold py-10">Año</label>
            <select 
                name="año"
                className="w-full p-2 border border-gray-400"
            >
                <option>-- Seleccione Año --</option>
                {
                    AÑOS.map(año => (
                        <option 
                            value={año}
                            key={año}
                        >
                            {año}
                        </option>
                    ))
                }
            </select>
        </div>
        <div>
            <p className="uppercase text-gray-400 font-bold">Plan</p>
            <div className="flex gap-3">
            {
                PLANES.map(plan => (
                    <Fragment key={plan.id}>
                        <label>{plan.nombre}</label>
                        <input 
                            type="radio"
                            name="plan"
                            value={plan.id}
                        />
                    </Fragment>
                ))
            }
            </div>
        </div>
        <input 
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold uppercase"
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Formulario