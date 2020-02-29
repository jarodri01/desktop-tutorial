var slideInterval = 3500;

function getFigures() {
    return 
    document.getElementById('carousel').getElementsByTagName('figure');
}
function moveForward() {
    var pointer;
    var figure = getFigures();
    for (var i = 0; i < figure.length; i++) {
        if (figure[i].className == 'visible') {
            figure[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figure.length) {
        pointer = 0;
    }
    figure[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();
