

function isMouseDown(ev) {
    // console.log('instance ev', ev instanceof PointerEvent)
    if (ev.type === "mousedown" && ev.which === 1) {
        return true;
    }
    return false;
}

function cloneTablero( tablero ){
    const t = tablero.map(e => {
        return e.map(i => i);
    });
    return t;
}

export { 
    isMouseDown, 
    cloneTablero
 };