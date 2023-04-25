var Cloth = document.getElementById("Cloth");
var Shoes = document.getElementById("Shoes");
var Jewelry = document.getElementById("Jewelry");
var Accessory = document.getElementById("Accessory");
var rootProduct = document.getElementById("product");
var Product=[]
function Purchase(product){
    //localStorage.setItem(product, 1);
    var productInfo = product.split(',');
    var category;
    if( productInfo[1]==1){
        category="Clothes";
    }
    else if( productInfo[1]==2){
        category="Shoes";
    }
    else if( productInfo[1]==2){
        category="Jewelry";
    }
    else{
        category="Accessory";
    }
    var prod = localStorage.getItem(productInfo[0]);
    if(prod ==null){
        localStorage.setItem(productInfo[0], (1+','+productInfo[0]+','+category+','+productInfo[2]));
    }
    else{
        prod = prod.split(',');
        
        localStorage.setItem(productInfo[0], ((Number(prod[0])+1)+','+productInfo[0]+','+category+','+(Number(prod[3])+Number(productInfo[2]))));
    }
    console.log(localStorage.getItem(productInfo[0]))
}

function load_data(id){
    Category=[];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Data/category.json");
    xhr.send("");
    var product = ""
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = xhr.response;
                var data = JSON.parse(response);
                var star = [];
                for (let index = 0; index < data.length; index++) {
                    star=[];
                    if (data[index].categoryId == id) {
                        if (data[index].stars == 5) {
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                        } else if (data[index].stars == 4) {
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                        } else if (data[index].stars == 3) {
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                        } else {
                            star.push("fa fa-star text-primary mr-1");
                            star.push("fa fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                            star.push("far fa-star text-primary mr-1");
                        }
                        var infoProduct=data[index].title +","+data[index].CategoryId+','+data[index].price;
                        product += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                      <div class="product-item bg-light mb-4">
                          <div class="product-img position-relative overflow-hidden">
                              <img class="img-fluid w-100" src="${data[index].src}" alt="">
                              <div class="product-action">
                                  <button onclick="Purchase('${infoProduct}')" class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></button>
                                  <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                              </div>
                          </div>
                          <div class="text-center py-4">
                              <a class="h6 text-decoration-none text-truncate" href="">${data[index].title}</a>
                              <div class="d-flex align-items-center justify-content-center mt-2">
                                  <h5>$ ${data[index].price}</h5>
                              </div>
                              <div class="d-flex align-items-center justify-content-center mb-1">
                                  <small class="${star[0]}"></small>
                                  <small class="${star[1]}"></small>
                                  <small class="${star[2]}"></small>
                                  <small class="${star[3]}"></small>
                                  <small class="${star[4]}"></small>
                                  <small>(99)</small>
                              </div>
                          </div>
                      </div>
                  </div>`;
                }
            }
            rootProduct.innerHTML = product;
        }
}
}
}
load_data(1);
Cloth.addEventListener('click', function () {
    Cloth.style.backgroundColor = "darkgray";
    Shoes.style.backgroundColor = "white";
    Jewelry.style.backgroundColor = "white";
    Accessory.style.backgroundColor = "white";
     return load_data(1);
 })

Shoes.addEventListener('click', function () {
    Cloth.style.backgroundColor = "white";
    Shoes.style.backgroundColor = "darkgray";
    Jewelry.style.backgroundColor = "white";
    Accessory.style.backgroundColor = "white";
    return load_data(2);
 })

 Jewelry.addEventListener('click', function () {
    Cloth.style.backgroundColor = "white";
    Shoes.style.backgroundColor = "white";
    Jewelry.style.backgroundColor = "darkgray";
    Accessory.style.backgroundColor = "white";
    return load_data(3);
 })

 Accessory.addEventListener('click', function () {
    Shoes.style.backgroundColor = "white";
    Cloth.style.backgroundColor = "white";
    Jewelry.style.backgroundColor = "white";
    Accessory.style.backgroundColor = "darkgray";
    return load_data(4);
 })

document.getElementById("View_Cart").addEventListener('click',function(){
   
    document.querySelector('.bg_cart').style.opacity='1';
    document.querySelector('html').style.overflow='hidden';
    document.querySelector('tbody').innerHTML =''
    for (var i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);
        var prod = localStorage.getItem(key).split(',');
        if(prod[1]!=undefined){
            document.querySelector('tbody').innerHTML +=` <tr >
            <td class="table-info">${prod[1]}</td>
            <td class="table-info">${prod[2]}</td>
            <td class="table-info">${prod[0]}</td>
            <td class="table-info">${prod[3]}</td>
          </tr>`
        }
    }      
   
})
document.querySelector('.btn-close').addEventListener('click',function(){
    document.querySelector('.bg_cart').style.opacity='0';
    document.querySelector('html').style.overflow='visible';
})
