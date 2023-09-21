function getGames() {
document.getElementById("selGame").addEventListener("change", selectGame)

//declare array
let myGames = [];

fetch('Games.xml')
    .then((res) => res.text())
    .then(function (data) {
        //need help parsing XML
        let parser = (new window.DOMParser()).parseFromString(data, "text/xml");

        console.log(parser.getElementsByTagName("games").length);
        for (let i = 0; i < parser.getElementsByTagName("games").length; i++) {
        //console.log(parser.getElementsByTagname("gameName")[i].childNodes[0].nodeValue);
        gameName = parser.getElementsByTagName("gameName")[i].childNodes[0].nodeValue;
        gameCode = parser.getElementsByTagName("gameCode")[i].childNodes[0].nodeValue;
        gameCategory = parser.getElementsByTagName("gameCategory")[i].childNodes[0].nodeValue;
        gameDescription = parser.getElementsByTagName("gameDescription")[i].childNodes[0].nodeValue;
        gamePrice = parser.getElementsByTagName("gamePrice")[i].childNodes[0].nodeValue;
        gameImage = parser.getElementsByTagName("gameName")[i].childNodes[0].nodeValue;
        console.log(gameImage);
        myGames[i] = new GameClass(gameCode, gameName, gameCategory, gqmeDescription, gameQuantity, gamePrice, gameImage)
        }

        mySelect = document.getElementById("selGame");
        for (i = 0; i < myGames.length; i++){
            let myOption = document.createElement("option");
            myOption.text = myGames[i].gameCode
            myOption.value = i;
            mySelect.appendChild(myOption, null);
        }

         //trigger a change evemt for the drop down select
         mySelect.value = Math.floor(Math.random() *myGames.length);
         let event = new Event('change');
         mySelect.dispatchEvent(event);
    })//end fetch
}
//when user selects a game
function selectGame() {
    let myIndex = document.getElementById("selGame").value;
    document.getElementById("spnName").innerHTML = userGame.gameName;
    document.getElementById("spnCategory").innerHTML = userGame.gameCategory;
    document.getElementById("spnDescription").innerHTML = userGame.gameDescription;
    document.getElementById("spnQuantity").innerHTML = userGame.gameQuantity;
    document.getElementById("spnPrice").innerHTML = userGame.gamePrice;
    document.getElementById("imgGame").src = userGame.gameImage;
}    
