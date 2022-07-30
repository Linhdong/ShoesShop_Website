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

function renderRelateProduct(arrProduct) {
    var html = '';
    for (var i = 0; i <= arrProduct.length; i++) {
        var pr = arrProduct[i];
        // html += `
        //         <div class="col-card">
        //             <div class="card">
        //                 <div class="header-card">
        //                 <img src="${pr.image}" alt="${pr.alias}" id="image" />
        //                 </div>
        //                 <div class="card-body">
        //                     <a class="card-title" href="#">${pr.name}</a>
        //                     <p class="card-text">${pr.shortDescription}</p>
        //                 </div>
        //                 <div class="card-footer">
        //                     <button class="btn-buy" id="bn-buy">Buy Now</button>
        //                     <p class="price-text">${pr.price}</p>
        //                 </div>
        //             </div>
        //         </div> `
        
    }
    // document.querySelector('#tbl-product').innerHTML = html;
}

//Gọi hàm khi page vừa load
window.onload = function () {
    getProductApi();
}