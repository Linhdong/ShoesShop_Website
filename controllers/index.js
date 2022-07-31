/// call api lấy dữ liệu từ back-end
function getProductApi() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET"
    });
    // Xử lý thành công
    promise.then(function (result) {
        console.log('result', result.data.content);
        renderGridProduct(result.data.content);
    });
    // Xử lý thất bại
    promise.catch(function (error) {
        console.log('result', error.response.data);
    })
};

function renderGridProduct(arrProduct) {
    var html = "";
    for (var i = 0; i < arrProduct.length; i++) {
        var product = arrProduct[i];
        html += `<div class="col-4 prod-slide-grid">
                    <div class="product__content">
                        <div class="product-img">
                            <img src="${product.image}" alt="${product.alias}" id="image" />
                        </div>
                        <div class="product-info">
                            <a href="./detail.html?id=${product.id}">
                                <h5 id="name">${product.name}</h5>
                            </a>
                            <div>
                                <p id="shortDescription">${product.shortDescription}</p>
                            </div>
                        </div>
                        <div class="product-footer row px-3">
                            <button id="btnBuyNow" class="col-6">Buy now</button>
                            <p class="col-6" id="price">${product.price}$</p>
                        </div>
                    </div>
                </div>`
    }
    document.querySelector("#productGrid").innerHTML = html;
}

window.onload = function () {
    getProductApi();
}