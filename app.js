function calculater(value) {
    var equBox = document.getElementById("equBox")
    var resBox = document.getElementById("resBox")

    if (value == '=') {
        resBox.innerText = eval(equBox.innerText)
    } else if(value == "del") {
        equBox.innerText = equBox.innerText.slice(0,-1)
        resBox.innerText = ""
    } else if(value == "C") {
        equBox.innerText = ''
        resBox.innerText = ""
    } else {
        equBox.innerText += value
        resBox.innerText = ""
    }
}
