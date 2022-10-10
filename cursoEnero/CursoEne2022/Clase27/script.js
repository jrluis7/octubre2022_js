
// Local Storage
// Proyecto++; 2-3

// Web APIS
// Custom Elements

// AJAX
// Scrum -> Git, Proyecto conjunto

// Patrones de diseño

// 40 - 42 -> Angular
// 45 - 46 -> React


// API de SPEECH


let reconigtion = new webkitSpeechRecognition();
console.log( reconigtion );

reconigtion.continuous = true;
reconigtion.lang = "es-ES";

$("#start").on({
    click:function(){
        // Empezar a reconocer la voz
        reconigtion.start();
    }
});

$('#stop').on({
    click:function(){
        reconigtion.abort();
    }
});


reconigtion.onresult = ( evento )=>{

    // evento.results
    console.log( evento.results )
    // cojo la última línea
    console.log( evento.results[evento.results.length - 1] )
    console.log( evento.results[evento.results.length - 1][0].transcript );

    let texto = evento.results[evento.results.length - 1][0].transcript ;
    let confianza = evento.results[evento.results.length - 1][0].confidence ;
    pintaTexto( texto ,confianza )
    voz( texto )

}






function pintaTexto( texto, confianza ){
    $( '#texto' ).append( texto );
    $( '#confianza' ).text( confianza );
}



function voz( texto ){

    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 12;
    speech.rate =100;
    speech.pitch = 10;
    console.log( speech )
    window.speechSynthesis.speak( speech )
}
