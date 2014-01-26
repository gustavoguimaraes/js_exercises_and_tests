
$( document ).ready(function() {
        console.log( "document loaded" );
    });
 
    $( window ).load(function() {
        console.log( "window loaded" );

        $("#my-div").css("position", "absolute");
        $("#my-div").css("top", "50%");
        $("#my-div").css("left", "10%");
        $("#my-div").css("width", "2000px");
        $("#my-div").css("height", "200px");


$('#my-div').html('<img src="http://i.imgur.com/90Mmdcm.png">')
$('#my-div img').hover( function() {
    this.src = 'http://i.imgur.com/nTj3Fxx.gif'
}, function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
})
$('#my-div img').mousedown( function() {
    this.src = 'http://i.imgur.com/Rfj0a80.png' 
})
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').remove();
})
$('#my-div img').mousedown(function() {
    $('#my-div').append(
    '<img class="demo-hadouken" src="http://i.imgur.com/8NArGWZ.gif">'
    );
})
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').animate( {
        "margin-left": "7000px",
         height: "500px"
    }, 2000, 'swing', function() {
        this.remove();
    })
})
$('#my-div img').mouseup(function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
})

});