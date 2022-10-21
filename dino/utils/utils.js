

function isMouseDown(ev) {
    // console.log('instance ev', ev instanceof PointerEvent)
    if (ev.type === "mousedown" && ev.which === 1) {
        return true;
    }
    return false;
}

export { isMouseDown };