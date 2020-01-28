$( document ).ready(function() {
    $( '.navbar__link' ).hover(
        function(){
            $( this ).addClass( 'navbar__link__active' )
        }, function(){
            $( this ).removeClass( 'navbar__link__active' )
        }
    )
});