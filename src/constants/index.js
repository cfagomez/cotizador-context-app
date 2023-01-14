export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiatico"}
]

const añoMaximo = new Date().getFullYear()

export const AÑOS = Array.from(new Array(20), (valor, index) => añoMaximo - index )

export const PLANES = [
    {id: 1, nombre: "Basico"},
    {id: 2, nombre: "Completo"}
]

