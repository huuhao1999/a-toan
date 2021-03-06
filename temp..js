<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    <title>Beck sport</title>
    <link rel="stylesheet" href="app.css">
</head>

<body class="flow">
    <div class="container-parent">
        <section class="header">
            <img class="logo" src="img/logo.png" alt="beck sport">
        </section>

        <form class="qr-form" id="form-qr" style="word-spacing: 5px;">
            <div class="field" style="margin-bottom: 5px;">
                <div>
                    <label class="field__label" for="input-account-name">Chủ TK: </label>
                    <input class="field__control1" type="text" id="input-account-name" value="Vũ Đình Toàn" readonly>
                </div>
            </div>

            <div class="field field1">
                <label class="field__label" for="input-transfer-content">Nội dung: </label>
                <input class="field__control field__amout__content" type="text" id="input-transfer-content"
                    name='content'>
            </div>
            <div class="field">
                <div class="field1">
                    <label class="field__label" for="input-transfer-amount">Số tiền: </label>
                    <input class="field__control field__amout__content" pattern="[0-9]*" type="number"
                        id="input-transfer-amount" name='amount'>
                </div>
            </div>
            <button class="field__submit" type="submit" id="field__submit"
                style="background-color: none;height: 30px;border-radius: 10px;width: 100%;margin: auto;background: none; border: none;">
                <div
                    style="background-color: black;height: 3px;border-radius: 10px;width: 50%;margin: auto;margin-top: 26px;">
                </div>

            </button>

        </form>

        <section class="banks">
            <ul>
                <li>
                    <div>
                        <dt class="bank-name">VIETCOM</dt>
                        <dd class="bank-number" style="text-decoration: none !important; color: black !important;">1111
                            51 41 31</dd>
                    </div>
                </li>
                <li>
                    <div>
                        <dt class="bank-name">MBBANK</dt>
                        <dd class="bank-number" style="text-decoration: none !important; color: black !important;">1111
                            51 41 31</dd>
                    </div>
                </li>
                <li>
                    <div>
                        <dt class="bank-name">VPBANK</dt>
                        <p class="bank-number" style="text-decoration: none !important; color: black !important;">1111
                            51 41 31</p>
                    </div>

                </li>
            </ul>
        </section>

        <section class="qr" style="margin-top: 27px">
            <ul class="banks1">
                <li>
                    <dt class="bank-name" style="    height: 35px;">VIETQR</dt>
                    
                </li>
            </ul>
            <img class="qr-image" id="qr-image" src="img/qr.svg" alt="qr image">
            <ul class="qr-info info-temp_hao">
                <li>Dùng bất kỳ app ngân hàng quét mã QR này, ae sẽ không cần nhập thủ công các thông tin ở bên trên
                    </table>
                </li>
                <li>Vui lòng để nội dung CK đúng theo hướng dẫn</li>
                <li>Đây không phải mã VNPAY</li>
            </ul>
        </section>
    </div>
    <script src="./app.js"></script>
</body>

</html>