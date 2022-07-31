export function Validation() {
    this.kiemTraRong = function (value, selectorError, selectorRequired) {
        if (value.trim() === "") {
            document.querySelector(selectorError).innerHTML = "Không được bỏ trống trường này!";
            return false;
        }
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorRequired).style.display = "none";
        return true;
    };
    this.kiemTraKyTu = function (value, selectorError, selectorRequired) {
        var regexLetter = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorRequired).style.display = "none";
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Tất cả phải là ký tự!';
        return false;
    };
    this.kiemTraSo = function (value, selectorError, selectorRequired) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorRequired).style.display = "none";
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Số điện thoại phải chỉ bao gồm số!';
        return false;
    };
    this.kiemTraEmail = function (value, selectorError, selectorRequired) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorRequired).style.display = "none";
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Email không hợp lệ!';
        return false;
    };
    this.kiemTraPassConfirm = function (pwValue, pwConfirmValue, selectorError, selectorRequired) {
        if (pwValue !== pwConfirmValue) {
            document.querySelector(selectorError).innerHTML = "Mật khẩu nhập lại chưa đúng!";
            return false;
        } else {
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorRequired).style.display = "none";
            return true;
        }
    }
}