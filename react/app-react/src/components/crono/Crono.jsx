import { Fragment, useEffect, useState } from "react";


export default function Crono() {
    const [segundos, setSegundos] = useState(0)
    const [active, setActive] = useState(false)
    const [paused, setpaused] = useState(true)

    useEffect(() => {




    })

    useEffect(() => {
        let ref_time = null;
        console.log('Active', active)
        if (active) {
            ref_time = setInterval(() => {
                setSegundos(segundos + 1);
            }, 1000)
        } else {
            console.log('Descactiva')
            clearInterval(ref_time);
        }


    }, [active])

    const start = () => {
        setActive(true)
    }

    const stop = () => {
        setActive(false)

    }

    return (
        <Fragment>
            <div> {segundos} </div>

            <div>
                <button onClick={start}> Empezar </button>
                <button onClick={stop}> Stop </button>
            </div>
        </Fragment>
    )
}