import { products } from "./products.js";



function createProduct(parent, imgUrl, productTitle, textPrice) {
  const product = document.createElement("div");
  product.className = "product";

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

// fetch("https://fakestoreapi.com/products") // <== importare la lista prodotti in modo remoto
//   .then((response) => response.json())
//   .then((data) => {
//     products = data;
//     renderProducts(wrapperProducts);
//     renderProductsAZ(wrapperProducts);
//     renderProductsPrice(wrapperProducts);
//   });




const wrapperProducts = document.querySelector(".wrapper__products");
const sortAZ = document.querySelector('#sort__AZ')
const sortPrice = document.querySelector('#sort__price')



function renderProducts(parent) {
  products.map((product) => {
    createProduct(parent, product.image, product.title, product.price);
  });
}


function renderProductsAZ(parent) {

  sortAZ.addEventListener('click', () => {
    removeAllChildNodes(wrapperProducts)
    products.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 0))
    renderProducts(parent)
  })
}

function renderProductsPrice(parent) {

  sortPrice.addEventListener('click', () => {
    removeAllChildNodes(wrapperProducts)
    products.sort((a, b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0))
    renderProducts(parent)
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

renderProducts(wrapperProducts);
renderProductsAZ(wrapperProducts);
renderProductsPrice(wrapperProducts);




