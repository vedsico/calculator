

$(".input").each(function (index, el) {
    $(this).click(function (e) {

        if ($.isNumeric(Number(e.target.innerText)) && !localStorage.getItem("num2") && !localStorage.getItem("op")) {
            localStorage.setItem("num1", e.target.innerText)
            if (localStorage.getItem("num1")) {
                // $(".output input").val($(".output input").val() + e.target.innerText)
            } else {

            }
        } else if ((!localStorage.getItem("op") || !$.isNumeric(Number(e.target.innerText))) && (e.target.innerText.indexOf("+") !== -1) || (e.target.innerText.indexOf("-") !== -1)) {
            localStorage.setItem("op", e.target.innerText)
            // $(".output input").val($(".output input").val() + e.target.innerText)


        } else if ($.isNumeric(Number(e.target.innerText))) {
            localStorage.setItem("num2", e.target.innerText)
            /*$(".output input").val(function () {
                $(this).value += e.target.innerText
            })*/
            // $(".output input").val($(".output input").val() + e.target.innerText)


        }
    })

})

$("#equal").click(function (e) {

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

    $(".output input").val(eq)
})

$(".extended div").click(function (e) {
    $(".output input").val("")
    localStorage.clear()

})

// Check Size occuped variables on machine for this program
function getSizeOccuped() {
    let _lsTotal = 0,
        _xLen, _x;
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        console.log(_x.substring(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
    }
    ;
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB / 5 MB");
}
