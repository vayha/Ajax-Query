$(document).ready(function () {
    'use strict';
    
    $('#pobierz-dane').click(function (){
         /*console.log('test'); */
        
        
/* pobieranie danych z inputa*/
        var idUsera = $('#user-id').val();

$.getJSON('http://echo.jsontest.com/userId/' + idUsera + '/userName/Akademia108/userURL/akademia108.pl', function(data){             
        
/*
$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
*/
   
    
    console.log(data);
    
    var parUserId = document.createElement('div');
    var parUserName = document.createElement('div');
    var parUserUrl = document.createElement('div');
   
    
    /* dla tej zmiennej dodatj html i przypisz wartosc z klucza
    
    zmienna, do htmla , funkcja, po id ktore mam z konsoli
    */
    parUserId.innerHTML = data.userId;
    parUserName.innerHTML = data.userName;
    parUserUrl.innerHTML = data.userURL;
    
    /*wstrzykunmey do body*/
    document.body.appendChild(parUserId);
    document.body.appendChild(parUserName);
    document.body.appendChild(parUserUrl);
    
    
    
    /*pod data kryje sie to co mam z conslole loga
    {
    "userId: "108"
    userName: "Akademia108"
    userURL:"akademia108.pl"
    }
    */
    
    });
    
});
});