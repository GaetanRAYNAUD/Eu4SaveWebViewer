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
    let session = data.players[i].sessions[data.players[i].sessions.length - 1];
    
    currCountry.querySelector("#rank").src = './images/government_ranks/' + session.rank + '.png';
    currCountry.querySelector("#pseudo").innerHTML = data.players[i].pseudo;
    currCountry.querySelector("#flag").src = './images/flags/' + session.tag + '.png';
    currCountry.querySelector("#culture").innerHTML = session.culture;
    currCountry.querySelector("#capital").innerHTML = session.capital;
    currCountry.querySelector("#government").innerHTML = session.government;
    currCountry.querySelector("#religion").innerHTML = session.religion;
    currCountry.querySelector("#religionImg").src = './images/religions/' + session.religion + '.png';
    currCountry.querySelector("#dev").innerHTML = session.dev.toString() + ' (' + (session.devRank === 1 ? '1er)' : (session.devRank + 'ième)'));
    currCountry.querySelector("#income").innerHTML = session.income.toString() + ' (' + (session.incomeRank === 1 ? '1er)' : (session.incomeRank + 'ième)'));
    currCountry.querySelector("#manpower").innerHTML = session.manpower.toString() + ' (' + (session.manpowerRank === 1 ? '1er)' : (session.manpowerRank + 'ième)'));
    currCountry.querySelector("#forceLimit").innerHTML = session.forceLimit.toString() + ' (' + (session.forceLimitRank === 1 ? '1er)' : (session.forceLimitRank + 'ième)'));
    currCountry.querySelector("#nbProv").innerHTML = session.nbProv.toString() + ' (' + (session.nbProvRank === 1 ? '1er)' : (session.nbProvRank + 'ième)'));
    currCountry.querySelector("#losses").innerHTML = session.losses.toString() + ' (' + (session.lossesRank === 1 ? '1er)' : (session.lossesRank + 'ième)'));
    currCountry.querySelector("#loan").innerHTML = session.loan.toString() + ' (' + (session.loanRank === 1 ? '1er)' : (session.loanRank + 'ième)'));
    currCountry.querySelector("#professionalism").innerHTML = session.professionalism + '%' + ' (' + (session.professionalismRank === 1 ? '1er)' : (session.professionalismRank + 'ième)'));
    currCountry.querySelector("#innovativeness").innerHTML = session.innovativeness + '%' + ' (' + (session.innovativenessRank === 1 ? '1er)' : (session.innovativenessRank + 'ième)'));

    currCountry.querySelector("#feudalism").classList.replace('institutionNotEmbraced',
        session.institutions.feudalism ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#renaissance").classList.replace('institutionNotEmbraced',
        session.institutions.renaissance ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#colonialism").classList.replace('institutionNotEmbraced',
        session.institutions.colonialism ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#printingPress").classList.replace('institutionNotEmbraced',
        session.institutions.printingPress ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#globalTrade").classList.replace('institutionNotEmbraced',
        session.institutions.globalTrade ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#manufactories").classList.replace('institutionNotEmbraced',
        session.institutions.manufactories ? 'institutionEmbraced' : 'institutionNotEmbraced');
    currCountry.querySelector("#enlightenment").classList.replace('institutionNotEmbraced',
        session.institutions.enlightenment ? 'institutionEmbraced' : 'institutionNotEmbraced');

    if(data.players[i].sessions.length < data.nbSessions) {
        currCountry.classList.add("deadCountry");

        let deadCountryText = document.createElement("div");
        deadCountryText.innerHTML = 'Mort session ' + (data.players[i].sessions.length + 1);
        deadCountryText.classList.add("deadCountryText");
        currCountry.appendChild(deadCountryText);
    }
};