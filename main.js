const API = "/products.json";

async function getProducts(){
    const response = await fetch(API);
    const data = await response.json();
    const products = data.products; 


    const h1 = document.getElementById("webshopName");
    h1.innerHTML = data.shopName;

    for(const product of data.products){
            console.log(product.name);
    }

    products.forEach(CreateCards);
    

}

getProducts();
function CreateCards(product){
        const mainContent = document.getElementById("productContainer");
            const header = document.getElementById("header");

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "col-md-3"; 

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const img = document.createElement("img");
        img.src = product.img;
        img.classList.add("card-img-top");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = product.name;

        const cardText = document.createElement("p");
        cardText.classList.add("card-price");
        cardText.innerHTML = product.price;

        const button = document.createElement("a");
        button.classList.add("btn", "btn-primary");
        button.innerHTML = "Reservation";
        
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        mainContent.appendChild(card);

            button.addEventListener("click", () =>{
        const alert = document.createElement("div");
        alert.classList.add("alert", "alert-success");
        alert.setAttribute("role", "alert");
        alert.innerHTML = "A simple success alert—check it out!";
        header.appendChild(alert);
    });
    }