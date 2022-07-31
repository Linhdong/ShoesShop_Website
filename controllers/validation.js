/**
 * 
 * @param {*} value thuộc tính của nhân viên
 * @param {*} selectorError  id của hiện thị lỗi trên trang web
 * @param {*} name Tên đối tượng đang được xét
 * @returns nếu đúng thì true còn sai thì false
 */
function kiemTraTen(value, selectorError, name) {
    var regexLetters = /^[A-Z a-z]+$/;
    if (value.trim() != '') {
        if (regexLetters.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        } else {
            document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự từ A - Z';
            return false;
        }
    }
    document.querySelector(selectorError).innerHTML = name + ' không được để trống !!';
    return false;
}

/**
 * 
 * @param {*} value thuộc tính của nhân viên
 * @param {*} selectorError id của hiện thị lỗi trên trang web
 * @param {*} name Tên đối tượng đang được xét
 * @returns nếu đúng thì true còn sai thì false
 */
function kiemTraEmail(value, selectorError, name) {

    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.trim() != '') {
        if (regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        } else {
            document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng <br /> Ví dụ: email@gmail.com';
            return true;
        }
    }
    document.querySelector(selectorError).innerHTML = name + ' không được để trống !!';
    return false;
}

/**
 * 
 * @param {*} value thuộc tính của đối tượng 
 * @param {*} selectorError id của hiện thị lỗi trên trang web
 * @param {*} name thuộc tính của đối tượng đang được xét
 * @param {*} minLenght độ dài ít nhất
 * @param {*} maxLenght độ dài lớn nhất
 * @returns 
 */
function kiemTraMatKhau(value, selectorError, name, minLenght, maxLenght) {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.trim() != '') {
        console.log('Độ dài mật khẩu: ', value.length);
        if (value.length <= maxLenght && value.length >= minLenght) {
            if (regexPassword.test(value)) {
                document.querySelector(selectorError).innerHTML = '';
                return true;
            } else {
                document.querySelector(selectorError).innerHTML = name + ' chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
                return false;
            }
        } else {
            document.querySelector(selectorError).innerHTML = name + ' phải có ít từ ' + minLenght + ' đến ' + maxLenght;
            return false;
        }

    }
    document.querySelector(selectorError).innerHTML = name + '  không được để trống !!';
    return false;
}
