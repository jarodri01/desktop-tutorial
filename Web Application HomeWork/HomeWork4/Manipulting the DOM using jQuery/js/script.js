$(document).ready(function () {
    manipulateDOM()
});
function manipulateDOM(){
    var h1Header=$('h1');
    h1Header.text('Hello World!');
    
    var h3Headers = $('h3');
    h3Headers.css('color', '#37887D');
    h3Headers.first().css('text-decoration', 'line-through');

    var lastH3Hearder = $('h3:last');
    lastH3Hearder.css('background', '#53226a');
    
}