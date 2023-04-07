
$(".input").each(function (index, el) {
    $(this).click(function (e) {

        if ($.isNumeric(Number(e.target.innerText)) && !localStorage.getItem("num2") && !localStorage.getItem("op")) {
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
