/*$("h1").css("color","red"); if we place script tag of jQuery somewhere else it may give you an error
 so we can use $(document).ready(function(){
     and can place our code here we are using ready method to see if the jQuery is loaded or not
 })  
                                              */
$(document).keypress(function(event){
    
    $("h1").text(event.key);
})