
document.getElementById("btn").onmouseover = function () {
    let cardNumber = prompt("enter number")
    // let pin = prompt("enter pin")
    let cvv = prompt("enter cvv")

//to
    if (cardNumber.length == 16 && cvv.length == 3) {
        document.getElementById("number").innerText = cardNumber.slice(0, 4) + " " + cardNumber.slice(4, 8) + " " + cardNumber.slice(8, 12) + " " + cardNumber.slice(12, 16)




        document.getElementById("cvv").innerText = cvv
    }
    else {
        alert("invalid card")
    }
}





// document.getElementById("number").onmouseover = function(){
//     document.getElementById("number").innerText = "0022 0033 0033 0033"
//     document.getElementById("number").innerText.style.wordSpacing = "3svw"
// }

