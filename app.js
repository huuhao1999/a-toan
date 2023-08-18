// Jquery Dependency
$('#input-transfer-amount').on('blur', function () {
  console.log(this.value.replace(/,/g, ''));
  const value = this.value.replace(/,/g, '');
  let avalue = parseFloat(value).toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }) + 'đ';
  document.getElementById('input-transfer-amount1').value = avalue;
  document.getElementById('input-transfer-amount').style.display = 'none';
  document.getElementById('input-transfer-amount1').style.display = '';
});
let form = document.getElementById("form-qr");
form.addEventListener("keydown", (event) => {
  let key = event.key;
  if (key == "Enter") {
    let activeElm = document.activeElement;
    let content = document.getElementById("input-transfer-content").value;
    let amount = document.getElementById("input-transfer-amount").value;
    document.getElementById("input-transfer-amount").pattern = "*";
    console.log(amount);
    if (amount) {
      amount = Number((amount.toString()).replace('đ', '').split(',').join(''));
    }
    console.log(amount);
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
  if (amount) {
    amount = Number((amount.toString()).replace('đ', '').split(',').join(''));
  }
  if (content != "" && amount != "") {
    let img = document.getElementById("qr-image");
    let imageUrl = `https://api.vietqr.io/image/970436-1111514131-FX8qnRL.jpg?accountName=${encodeURI(accountName)}&amount=${amount}&addInfo=${encodeURI(content)}`;
    console.log(imageUrl);
    img.src = imageUrl;
    document.getElementById("input-transfer-amount").pattern = "^\$\d{1,3}(,\d{3})*(\.\d+)?$";
  }
});
document.getElementById("field__submit").onclick = function (event) {
  let content = document.getElementById("input-transfer-content").value;
  let amount = document.getElementById("input-transfer-amount").value;
  document.getElementById("input-transfer-amount").pattern = "*";
  console.log(amount);
  if (amount) {
    amount = Number((amount.toString()).replace('đ', '').split(',').join(''));
  }
  console.log(amount);
  if (content.value != "" && amount.value == "") {
    amount.focus();
    event.preventDefault();
  }
}
document.getElementById("input-transfer-amount1").onclick = function () {
  document.getElementById('input-transfer-amount').style.display = '';
  document.getElementById('input-transfer-amount1').style.display = 'none';
}