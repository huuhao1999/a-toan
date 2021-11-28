// Jquery Dependency

// $("input[data-type='currency']").on({
//     keyup: function() {
//       formatCurrency($(this));
//     },
//     blur: function() { 
//       formatCurrency($(this), "blur");
//     }
// });


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

// function formatNumber(n) {
//   // format number 1000000 to 1,234,567
//   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// }


// function formatCurrency(input, blur) {
//   // appends $ to value, validates decimal side
//   // and puts cursor back in right position.

//   // get input value
//   var input_val = input.val();

//   // don't validate empty input
//   if (input_val === "") { return; }

//   // original length
//   var original_len = input_val.length;

//   // initial caret position 
//   var caret_pos = input.prop("selectionStart");

//   // check for decimal
//   if (input_val.indexOf(".") >= 0) {

//     // get position of first decimal
//     // this prevents multiple decimals from
//     // being entered
//     var decimal_pos = input_val.indexOf(".");

//     // split number by decimal point
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);

//     // add commas to left side of number
//     left_side = formatNumber(left_side);

//     // validate right side
//     right_side = formatNumber(right_side);

//     // On blur make sure 2 numbers after decimal
//     if (blur === "blur") {
//       right_side += "00";
//     }

//     // Limit decimal to only 2 digits
//     right_side = right_side.substring(0, 2);

//     // join number by .
//     input_val = "$" + left_side + "." + right_side;

//   } else {
//     // no decimal entered
//     // add commas to number
//     // remove all non-digits
//     input_val = formatNumber(input_val);
//     input_val = input_val+"đ";
//   }

//   // send updated string to input
//   input.val(input_val);

//   // put caret back in the right position
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
//   input[0].setSelectionRange(caret_pos, caret_pos);
// }








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
// document.getElementById("input-transfer-amount").onblur = function (event) {
//     if (!event?.relatedTarget?.id) {
//         if (this.value) {
//             this.type = 'text';
//             this.value = parseFloat(this.value.replace(/,/g, ""))
//                 .toFixed(0)
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ';
//         }
//     }

// }
form.addEventListener("submit", (event) => {
  console.log('vo nhanh 2');
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
    let imageUrl = `https://api.vietqr.io/${bankName}/${bankNumber}/${amount}/${encodeURI(content)}/qr_only_beck-company.png?accountName=${encodeURI(accountName)}`;
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