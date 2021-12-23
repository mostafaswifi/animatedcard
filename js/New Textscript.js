const btn = document.querySelector('.btn')
,productInfo = document.querySelector('.product-info'),
mainProduct = document.querySelector('.main-product'),
imgPosition = document.querySelectorAll('.position img');
console.log(imgPosition);

btn.addEventListener('click',()=>{
  productInfo.classList.toggle('mover')
  mainProduct.classList.toggle('resizer')
})

imgPosition.forEach(img=>{
  img.addEventListener('click',(e)=>{
    mainProduct.src=e.target.src
  })
})