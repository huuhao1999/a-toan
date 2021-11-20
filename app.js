
//shows numeric keypad on iOS mobile devices
if(getMobileOperatingSystem() === "iOS"){
    $('input[type="number"]').attr("pattern", "\\d*");
}
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }

let form = document.getElementById("form-qr");
form.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key == "Enter") {
        let activeElm = document.activeElement
        let content = document.getElementById("input-transfer-content");
        let amount = document.getElementById("input-transfer-amount");
        if (activeElm == content && content.value != "" && amount.value == "") {
            amount.focus();
            event.preventDefault();
        }
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let bankName = "Vietcombank";
    let bankNumber = "1111514131";
    let accountName = "Vũ Đình Toàn";
    let content = document.getElementById("input-transfer-content").value;
    let amount = document.getElementById("input-transfer-amount").value;
    if (content != "" && amount != "") {
        let img = document.getElementById("qr-image");
        let imageUrl = `https://api.huuhao.club/${bankName}/${bankNumber}/${amount}/${encodeURI(content)}/qr_only_beck-company.png?accountName=${encodeURI(accountName)}`;
        img.src = imageUrl;
    }
});