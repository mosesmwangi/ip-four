$(document).ready(function () {
    $("form.btn").submit(function (event) {
        event.preventDefault();
    });
    $("img#pizzaPic").click(function () {
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

        var totalSumOfToppings = 0;
        for (var index = 0; index < priceOfTopping.length; index++) {
            totalSumOfToppings += parseInt(priceOfTopping[index]);
            $("#prizeOfTopping").text(totalSumOfToppings);
        }

    })

    $('#radio').click(function () {
        if ($('#radio').is(':checked')) {
            $(".hideShow").show()
        }
    });

    $("button#btn").click(function () {
        alert("You will get your order on clicking Checkout");
    })

    $("button#checkout").click(function () {
        var showPrice = $("select#size").children("option:selected").val();
        var showPriceNow = parseInt(showPrice);
        var showPriceTwo = $("select#crust").children("option:selected").val();
        var showPriceTwoNow = parseInt(showPriceTwo);
        var priceOfTopping = [];
        $.each($("input[name='topping']:checked"), function () {
            priceOfTopping.push($(this).val());
        });
        var numValue = $("input#number").val();
        var nuumValue = parseInt(numValue);
        var totalSumOfToppings = 0;
        // console.log(priceOfTopping);

        for (var index = 0; index < priceOfTopping.length; index++) {

            totalSumOfToppings += parseInt(priceOfTopping[index]);
        }

        var num = 400;
        var theNum = parseInt(num);
        // console.log(theNum);

        var grandTotal = (((showPriceNow + showPriceTwoNow + totalSumOfToppings) * nuumValue) + theNum);

        console.log(grandTotal);



        alert("The Totals for your pizza(s) is Ksh. " + grandTotal);
    })

});
