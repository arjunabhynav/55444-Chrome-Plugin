// Copyright (c) 2013 Arjun Abhynav. All rights reserved.

function loadResponse(url)
{
    $.get(url, function(data) {
        $('#content').html(data);
        var output = document.getElementById('output').innerHTML;
        $('#content').html(output);
        $('#content').append('<div id="copyright">Powered by Innoz</div>');
        document.getElementById('query').value = '';
    });
}

function sendQuery()
{
    var query = document.getElementById('query').value;
    query = encodeURIComponent(query);
    var domain = 'http://gyan.mobi/';
    var application = 'search.php';
    var url = domain + application + '?q=' + query + '&btnSG=Search';
    loadResponse(url);
}

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('qsubmit');
    submitButton.addEventListener('click', function  () {
        sendQuery();
    });
    $("input").keypress(function(event) {
        if (event.which == 13)
        {
            event.preventDefault();
            sendQuery();
        }
    });
});
