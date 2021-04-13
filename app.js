let btn = document.querySelector("#btn");
let array = [ "Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.", "Un jour Chuck Norris a eu un zero en latin, depuis c'est une langue morte.", "L'avenir se demande parfois ce que Chuck Norris lui réserve.", "Une seule Tortue Ninja à osé défié Chuck Norris. Maintenant on l'appelle Franklin.", "Chuck Norris ne se masturbe jamais. Chuck Norris est inébranlable.", "Chuck Norris n'a pas de père. On ne nique pas la mère de Chuck Norris.", "Les samouraïs tuent des mouches avec leurs sabres... Chuck Norris, lui, tue des samouraïs avec des mouches", 'Un jour un mec a refuser de filer une clope à Chuck Norris. Depuis, on prévient sur tous les paquets que "Fumer tue".', "Chuck Norris ne ment pas, c'est la vérité qui se trompe.", "Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies."
]

// function generateQuote() {
//     let quote = document.querySelector("p");
//     let randomQuote = array[Math.floor(Math.random() * 10)];
//     console.log(quote);
//     console.log(randomQuote);

// }

btn.addEventListener("click", function(generateQuote) {
    console.log("coucou");
    // console.log(array[Math.floor(Math.random() * 10)]);
    let quote = document.querySelector("p");
    let randomQuote = array[Math.floor(Math.random() * 10)];
    console.log(quote);
    console.log(randomQuote);
    quote.innerHTML = randomQuote;
});

