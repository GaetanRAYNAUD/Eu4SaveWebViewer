let countryPlate;

let chartRank;
let chartDev;
let chartIncome;
let chartManpower;
let chartForceLimit;
let chartNbProvinces;
let chartLosses;
let chartProfessionalism;

let dataRank;
let dataDev;
let dataIncome;
let dataManpower;
let dataForceLimit;
let dataNbProvinces;
let dataLosses;
let dataProfessionalism;

window.onload = function () {
    google.charts.load('current', {'packages': ['corechart', 'bar', 'table', 'line']});
    google.charts.setOnLoadCallback(init);
};

let init = function () {
    countryPlate = document.getElementById("countryPlate");

    fillListPlayers();

    let chartRankDiv = document.getElementById('chart-Rank');
    let chartDevDiv = document.getElementById('chart-Dev');
    let chartIncomeDiv = document.getElementById('chart-Income');
    let chartManpowerDiv = document.getElementById('chart-Manpower');
    let chartForceLimitDiv = document.getElementById('chart-ForceLimit');
    let chartNbProvincesDiv = document.getElementById('chart-NbProvinces');
    let chartLossesDiv = document.getElementById('chart-Losses');
    let chartProfessionalismDiv = document.getElementById('chart-Professionalism');

    chartRank = new google.visualization.LineChart(chartRankDiv);
    chartDev = new google.visualization.ColumnChart(chartDevDiv);
    chartIncome = new google.visualization.ColumnChart(chartIncomeDiv);
    chartManpower = new google.visualization.ColumnChart(chartManpowerDiv);
    chartForceLimit = new google.visualization.ColumnChart(chartForceLimitDiv);
    chartNbProvinces = new google.visualization.ColumnChart(chartNbProvincesDiv);
    chartLosses = new google.visualization.ColumnChart(chartLossesDiv);
    chartProfessionalism = new google.visualization.ColumnChart(chartProfessionalismDiv);

    dataRank = new google.visualization.DataTable();
    dataDev = new google.visualization.DataTable();
    dataIncome = new google.visualization.DataTable();
    dataManpower = new google.visualization.DataTable();
    dataForceLimit = new google.visualization.DataTable();
    dataNbProvinces = new google.visualization.DataTable();
    dataLosses = new google.visualization.DataTable();
    dataProfessionalism = new google.visualization.DataTable();

    dataRank.addColumn('string', 'Sessions');
    dataRank.addColumn('number', 'Classement développement');
    dataRank.addColumn({type: 'number', role: 'annotation'});
    dataRank.addColumn('number', 'Classement revenue');
    dataRank.addColumn({type: 'number', role: 'annotation'});
    dataRank.addColumn('number', 'Classement réserves militaire');
    dataRank.addColumn({type: 'number', role: 'annotation'});
    dataRank.addColumn('number', 'Classement limite terrestre');
    dataRank.addColumn({type: 'number', role: 'annotation'});

    dataDev.addColumn('string', 'Sessions');
    dataDev.addColumn('number', 'Développement');
    dataDev.addColumn({type: 'string', role: 'annotation'});

    dataIncome.addColumn('string', 'Sessions');
    dataIncome.addColumn('number', 'Revenue');
    dataIncome.addColumn({type: 'string', role: 'annotation'});

    dataManpower.addColumn('string', 'Sessions');
    dataManpower.addColumn('number', 'Réserves militaire');
    dataManpower.addColumn({type: 'string', role: 'annotation'});

    dataForceLimit.addColumn('string', 'Sessions');
    dataForceLimit.addColumn('number', 'Limite terrestre');
    dataForceLimit.addColumn({type: 'string', role: 'annotation'});

    dataNbProvinces.addColumn('string', 'Sessions');
    dataNbProvinces.addColumn('number', 'Nombre de provinces');
    dataNbProvinces.addColumn({type: 'string', role: 'annotation'});

    dataLosses.addColumn('string', 'Sessions');
    dataLosses.addColumn('number', 'Pertes');
    dataLosses.addColumn({type: 'string', role: 'annotation'});

    dataProfessionalism.addColumn('string', 'Sessions');
    dataProfessionalism.addColumn('number', 'Professionnalisme');
    dataProfessionalism.addColumn({type: 'string', role: 'annotation'});

    changePlayer(0);
};

let cleanTables = function () {
    dataRank.removeRows(0, dataRank.getNumberOfRows());
    dataDev.removeRows(0, dataDev.getNumberOfRows());
    dataIncome.removeRows(0, dataIncome.getNumberOfRows());
    dataManpower.removeRows(0, dataManpower.getNumberOfRows());
    dataForceLimit.removeRows(0, dataForceLimit.getNumberOfRows());
    dataNbProvinces.removeRows(0, dataNbProvinces.getNumberOfRows());
    dataLosses.removeRows(0, dataLosses.getNumberOfRows());
    dataProfessionalism.removeRows(0, dataProfessionalism.getNumberOfRows());
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
    countryPlate.classList.remove("deadCountry");

    if (document.getElementById("deadCountryText")) {
        document.getElementById("deadCountryText").remove();
    }

    fillCountry(countryPlate, num);

    cleanTables();

    let i = 0;

    data.players[num].sessions.forEach((session) => {
        dataRank.addRow(['Session ' + (i + 1), session.devRank, session.devRank, session.incomeRank, session.incomeRank, session.manpowerRank, session.manpowerRank, session.forceLimitRank, session.forceLimitRank]);
        dataDev.addRow(['Session ' + (i + 1), session.dev, session.devEvol !== undefined ? ((session.devEvol >= 0 ? '+' : '') + session.devEvol + '%') : '']);
        dataIncome.addRow(['Session ' + (i + 1), session.income, session.incomeEvol !== undefined ? ((session.incomeEvol >= 0 ? '+' : '') + session.incomeEvol + '%') : '']);
        dataManpower.addRow(['Session ' + (i + 1), session.manpower, session.manpowerEvol !== undefined ? ((session.manpowerEvol >= 0 ? '+' : '') + session.manpowerEvol + '%') : '']);
        dataForceLimit.addRow(['Session ' + (i + 1), session.forceLimit, session.forceLimitEvol !== undefined ? ((session.forceLimitEvol >= 0 ? '+' : '') + session.forceLimitEvol + '%') : '']);
        dataNbProvinces.addRow(['Session ' + (i + 1), session.nbProv, session.nbProvEvol !== undefined ? ((session.nbProvEvol >= 0 ? '+' : '') + session.nbProvEvol) : '']);
        dataLosses.addRow(['Session ' + (i + 1), session.losses, session.lossesEvol !== undefined ? ((session.lossesEvol >= 0 ? '+' : '') + session.lossesEvol + '%') : '']);
        dataProfessionalism.addRow(['Session ' + (i + 1), session.professionalism, session.professionalismEvol !== undefined ? ((session.professionalismEvol >= 0 ? '+' : '') + session.professionalismEvol) : '']);
        i++;
    });

    chartRank.draw(dataRank, optionsLine);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};