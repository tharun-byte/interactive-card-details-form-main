function btnClickMob() {
    let err = alert("wrong input")
    let cardNumber = document.querySelector("#card-number").value;
    let month = document.querySelector("#mm").value;
    let year = document.querySelector("#yy").value;
    let cvv = document.querySelector("#cvv").value;
    if (cardNumber.length < 20) {
        err
    } else if (cardNumber.length >  18) {
        err
    }
    alert(cardNumber.length);
}