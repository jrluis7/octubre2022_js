import { useRef, useState } from "react"




export default function ToDoList() {
    const entradaTarea = useRef();

    const [tareas, setTareas] = useState([
        { nombre: "HTML", estado: "TO_DO" },
        { nombre: "JS", estado: "DONE" },
    ]);

    const addTask = () => {
        console.log(entradaTarea);
        const nombre = entradaTarea.value;
        const nuevaTarea = {
            nombre,
            estado: 'TO_DO'
        }
        const tareas_updated = [
            ...tareas,
            nuevaTarea
        ]

        setTareas(tareas_updated);

    }

    const complete = (tarea) => {
        console.log('Completar', tarea)
        const tareas_update = tareas.map((cadaTarea) => {
            const clonTarea = { ...cadaTarea };
            if (clonTarea.nombre === tarea.nombre) {
                clonTarea.estado = "DONE"
            }
            return clonTarea;
        })
        // SET -> Tenemos que dar TODO EL OBJETO NUEVO
        setTareas(tareas_update)
    }

    const uncomplete = (tarea) => {
        console.log('Descompletar', tarea);
    }

    const mostrarTareas = (estado) => {
        // const tareas_filtradas = tareas.filter((cadaTarea) => {
        //     // if (cadaTarea.estado === "TO_DO") {
        //     //     return true;
        //     // }
        //     // return false;

        //     return ( cadaTarea.estado === 'TO_DO' )? true: false

        // });

        const tareas_filtradas = tareas.filter((cadaTarea) =>
            (cadaTarea.estado === estado) ? true : false
        );

        return tareas_filtradas.map((cadaTarea, indice) => {
            return (
                <div className="tarea" key={indice}>
                    {cadaTarea.nombre}
                    {getButton(estado, cadaTarea)}
                </div>
            )
        })
    }

    const getButton = (estado, cadaTarea) => {
        if (estado === 'TO_DO') {
            return (
                <button onClick={() => { complete(cadaTarea) }} >
                    Completar
                </button>
            )
        } else if (estado === 'DONE') {
            return (<button onClick={() => { uncomplete(cadaTarea) }} >
                Descompletar
            </button>)
        }
    }

    return <>
        <div>
            <input type="text" ref={entradaTarea} />
            <button onClick={() => {
                addTask()
            }}>Add</button>
        </div>
        <h2> Tareas por hacer </h2>
        {
            mostrarTareas('TO_DO')
        }
        <div>

        </div>

        <h2> Tareas Completadas </h2>
        <div>
            {
                mostrarTareas('DONE')
            }
        </div>

    </>

}







function pura(numero) {
    return numero + numero;
}