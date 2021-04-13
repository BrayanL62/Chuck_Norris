let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    let titre = document.querySelector("#title");
    let element = document.querySelector("#name");
    let element_select = element.value;
    console.log(element_select); 
    titre.innerHTML = "Bonjour... " + element_select;

    
});