function generateQR() {
  let qrText = document.getElementById("qrText").value;
  let qrContainer = document.getElementById("qrcode");

  // Clear old QR Code
  qrContainer.innerHTML = "";

  if (qrText.trim() === "") {
    alert("Please enter text or URL");
    return;
  }

  // Generate new QR
  new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
