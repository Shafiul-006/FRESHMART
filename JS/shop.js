let products={
    data:[
        {
            productName: "Gajor",
            category: "Vegetables",
            price: "30",
            Image:"/IMAGES/Gojor.webp"
        },
        {
            productName: "Peyaj",
            category: "Vegetables",
            price: "30",
            Image:"/IMAGES/onion.avif"
        },
        {
            productName: "Bagda",
            category: "Fish",
            price: "30",
            Image:"/IMAGES/bagda.webp"
        },
        {
            productName: "Jali Kumra",
            category: "Vegetables",
            price: "30",
            Image:"/IMAGES/jali-kumra.webp"
        },
        {
            productName: "Horina Chingrii",
            category: "Fish",
            price: "199",
            Image:"/IMAGES/Hariana-chigrii.webp"
        },
        {
            productName: "Telapiya Fish",
            category: "Fish",
            price: "300",
            Image:"/IMAGES/Telapiya FIst.webp"
        },
        {
            productName: "Pabda",
            category: "Fish",
            price: "30",
            Image:"/IMAGES/pabda.webp"
        },
    ],
};

for(let i of products.data){
    //create card
    let card =document.createElement("div");

    //card should have category and should stay hidden initially..
    card.classList.add("card",i.category,"hide");
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.Image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container.
    let container = document.createElement("div");
    container.classList.add("container");

    //product name

    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);


    //price
    let price=document.createElement("h2");
    price.innerText="৳"+
i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}
//parameter passed from buttn (parameter same as category);

function filterProduct(value){
    let buttons= document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
        //loop through all cards...
        elements.forEach((element) =>{
            //display all cards on 'all' button click
            if(value=="all"){
                element.classList.remove("hide");
            }
            else{
                if(element.classList.contains(value)){
                    element.classList.remove("hide");
                }
                else{
                    //hide other element...
                    element.classList.add("hide");
                }
            }
        });
}

//Search button click
document.getElementById("search").addEventListener("click",() =>{
    //initializations
    let searchInput=document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    console.log(searchInput);
    //loop through each element.
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards...
            cards[index].classList.remove("hide");
        }
        else{
            //hide other cards...
            cards[index].classList.add("hide");
        }
    })
});


//intially display all product...
window.onload = () =>{
    filterProduct("all");
}