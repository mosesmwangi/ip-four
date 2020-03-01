$(document).ready(function() {
    $("form.btn").submit(function(event) {
        event.preventDefault();        
    });
    $("img#pizzaPic").click(function(){
        console.log("I have been clicked")
        $(".showContainer").toggle();
    });
});