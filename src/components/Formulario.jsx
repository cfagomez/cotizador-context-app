import { Fragment } from "react"
import { MARCAS, AÑOS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <form className="mt-10">
        <div>
            <label>Marca</label>
            <select name="marca">
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
        <div>
            <label>Año</label>
            <select name="año">
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
            {
                PLANES.map(plan => (
                    <Fragment>
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
    </form>
  )
}

export default Formulario