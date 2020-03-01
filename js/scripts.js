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

    $("select#crust").change(function () {
        var showPriceTwo = $(this).children("option:selected").val();
        $("#prizeTwo").text(showPriceTwo);
    })

    $("button#topping").click(function () {
        var priceOfTopping = [];
        $.each($("input[name='topping']:checked"), function () {
            priceOfTopping.push($(this).val());
        });
        // var allPriceOfTopping = priceOfTopping.join(",");
        // console.log(allPriceOfTopping);
        var totalSumOfToppings = 0;
        // $("#prizeThree").text(priceOfTopping.join(","));
        // console.log(priceOfTopping);

        for (var index = 0; index < priceOfTopping.length; index++) {

            // totalSumOfToppings = 0;

            totalSumOfToppings += parseInt(priceOfTopping[index]);
            $("#prizeOfTopping").text(totalSumOfToppings);
        }

        // $("button#btn").click(function () {
        //     var showPrice = $("select#size").children("option:selected").val();
        //     var showPriceNow = parseInt(showPrice);
        //     var showPriceTwo = $("select#crust").children("option:selected").val();
        //     var showPriceTwoNow = parseInt(showPriceTwo);
        //     var priceOfTopping = [];
        //     $.each($("input[name='topping']:checked"), function () {
        //         priceOfTopping.push($(this).val());
        //     });
        //     var numValue = $("input#number").val();
        //     var nuumValue = parseInt(numValue);
        //     var totalSumOfToppings = 0;
        //     // console.log(priceOfTopping);

        //     for (var index = 0; index < priceOfTopping.length; index++) {

        //         totalSumOfToppings += parseInt(priceOfTopping[index]);
        //         // console.log(totalSumOfToppings);
        //     }
        //     console.log((showPriceNow + showPriceTwoNow + totalSumOfToppings) * nuumValue);
            
        //     // console.log();
        // })

    })


});
