window.onload = function () {
    let mapRef = document.getElementById("mapRef");
    let mapImg = document.getElementById("mapImg");

    mapRef.href = './images/sessions/session' + data.nbSessions + '.jpg';
    mapImg.src = './images/sessions/session' + data.nbSessions + '.jpg';
};

let addCoutries = function () {
    let countries = document.getElementById("countries");
    let country = document.getElementById("country");
    let currCountry;

    for(const [i] of data.players.entries()) {
        countries.appendChild(country.cloneNode(true));

        currCountry = countries.lastChild;
        currCountry.id = 'country' + i;

        fillCountry(currCountry, i);
    }

    countries.removeChild(countries.firstChild);
    countries.removeChild(countries.firstChild);
};

let fillCountry = function (currCountry, i) {
    currCountry.querySelector("#rank").src = './images/government_ranks/' + data.players[i].sessions[data.players[i].sessions.length - 1].rank + '.png';
    currCountry.querySelector("#pseudo").innerHTML = data.players[i].pseudo;
    currCountry.querySelector("#flag").src = './images/flags/' + data.players[i].sessions[data.players[i].sessions.length - 1].tag + '.png';
    currCountry.querySelector("#culture").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].culture;
    currCountry.querySelector("#capital").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].capital;
    currCountry.querySelector("#government").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].government;
    currCountry.querySelector("#religion").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].religion;
    currCountry.querySelector("#religionImg").src = './images/religions/' + data.players[i].sessions[data.players[i].sessions.length - 1].religion + '.png';
    currCountry.querySelector("#dev").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].dev;
    currCountry.querySelector("#income").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].income;
    currCountry.querySelector("#manpower").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].manpower;
    currCountry.querySelector("#forceLimit").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].forceLimit;
    currCountry.querySelector("#nbProv").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].nbProv;
    currCountry.querySelector("#losses").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].losses;
    currCountry.querySelector("#loan").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].loan;
    currCountry.querySelector("#professionalism").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].professionalism +'%';
    currCountry.querySelector("#innovativeness").innerHTML = data.players[i].sessions[data.players[i].sessions.length - 1].innovativeness +'%';

    currCountry.querySelector("#feudalism").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.feudalism ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#renaissance").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.renaissance ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#colonialism").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.colonialism ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#printingPress").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.printingPress ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#globalTrade").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.globalTrade ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#manufactories").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.manufactories ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#enlightenment").classList.replace('institutionNotEmbraced',
        data.players[i].sessions[data.players[i].sessions.length - 1].institutions.enlightenment ? 'institutionEmbraced' : 'institutionNotEmbraced');

    if(data.players[i].sessions.length < data.nbSessions) {
        currCountry.classList.add("deadCountry");

        let deadCountryText = document.createElement("div");
        deadCountryText.innerHTML = 'Mort session ' + (data.players[i].sessions.length + 1);
        deadCountryText.classList.add("deadCountryText");
        currCountry.appendChild(deadCountryText);
    }
};