//=======================Phương Thức Get ================================
function getProductApi() {
    //kết nối với api (đường dẫn được backend cung cấp)
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    });
    //Xử lý thành công 
    promise.then(function (result) {
        // console.log('result --> ', result.data);
        renderRelateProduct(result.data.content);
    });

    //Xử lý thất bại
    promise.catch(function (error) {
        console.log('result --> ', error.response.data);
    });
}

//=======================Phương Thức Get By ID================================
function getProductByID(param) {
    //kết nối với api (đường dẫn được backend cung cấp)
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id='+param,
        method: 'GET',
    });
    //Xử lý thành công 
    promise.then(function (result) {
        console.log('result --> ', result.data.content);
        renderDetailProduct(result.data.content);
    });

    //Xử lý thất bại
    promise.catch(function (error) {
        console.log('result --> ', error.response.data);
    });
}


function renderRelateProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var pr = arrProduct[i];
        html += `
                <div class="col-card">
                    <div class="card">
                        <div class="header-card">
                        <img src="${pr.image}" alt="${pr.alias}" id="image" />
                        </div>
                        <div class="card-body">
                            <a class="card-title" href="#">${pr.name}</a>
                            <p class="card-text">${pr.shortDescription.length > 50 ? pr.shortDescription.slice(0,50) + '...' : pr.shortDescription}</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn-buy" id="bn-buy">Buy Now</button>
                            <p class="price-text">${pr.price}$</p>
                        </div>
                    </div>
                </div> `
        
    }
    document.querySelector('#tbl-product').innerHTML = html;
}

function renderDetailProduct(arrProduct) {
    var product = arrProduct;
    var strImg = '';
    var strNamePro = '';
    var strDescription = '';
    var strSize = '';
    var strPrice = '';
    strImg = `
            <div class="frame">
                <img src=${product.image} alt="">
            </div>  
             `;
    strNamePro = `${product.name}`;
    strDescription = `${product.description}`;
    for(var index=0; index < product.size.length; index++){
        strSize += `
                    <button class="pro-size">${product.size[index]}</button>
                   `
    }
    strPrice = `${product.price}`;
    document.querySelector('.left-box').innerHTML = strImg;
    document.querySelector('.product-name').innerHTML = strNamePro;
    document.querySelector('.description').innerHTML= strDescription;
    document.querySelector('.size').innerHTML = strSize;
    document.querySelector('.price').innerHTML = strPrice + '$';
}

//Gọi hàm khi page vừa load
window.onload = function (arrPro) {
    getProductApi();
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    getProductByID(myParam);
}