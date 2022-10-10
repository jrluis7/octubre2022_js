// Web Custom Elements
// etiquetas personalizadas de HTML/JS

class SaludoElement extends HTMLElement{
    constructor(){
        super();// llamar al constructor de la clase padre
        this.attr_nombre = "Vacío";
        this.render();
    }

    // Avisar cuando el elemento "entra" en el DOM
    connectedCallback(){
        console.log( 'Acabo de entrar en el DOM' )
    }

    // Avisa de cuándo un elemento "se elimina" del DOM
    disconnectedCallback(){
        console.log( 'Eliminado en el DOM' )
    }

    // Detecta cuándo un atributo ha sido cambiado
    attributeChangedCallback( attr, oldValue, newValue ){
        console.log( 'Atributo cambiado' )
        console.log( `${attr} ha cambiado: ${oldValue} => ${newValue}` )
        this.attr_nombre = newValue;
        this.render();
    }

    // Qué atributos quiero observar
    static get observedAttributes(){
        return [ 'nombre' ]
    }

    render(){
        this.innerHTML = `
        <div class="saludoContent border">
            <h2> Hola ${this.attr_nombre} </h2> 
        </div>
        `
    }
}

window.customElements.define( 'app-saludo' , SaludoElement );









class PopUpData extends HTMLElement{


 constructor(){
        super();// llamar al constructor de la clase padre
        this.render();
        this.open = false;
    }

    // Avisar cuando el elemento "entra" en el DOM
    connectedCallback(){
        console.log( 'Acabo de entrar en el DOM' )
    }

    // Avisa de cuándo un elemento "se elimina" del DOM
    disconnectedCallback(){
        console.log( 'Eliminado en el DOM' )
    }

    // Detecta cuándo un atributo ha sido cambiado
    attributeChangedCallback( attr, oldValue, newValue ){
        console.log( attr, oldValue, newValue )
        if( attr==='open' ){
            console.log( attr )
            if( newValue === 'true' ){
                this.shadowRoot.querySelector( '.modal' ).classList.add( 'active' )
            }else{
                this.shadowRoot.querySelector( '.modal' ).classList.remove( 'active' )
            }
        }

    }
    // Qué atributos quiero observar
    static get observedAttributes(){
        return [ 'open' ];
    }

    render(){
        const shadow = this.attachShadow({ mode:'open' })
        const style = document.createElement( 'style' );
        style.textContent = `
            .modal{
                position: fixed;
                top:0;
                left:0;
                right: 0;
                bottom:0;
                background-color: rgba(0,0,0,0.7);
                justify-content: center;
                align-items: center;
                display: none;
            }
            
            .modal.active{
                display: flex;
            }
        `

        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "./popup.css";
        // shadow.appendChild( link );


        // nodo "document" 
        let nodoBoton = document.createElement( 'button' );
        nodoBoton.innerHTML = "Pop up";
        let nodoPopUp = document.createElement( 'div' );
        nodoPopUp.innerHTML = `
        <div class="modal">
            <h1 id='contenido'> Hola </h1>
        </div>
        `
        let that = this;
        nodoBoton.addEventListener( 'click', ()=>{   
            // alert( 'Hola' )
            this.open = !this.open;
            // debugger
            
            // this.open = true;
            this.setAttribute( 'open', this.open )
        }  )
        shadow.appendChild( nodoBoton );
        shadow.appendChild( nodoPopUp );
        shadow.appendChild( style );
        // this.appendChild ( shadow )
    }
}
window.customElements.define( 'app-popup' , PopUpData );








// let alumno = {
//     nombre:"Juan",
//     saludo:function(){ // 
//         console.log( this )
//         return this.nombre;
//     }
// }

// console.log( alumno.saludo() )