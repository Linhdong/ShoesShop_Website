import { User } from "../models/User.js";
import { Validation } from "../models/Validation.js";

// Phương thức POST: Thêm user
document.querySelector("#btn-submit").onclick =
    function () {
        // {
        //     "email": "string",
        //     "password": "string",
        //     "name": "string",
        //     "gender": true,
        //     "phone": "string"
        // }
        // Lấy thông tin user đúng format back-end quy định
        let user = new User();
        let validate = new Validation();
        user.email = document.querySelector("#email").value;
        validate.kiemTraRong(user.email, "#error_required_email", "#required_email");
        validate.kiemTraEmail(user.email, "#error_valid_email", "#required_email");

        user.password = document.querySelector("#password").value;
        validate.kiemTraRong(user.password, "#error_required_password", "#required_password");

        user.name = document.querySelector("#name").value;
        validate.kiemTraRong(user.name, "#error_required_name", "#required_name");
        validate.kiemTraKyTu(user.name, "#error_all-letter_name", "#required_name");

        user.phone = document.querySelector("#phone").value;
        validate.kiemTraRong(user.phone, "#error_required_phone", "#required_phone");
        validate.kiemTraSo(user.phone, "#error_all-number_phone", "#required_phone")

        user.gender = document.querySelector("#gender input").checked;

        user.password_confirm = document.querySelector("#password_confirm").value;
        validate.kiemTraRong(user.password_confirm, "#error_required_password_confirm", "#required_password_confirm")
        validate.kiemTraPassConfirm(user.password, user.password_confirm, "#error_diff_password_confirm", "#required_password_confirm");
        // console.log('user', user);

        // Gọi api
        var promise = axios({
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            data: user
        });
        // Xử lý thành công
        promise.then(function (result) {
            console.log('resutl', result.data.content);
        });
        // Xử lý thất bại
        promise.catch(function (error) {
            console.log('error', error.response.data);
        });
    }