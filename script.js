let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qri");
let qrText = document.getElementById("qrt");

function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;

}