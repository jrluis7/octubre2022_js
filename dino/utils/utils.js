

function isMouseDown(ev) {
    // console.log('instance ev', ev instanceof PointerEvent)
    if (ev.type === "mousedown" && ev.which === 1) {
        return true;
    }
    return false;
}

function cloneTablero(tablero) {
    const t = tablero.map(e => {
        return e.map(i => i);
    });
    return t;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b, alfa) {
    // let a = "";
    // if( alfa ){

    // }

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function rgbStringToHex(color) {
    "rgb(a,b,c)";

    let str_list = color.replaceAll("rgb(", "").replaceAll(")", "").replaceAll(" ", "").split(",");
    return rgbToHex(Number(str_list[0]), Number(str_list[1]), Number(str_list[2]));

}

export {
    isMouseDown,
    cloneTablero,
    rgbToHex,
    rgbStringToHex
};