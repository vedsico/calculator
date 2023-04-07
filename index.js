$(".input > div:not(.ioperands):not(.iequal)").each(function (index, el) {
    $(this).click(function (e) {


        $(".output input").val($(".output input").val() + e.target.innerText)

        if (!localStorage.getItem("num1")) {
            localStorage.setItem("num1", e.target.innerText)

        } else if (!localStorage.getItem("num2")) {
            localStorage.setItem("num2", e.target.innerText)

        }

        /* if ($.isNumeric(Number(e.target.innerText)) && !localStorage.getItem("num2") && !localStorage.getItem("op")) {
             if (localStorage.getItem("num1")) {
             } else {

             }
             $(".output input").val($(".output input").val() + e.target.innerText)
             localStorage.setItem("num1", $(".output input").val())

         } else if ((!localStorage.getItem("op") || !$.isNumeric(Number(e.target.innerText))) && (e.target.innerText.indexOf("+") !== -1) || (e.target.innerText.indexOf("-") !== -1)) {
             $(".output input").val($(".output input").val() + e.target.innerText)

             localStorage.setItem("op", $(".output input").val() + e.target.innerHTMl.slice(-1))


         } else if ($.isNumeric(Number(e.target.innerText))) {
             localStorage.setItem("num2", e.target.innerText)

         }*/
    })

})

$(".ioperands > div").click(function (e) {

    if (e.target.innerText === "+") {

        var str = $(".output input").val();
        var indices = [0];
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "+") indices.push(i);
        }

        console.log(
            indices
        )
        if (indices.length <= 1) {
            $(".output input").val($(".output input").val() + "+")

        }

        localStorage.setItem("op", e.target.innerText)

    } else {

    }


})

$(".iequal").click(function (e) {

    let op = localStorage.getItem("op")
    let num1 = localStorage.getItem("num1")
    let num2 = localStorage.getItem("num2")
    let eq = ""

    switch (op) {
        case "+":
            eq = Number(num1) + Number(num2)
            break
        case "-":
            eq = Number(num1) - Number(num2)
            break
        default:
            alert("Provide some numbers!")
    }

    $(".output input").val($(".output input").val() + "=" + eq)
})

// clear...

$(".extended div").click(function (e) {
    $(".output input").val("")
    localStorage.clear()

})
