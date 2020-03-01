$(document).ready(function() {
    $("form.btn").submit(function(event) {
        event.preventDefault();        
    });
    $("img#pizzaPic").click(function(){
        console.log("I have been clicked")
        $(".showContainer").toggle();
    });

    $("select#size").change(function () {
        var showPrice = $(this).children("option:selected").val();
        $("#prize").text(showPrice);
        // console.log(showPrice);
    })

});
