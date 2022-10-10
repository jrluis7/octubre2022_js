// JQUERY

// $( "#dialog" ).dialog({
//     resizable:false,
//     buttons: [
//         {
//           text: "OK",
//           click: function() {
//             $( this ).dialog( "close" );
//           }
//         }
//       ],
//     drag:function(ev){
//         console.log( "Moviendo" )
//         console.log( addEventListener )
//     }
// });


// let contador = 0;

// $('.cuadrado').draggable({
//   cursor:'move',
//   // delay:1000
//   opacity:0.5,
//   // distance: 100,
//   // grid:[100,200]
//   revert:true,
//   revertDuration:2000,
//   enable:false,
//   start:function(ev){
//     console.log( ev )
//     console.log( this )
//     $( this ).draggable( 'disable' )

//     setTimeout( ()=>{
//       $( this ).draggable( 'enable' )
//     },4000 )
//   }
// });

// $("#drop").droppable({
//   drop:function( evento, elementoui ){
//     console.log( evento )
//     console.log( elementoui )
//     elementoui.draggable.draggable( {revert:false} )
//     contador++;
//     // elementoui.draggable.draggable( 'destroy' )
//     // $( this ).append( elementoui.draggable )

//     $( '#count' ).html(contador);
//   }
// });




//JS NATIVO

$('.cuadrado').attr( 'draggable', true )

$('.cuadrado').on({
  dragstart:function( ev ){
    console.log( ev )
    console.log( $(this).attr( 'id') );
    if ( !$(this).attr( 'id') ){
      let now = new Date().getTime()+"-"+Math.trunc(Math.random()*400);
      $(this).attr( 'id', now )

    }
    // ev.originalEvent.dataTransfer.setData('dato',this.outerHTML);
    ev.originalEvent.dataTransfer.setData('dato',this.id);
  }
})


$( '#drop' ).on({
  dragover:function( ev ){
    ev.preventDefault();// Quiero permitir el drop
  },
  drop:function( ev ){
    console.log( "DROP" )
    console.log( ev )
    console.log(ev.originalEvent.dataTransfer.getData('dato'))
    let id = ev.originalEvent.dataTransfer.getData('dato');
    $(this).append($("#"+id));
  }
})











