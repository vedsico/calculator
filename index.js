$(".input > div:not(.ioperands):not(.iequal)").each(function (index, el) {
    $(this).click(function (e) {

        if (!localStorage.getItem("eq")) {
            $(".output input").val($(".output input").val() + e.target.innerText)
        }

        if (!localStorage.getItem("num1")) {
            localStorage.setItem("num1", e.target.innerText)

        } else if (!localStorage.getItem("num2")) {
            localStorage.setItem("num2", e.target.innerText)

        }

    })

})

$(".ioperands > div").click(function (e) {

    if (e.target.innerText === "+") {

        var str = $(".output input").val();
        var indices = [0];
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "+") indices.push(i);
        }

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


    let ind = function indices(char) {
        var str = $(".output input").val();
        var indices = [0];
        for (var i = 0; i < str.length; i++) {
            if (str[i] === char) indices.push(i);
        }
        return indices
    }


    if ((ind("+").length <= 1 || ind("-").length <= 1) && ind("=").length <= 1) {
        $(".output input").val($(".output input").val() + "=" + eq)

        localStorage.setItem("eq", eq)
    }
})

// clear...

$(".extended div").click(function (e) {
    $(".output input").val("")
    localStorage.clear()

})
