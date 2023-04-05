$(".input div").each(function (index, el) {
    $(this).click(function (e) {
        if (!localStorage.getItem("num1")) {
            localStorage.setItem("num1", e.target.innerText)
        } else if (!localStorage.getItem("op")) {
            localStorage.setItem("op", e.target.innerText)
        } else if (!localStorage.getItem("num2")) {
            localStorage.setItem("num2", e.target.innerText)
        }
    })

})

$("#id1").click(function (e) {

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
