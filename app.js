let form = document.getElementById("form-qr");
form.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key == "Enter") {
        console.log('scsdcd');
        let activeElm = document.activeElement;
        let content = document.getElementById("input-transfer-content");
        let amount = document.getElementById("input-transfer-amount");
        if (amount) {
            amount = Number((amount.toString()).replace('đ', '').split(',').join(''));
        }
        if (activeElm == content && content.value != "" && amount.value == "") {
            amount.focus();
            event.preventDefault();
        }
    }
});
document.getElementById("input-transfer-amount").onblur = function (event) {
    if (!event?.relatedTarget?.id) {
        if (this.value) {
            this.type = 'text';
            this.value = parseFloat(this.value.replace(/,/g, ""))
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ';
        }
    }

}
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
        let imageUrl = `https://api.huuhao.club/${bankName}/${bankNumber}/${amount}/${encodeURI(content)}/qr_only_beck-company.png?accountName=${encodeURI(accountName)}`;
        console.log(imageUrl);
        img.src = imageUrl;
    }
    document.getElementById("input-transfer-amount").type = 'text';
    if (amount) {
        document.getElementById("input-transfer-amount").type='text';
        document.getElementById("input-transfer-amount").value = parseFloat(amount.toString().replace(/,/g, ""))
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ';
            document.getElementById("input-transfer-amount").pattern = "*";

    }
});


document.getElementById("input-transfer-amount").onclick = function () {
    this.value = Number((this.value).replace('đ', '').split(',').join(''));
    this.type = 'number';
    // console.log('csdcsdcsd');
}