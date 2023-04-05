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
            alert()
    }

    $(".output input").val(eq)
})


