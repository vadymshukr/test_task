$( document ).ready(function() {
    $( '.navbar__link' ).hover(
        function(){
            $( this ).addClass( 'navbar__link__active' )
        }, function(){
            $( this ).removeClass( 'navbar__link__active' )
        }
    )

    $( '.color-circle' ).hover(
        function(){
            $( '.color-circle__active').removeClass('color-circle__active')
            $( this ).addClass( 'color-circle__active' )
        }, function(){
            $( this ).removeClass( 'color-circle__active' )
        }
    )
});