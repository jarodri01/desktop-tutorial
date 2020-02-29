function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
    .done(function(response) {
        alert(JSON.stringify(response));
        $('body > p').text(
            response.origin
        );
    });
}
$.ajax({
    url: 'http://httpbim.org/get',
    method: 'GET',
    dataType: 'json'
    })

    .done(function(response) {
        $('body > p').text(
            JSON.stringify(response)
        );
    })
    .fail(function() {
            alert('An error has occured')
    });
    $(document).ready(function () {
        makeRequests();
    });