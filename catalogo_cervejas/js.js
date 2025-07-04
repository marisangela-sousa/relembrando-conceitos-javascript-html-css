const container = document.querySelector(".container-beers");

fetch("https://api.sampleapis.com/beers/ale")
.then((response) => {
    return response.json()
})
.then((beers) => {
    
    beers.forEach((beer) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = beer.image;

        const title = document.createElement("h2");
        title.innerHTML = beer.name;

        const price = document.createElement("p");
        price.innerHTML = beer.price;

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(price);
        container.appendChild(card);


    })
})
.catch(e => {
    console.log(e);
})
