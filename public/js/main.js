$(".home-container-card").hover(
    function() {
        console.log("working");
        $( this ).find("h2").addClass( "underline" );
    }, function() {
      $( this ).find("h2").removeClass( "underline" );
    }
);
$(".home-container-card").off( "mouseenter mouseleave" );