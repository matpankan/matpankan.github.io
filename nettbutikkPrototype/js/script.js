let wares = {"nintendo":[
    {"name":"The Legends of Zelda: BOTW", "price":"899", "specs":"The Legend of Zelda: Breath of the Wild er et action-eventyrspill som er utviklet av Nintendo EAD. Spillet handler om Link, som etter å ha sovet i 100 år våkner opp av en stemme. Stemmen leder Link mens han utforsker eventyrverden Hyrule"},
    {"name":"Pokemon Scarlet", "price":"549", "specs":"Pokémon Scarlet og Pokémon Violet er videorollespill som utviklet av Game Freak og utgitt av Nintendo og The Pokémon Company til Nintendo Switch. Spillene ble utgitt samtidig den 18. november 2022 og introduserer den niende generasjonen av Pokémon-spill."},
    {"name":"Paper Mario", "price":"129", "specs":"Paper Mario is a video game series and part of the Mario franchise, developed by Intelligent Systems and produced by Nintendo. It combines elements from the role-playing, action-adventure, and puzzle genres. Players control a paper cutout version of Mario, sometimes with allies, on a quest to defeat the antagonist, primarily Bowser."},
    {"name":"Super Smash Bros. Ultimate", "price":"299", "specs":"Super Smash Bros. Ultimate er et slåssespill utviklet av Bandai Namco Studios og Sora Ltd., og utgitt av Nintendo til Nintendo Switch. Det ble utgitt internasjonalt den 7. desember 2018. Spillet ble først annonsert 8. mars 2018. Tittelen og klipp fra spillet ble kunngjort 11. juni 2018."},
    {"name":"Nintendo Switch", "price":"3199", "specs":"The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as 'a home console that you can take with you on the go'."}
]};

let highlightedProduct = ""

let allProducts = document.getElementsByClassName("content-box");
let product0 = allProducts[0]
let product1 = allProducts[1]
let product2 = allProducts[2]

let arrowBox = document.getElementById("arrow");

product0.addEventListener("click", function(){makePage(product0, 0);})
product1.addEventListener("click", function(){makePage(product1, 1);})
product2.addEventListener("click", function(){makePage(product2, 2);})

arrowBox.addEventListener("click", backtopage)

function makePage(product, number){
    highlightedProduct=product
    let text = document.getElementsByClassName("text")
    document.getElementById("content-part").style.height="100%"
    document.getElementById("content-part").style.fontSize="200%"
    document.getElementById("sokefelt").style.display="none"
    document.getElementById("arrow").style.display="flex"

    //coden for å skjule og vise bokser
    for (let i = 0; i < allProducts.length; i++) {
        allProducts[i].style.display="none"
    }
    product.style.display="flex"
    product.style.height="40%"    
    product.style.width="95%"  
    document.getElementById("product-description").style.display="block"


    //etter dette kommer koden for å sette inn riktig specs
    let proName = text[number]
    proName=proName.textContent
    for (let a = 0; a < wares.nintendo.length; a++) {
        if(proName===wares.nintendo[a].name){
            document.getElementById("price").innerText=`${wares.nintendo[a].price},-`
            document.getElementById("description").innerText=`${wares.nintendo[a].specs}`
        }
    }
}

function backtopage(){
    document.getElementById("content-part").style.height="90%"
    document.getElementById("content-part").style.fontSize="100%"
    document.getElementById("sokefelt").style.display="flex"
    document.getElementById("arrow").style.display="none"

    //coden for å skjule og vise bokser
    for (let i = 0; i < allProducts.length; i++) {
        allProducts[i].style.display="block"
    }
    highlightedProduct.style.height="30%"    
    highlightedProduct.style.width="80%"  
    document.getElementById("product-description").style.display="none"
}