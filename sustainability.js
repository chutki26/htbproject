const shopNames = document.querySelectorAll(".shop-name");

shopNames.forEach(shopName => {
    shopName.addEventListener("click", event => {
        shopName.classList.toggle("active");
        const description = shopName.nextElementSibling;
        if(shopName.classList.contains("active")){
            description.style.maxHeight = description.scrollHeight + "px";
        }else{
            description.style.maxHeight = 0;
        }
    })
})
 