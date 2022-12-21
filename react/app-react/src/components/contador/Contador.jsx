import { Fragment, useState } from 'react';
import './Contador.css';

// El nombre de la función es el nombre de la ETIQUETA HTML del componente
export default function Contador() {
    // STATE
    // [ getter , setter  ] = useState( <valorInicial> )
    // getter -> Vamos a poder saber el valor del estado en cualquier momento
    // setter -> Una función que nos permite cambiar el estado de la variable, pasando el nuevo valor
    const [contador, setContador] = useState(10);
    const [asteriscos, setAsteriscos] = useState('*');

    // const estado = useState(19);// Estado -> Array con dos elementos [ valor, funcion ]

    const crecer = () => {
        // contador = contador + 1;
        // Para cambiar el contador vamos a usar setContador
        setContador(oldvalue => {
            console.log('oldvalue', oldvalue)
            return contador + 1
        });
        setAsteriscos(asteriscos + '*');
        console.log('Crece', contador);
        // console.log(estado)
    }
    const decrecer = () => {
        setContador(contador - 1);
        setAsteriscos(asteriscos.slice(0, -1));
    }

    const muestraParImpar = () => {
        if (contador % 2 === 0 && contador !== 0) {
            return (<div className='par'> PAR </div>);
        } else if (contador === 0) {
            return (<div className='cero'> ES CERO </div>)
        }
        return (<div className='impar'> IMPAR </div>)
    }


    return (
        <Fragment>
            <h1> Contador: {contador} </h1>
            <p>
                {asteriscos}
            </p>
            {/* <p>
                OPCION 1 de ngIf PAR 

                {
                    (contador % 2 === 0) ? 'PAR' : 'IMPAR'
                }


            </p> */}

            {/* OPCION 2 de NGIF */}

            {
                // ( condicion ) && <HTML_JSX>
                //(contador % 2 === 0) && <p className='par'> PAR </p>

            }
            {
                //(contador % 2 !== 0) && <p className='impar'> IMPAR </p>
            }


            {/* <p className='impar'> PAR </p> */}
            {/* OPCIÓN 3 Recomendada */}

            {
                muestraParImpar()
            }


            <div>
                <button onClick={crecer}> Crecer </button>
                <button onClick={decrecer}> Decrecer </button>
            </div>
        </Fragment>
    )

}
