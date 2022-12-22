import { useEffect, useRef, useState } from 'react';
import './Alumnos.css';


export default function Alumnos(props) {
    const entradaAlumno = useRef();// Sirve para inputs
    // let alumnos = [
    //     { nombre: 'Carlos', apellidos: 'Gómez', nota: 10 },
    //     { nombre: 'Marta', apellidos: 'Ruiz', nota: 9 },
    //     { nombre: 'María', apellidos: 'Ruiz', nota: 4 },
    // ]

    const [alumnos, setAlumnos] = useState([
        // { nombre: 'Carlos', apellidos: 'Gómez', nota: 10 },
        // { nombre: 'Marta', apellidos: 'Ruiz', nota: 9 },
        // { nombre: 'María', apellidos: 'Ruiz', nota: 4 }
    ]);

    const [estilo, setEstilo] = useState({ color: "red" });

    /*
        React: Acción primaria es Pintar en el DOM los cambios que hay en el estado
        Use Effect: Acción secundaria
            - Detecta y Actua cuando ha habido un cambio en el STATE 
    
    */

    useEffect(() => {
        console.log('Detectamos TODOS los Cambios en el estado');
    })// Segundo parámetro vacío -> Detecta todos los cambios

    useEffect(() => {

        console.log('Sólo detecta los cambios en el estado Alumnos');
        if (alumnos.length !== 0) {
            let json_alumnos = JSON.stringify(alumnos);
            localStorage.setItem('alumnos-react', json_alumnos);
        }

    }, [alumnos])

    useEffect(() => {
        console.log('Sólo se ejecuta al principio. Es el ngOnInit de Angular');
        const alumnos = JSON.parse(localStorage.getItem('alumnos-react'));
        console.log()
        setAlumnos(alumnos);

    }, [])// Array vacío para sólo ejecutarse al principio


    const deleteAlumno = (alumno) => {

    }

    const getAlumnos = () => {

        const alumnos_filtered = alumnos.filter(cadaAlumno => cadaAlumno.nota >= 5);

        return alumnos.map((cadaAlumno, indice) => {
            return <div className='alumno' key={indice} >
                {cadaAlumno.nombre}
                <span> <button onClick={() => deleteAlumno(cadaAlumno)}> Delete </button> </span>
            </div>
        })
    }
    const add = () => {
        console.log(entradaAlumno);
        console.log(entradaAlumno.current.value);

        let alumnoNuevo = {
            nombre: entradaAlumno.current.value,
            apellidos: "Doe",
            nota: 9
        }
        // alumnos.push(alumnoNuevo); // -> PUSH está prohibido 
        // alumnos = [...alumnos, alumnoNuevo];
        setAlumnos([...alumnos, alumnoNuevo]);
        setEstilo({
            ...estilo,
            color: 'green'
        });
    }




    return (
        <>
            <h1> Alumnos - {props.clase} </h1>

            <div className='grid_alumnos'>
                <input type="text" ref={entradaAlumno} />
                <button onClick={add}> Añadir </button>

                {/* {
                    alumnos.map(cadaAlumno => {
                        return <div className='alumno'> {cadaAlumno.nombre} </div>
                    })
                } */}
                {
                    getAlumnos()
                }


                <div style={estilo}>
                    Contenido especial
                </div>



            </div>

        </>
    );
}



// let respuesta = [ 'A', 'B', 'C' ].map( cadaElemento => cadaElemento+"-"+cadaElemento );
// [ 'A-A' , 'B-B', 'C-C' ]

// let respuesta_ = [ 'A', 'B', 'C' ].map( cadaElemento => {
//     return document.createElement( 'div' ).innerHTML = cadaElemento
// } );

// [HTMLElement, HTMLElement, HTMLElement]


