let countryPlate;

window.onload = function () {
    google.charts.load('current', {'packages': ['corechart', 'bar', 'table', 'controls']});

    countryPlate = document.getElementById("countryPlate");

    fillListPlayers();
    fillCountry(countryPlate, 0);
};

let fillListPlayers = function () {
    let i = 0;
    let listPlayers = document.getElementById("listPlayers");

    data.players.forEach((player) => {
        let option = document.createElement("option");
        option.text = player.pseudo;
        option.value = i;
        listPlayers.add(option);
        i++;
    });
};

let changePlayer = function (num) {
    fillCountry(countryPlate, num);
};