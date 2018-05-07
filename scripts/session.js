let sessionTitleDiv;
let mapRef;
let mapImg;

let dashboardGeneral;
let chartDev;
let chartIncome;
let chartManpower;
let chartForceLimit;
let chartNbProvinces;
let chartLosses;
let chartProfessionalism;

let dataGeneral;
let dataDev;
let dataIncome;
let dataManpower;
let dataForceLimit;
let dataNbProvinces;
let dataLosses;
let dataProfessionalism;

let stringFilterGeneral;
let chartGeneral;
let options;

let init = function () {
    sessionTitleDiv = document.getElementById('sessionTitle');
    mapRef = document.getElementById('mapRef');
    mapImg = document.getElementById('mapImg');

    let dashboardGeneralDiv = document.getElementById('dashboard-General');
    let chartDevDiv = document.getElementById('chart-Dev');
    let chartIncomeDiv = document.getElementById('chart-Income');
    let chartManpowerDiv = document.getElementById('chart-Manpower');
    let chartForceLimitDiv = document.getElementById('chart-ForceLimit');
    let chartNbProvincesDiv = document.getElementById('chart-NbProvinces');
    let chartLossesDiv = document.getElementById('chart-Losses');
    let chartProfessionalismDiv = document.getElementById('chart-Professionalism');

    dashboardGeneral = new google.visualization.Dashboard(dashboardGeneralDiv);
    chartDev = new google.visualization.ColumnChart(chartDevDiv);
    chartIncome = new google.visualization.ColumnChart(chartIncomeDiv);
    chartManpower = new google.visualization.ColumnChart(chartManpowerDiv);
    chartForceLimit = new google.visualization.ColumnChart(chartForceLimitDiv);
    chartNbProvinces = new google.visualization.ColumnChart(chartNbProvincesDiv);
    chartLosses = new google.visualization.ColumnChart(chartLossesDiv);
    chartProfessionalism = new google.visualization.ColumnChart(chartProfessionalismDiv);

    dataGeneral = new google.visualization.DataTable();
    dataDev = new google.visualization.DataTable();
    dataIncome = new google.visualization.DataTable();
    dataManpower = new google.visualization.DataTable();
    dataForceLimit = new google.visualization.DataTable();
    dataNbProvinces = new google.visualization.DataTable();
    dataLosses = new google.visualization.DataTable();
    dataProfessionalism = new google.visualization.DataTable();

    dataGeneral.addColumn('string', 'Joueur (Pays)');
    dataGeneral.addColumn('number', 'Developpement');
    dataGeneral.addColumn('number', 'Revenu');
    dataGeneral.addColumn('number', 'Reserve militaire');
    dataGeneral.addColumn('number', 'Limite terrestre');
    dataGeneral.addColumn('number', 'Nombre de provinces');
    dataGeneral.addColumn('number', 'Pertes');
    dataGeneral.addColumn('number', 'Emprun');
    dataGeneral.addColumn('number', 'Professionnalisme');

    stringFilterGeneral = new google.visualization.ControlWrapper({
        "controlType": "StringFilter",
        "containerId": "control-General",
        "options": {
            "filterColumnIndex": 0,
            "matchType": "any",
            "ui": {
                "label": "Rechercher",
                "labelStacking": "vertical",
                "placeholder": "Joueur"
            }
        }
    }
    );

    chartGeneral = new google.visualization.ChartWrapper({
        "chartType": "Table",
        "containerId": "chart-General",
        "options": {
            "alternatingRowStyle": true,
            "showRowNumber": true,
            "width": "100%",
            "allowHtml": true,
            "cssClassNames": {
                "tableRow": "tableRow",
                "oddTableRow": "tableRow",
                "tableCell": "tableCell",
                "headerCell": "tableHeader"
            }
        }
    }
    );

    options = {
        "legend": {
            "position": "top"
        },
        "theme": "material",
        "chartArea": {
            "left": 50,
            "top": 50,
            "width": "95%",
            "height": "85%"
        },
        "vAxis": {
            "format": "decimal",
            "minorGridlines": {
                "count": 4
            }
        }
    }
};


let changeSession = function (num) {
    switch (num) {
        case '1':
            drawSession1();
            break;

        case '2':
            drawSession2();
            break;

        case '3':
            drawSession3();
            break;

        case '4':
            drawSession4();
            break;

        case '5':
            drawSession5();
            break;

        case '6':
            drawSession5();
            break;
    }
};

let cleanTables = function () {
    dataGeneral.removeRows(0, dataGeneral.getNumberOfRows());
    dataDev.removeRows(0, dataDev.getNumberOfRows());
    dataIncome.removeRows(0, dataIncome.getNumberOfRows());
    dataManpower.removeRows(0, dataManpower.getNumberOfRows());
    dataForceLimit.removeRows(0, dataForceLimit.getNumberOfRows());
    dataNbProvinces.removeRows(0, dataNbProvinces.getNumberOfRows());
    dataLosses.removeRows(0, dataLosses.getNumberOfRows());
    dataProfessionalism.removeRows(0, dataProfessionalism.getNumberOfRows());

    dataDev.removeColumns(0, dataDev.getNumberOfColumns());
    dataIncome.removeColumns(0, dataIncome.getNumberOfColumns());
    dataManpower.removeColumns(0, dataManpower.getNumberOfColumns());
    dataForceLimit.removeColumns(0, dataForceLimit.getNumberOfColumns());
    dataNbProvinces.removeColumns(0, dataNbProvinces.getNumberOfColumns());
    dataLosses.removeColumns(0, dataLosses.getNumberOfColumns());
    dataProfessionalism.removeColumns(0, dataProfessionalism.getNumberOfColumns());
};

let drawSession1 = function () {

    cleanTables();

    dataGeneral.addRow(['Miox (Orissa)', 197, 20.725, 18696, 20, 18, 24803, 0, 0.439]);
    dataGeneral.addRow(['Sharqu (France)', 429, 32.968, 44751, 41, 32, 50279, 0, 7.901]);
    dataGeneral.addRow(['Poseidon (Castile)', 298, 25.001, 28886, 31, 26, 40869, 0, 16.660]);
    dataGeneral.addRow(['Darmius (Candar)', 221, 11.419, 23089, 21, 21, 56632, 0, 0.000]);
    dataGeneral.addRow(['VÃ©lo (Vijayanagar)', 113, 10.047, 14478, 15, 10, 33618, 114, 7.703]);
    dataGeneral.addRow(['Assassin blanc (Jerusalem)', 161, 7.535, 18213, 18, 18, 32136, 0, 4.001]);
    dataGeneral.addRow(['Meteo (Austria)', 187, 23.26, 48812, 22, 13, 75350, 0, 6.702]);
    dataGeneral.addRow(['UAV-alpha (Muscovy)', 263, 16.995, 24229, 35, 31, 22961, 131, 1.999]);
    dataGeneral.addRow(['Thitub (Poland)', 258, 20.73, 22097, 34, 19, 46424, 0, 0.000]);
    dataGeneral.addRow(['Shingacook (Kazan)', 138, 11.854, 25100, 29, 19, 40729, 0, 0.000]);
    dataGeneral.addRow(['Prince (Mewar)', 120, 5.96, 15099, 15, 13, 47319, 0, 9.064]);
    dataGeneral.addRow(['El Battory (Khorasan)', 147, 11.562, 15509, 14, 21, 28368, 0, 0.702]);
    dataGeneral.addRow(['Sephirt (Nepal)', 97, 6.049, 15396, 19, 11, 35003, 0, 3.702]);
    dataGeneral.addRow(['Nalox (Brabant)', 83, 12.304, 14598, 12, 5, 17666, 0, 8.002]);
    dataGeneral.addRow(['Buffalo (Ethiopia)', 171, 13.635, 20391, 26, 27, 54635, 587, 2.356]);
    dataGeneral.addRow(['Emacab (Switzerland)', 115, 9.22, 16674, 16, 11, 19961, 0, 14.536]);
    dataGeneral.addRow(['Ohroms (England)', 367, 34.785, 29778, 35, 51, 67064, 570, 3.412]);
    dataGeneral.addRow(['Bnlover (Tunis)', 137, 10.36, 18372, 20, 21, 21247, 0, 0.000]);
    dataGeneral.addRow(['Robindesoibs (Venice)', 178, 15.092, 17440, 23, 13, 23752, 0, 9.512]);
    dataGeneral.addRow(['Pietrobu (Portugal)', 164, 13.589, 17426, 18, 15, 18641, 161, 4.999]);
    dataGeneral.addRow(['Scoutix (Denmark)', 147, 13.391, 16942, 16, 13, 63174, 172, 0.000]);
    dataGeneral.addRow(['Skarn (Byzantium)', 120, 8.502, 15789, 14, 10, 109014, 0, 0.000]);
    dataGeneral.addRow(['Sisao (Sweden)', 145, 9.135, 19793, 17, 29, 30951, 325, 2.292]);
    dataGeneral.addRow(['Azrock (Chagatai)', 111, 6.56, 22226, 22, 17, 40275, 56, 1.172]);
    dataGeneral.addRow(['Zeleph (Lithuania)', 341, 14.678, 20114, 30, 45, 45906, 481, 1.001]);
    dataGeneral.addRow(['Aikiko (Shirvan)', 98, 9.875, 15631, 13, 11, 34331, 0, 0.006]);
    dataGeneral.addRow(['Labtec (Madurai)', 118, 12.036, 16316, 16, 9, 33556, 0, 4.553]);
    dataGeneral.addRow(['Ormace (Hungary)', 246, 25.833, 22708, 34, 27, 39806, 0, 6.754]);
    dataGeneral.addRow(['Ocelot (Bahmanis)', 133, 11.927, 18248, 17, 14, 34263, 0, 2.640]);
    dataGeneral.addRow(['Sasaynel (Mushasha)', 156, 10.666, 20078, 20, 21, 27575, 0, 6.351]);
    dataGeneral.addRow(['Stellaria (Hesse)', 47, 4.57, 12557, 9, 4, 10853, 0, 7.349]);
    dataGeneral.addRow(['Tokipant (Milan)', 128, 15.175, 19521, 19, 6, 15031, 0, 9.473]);
    dataGeneral.addRow(['Jayllos112 (Punjab)', 152, 8.775, 16765, 18, 10, 45137, 0, 0.745]);
    dataGeneral.addRow(['Genesis (Brandenburg)', 103, 7.321, 16955, 15, 9, 25221, 0, 3.003]);
    dataGeneral.addRow(['Geronimo (Yemen)', 136, 7.8, 16811, 16, 20, 32814, 0, 0.000]);
    dataGeneral.addRow(['Morgenstar (Naples)', 173, 17.737, 21316, 24, 13, 52572, 547, 2.304]);
    dataGeneral.addRow(['Elpha (Morocco)', 144, 12.7, 16741, 19, 17, 15299, 0, 4.660]);


    dataDev.addColumn('string', 'Joueur');
    dataDev.addColumn('number', 'Session 1');

    dataDev.addRow(['Miox', 197]);
    dataDev.addRow(['Sharqu', 429]);
    dataDev.addRow(['Poseidon', 298]);
    dataDev.addRow(['Darmius', 221]);
    dataDev.addRow(['VÃ©lo', 113]);
    dataDev.addRow(['Assassin blanc', 161]);
    dataDev.addRow(['Meteo', 187]);
    dataDev.addRow(['UAV-alpha', 263]);
    dataDev.addRow(['Thitub', 258]);
    dataDev.addRow(['Shingacook', 138]);
    dataDev.addRow(['Prince', 120]);
    dataDev.addRow(['El Battory', 147]);
    dataDev.addRow(['Sephirt', 97]);
    dataDev.addRow(['Nalox', 83]);
    dataDev.addRow(['Buffalo', 171]);
    dataDev.addRow(['Emacab', 115]);
    dataDev.addRow(['Ohroms', 367]);
    dataDev.addRow(['Bnlover', 137]);
    dataDev.addRow(['Robindesoibs', 178]);
    dataDev.addRow(['Pietrobu', 164]);
    dataDev.addRow(['Scoutix', 147]);
    dataDev.addRow(['Skarn', 120]);
    dataDev.addRow(['Sisao', 145]);
    dataDev.addRow(['Azrock', 111]);
    dataDev.addRow(['Zeleph', 341]);
    dataDev.addRow(['Aikiko', 98]);
    dataDev.addRow(['Labtec', 118]);
    dataDev.addRow(['Ormace', 246]);
    dataDev.addRow(['Ocelot', 133]);
    dataDev.addRow(['Sasaynel', 156]);
    dataDev.addRow(['Stellaria', 47]);
    dataDev.addRow(['Tokipant', 128]);
    dataDev.addRow(['Jayllos112', 152]);
    dataDev.addRow(['Genesis', 103]);
    dataDev.addRow(['Geronimo', 136]);
    dataDev.addRow(['Morgenstar', 173]);
    dataDev.addRow(['Elpha', 144]);

    dataDev.sort({column: 1, desc: true});

    dataIncome.addColumn('string', 'Joueur');
    dataIncome.addColumn('number', 'Session 1');

    dataIncome.addRow(['Miox', 20.725]);
    dataIncome.addRow(['Sharqu', 32.968]);
    dataIncome.addRow(['Poseidon', 25.001]);
    dataIncome.addRow(['Darmius', 11.419]);
    dataIncome.addRow(['VÃ©lo', 10.047]);
    dataIncome.addRow(['Assassin blanc', 7.535]);
    dataIncome.addRow(['Meteo', 23.26]);
    dataIncome.addRow(['UAV-alpha', 16.995]);
    dataIncome.addRow(['Thitub', 20.73]);
    dataIncome.addRow(['Shingacook', 11.854]);
    dataIncome.addRow(['Prince', 5.96]);
    dataIncome.addRow(['El Battory', 11.562]);
    dataIncome.addRow(['Sephirt', 6.049]);
    dataIncome.addRow(['Nalox', 12.304]);
    dataIncome.addRow(['Buffalo', 13.635]);
    dataIncome.addRow(['Emacab', 9.22]);
    dataIncome.addRow(['Ohroms', 34.785]);
    dataIncome.addRow(['Bnlover', 10.36]);
    dataIncome.addRow(['Robindesoibs', 15.092]);
    dataIncome.addRow(['Pietrobu', 13.589]);
    dataIncome.addRow(['Scoutix', 13.391]);
    dataIncome.addRow(['Skarn', 8.502]);
    dataIncome.addRow(['Sisao', 9.135]);
    dataIncome.addRow(['Azrock', 6.56]);
    dataIncome.addRow(['Zeleph', 14.678]);
    dataIncome.addRow(['Aikiko', 9.875]);
    dataIncome.addRow(['Labtec', 12.036]);
    dataIncome.addRow(['Ormace', 25.833]);
    dataIncome.addRow(['Ocelot', 11.927]);
    dataIncome.addRow(['Sasaynel', 10.666]);
    dataIncome.addRow(['Stellaria', 4.57]);
    dataIncome.addRow(['Tokipant', 15.175]);
    dataIncome.addRow(['Jayllos112', 8.775]);
    dataIncome.addRow(['Genesis', 7.321]);
    dataIncome.addRow(['Geronimo', 7.8]);
    dataIncome.addRow(['Morgenstar', 17.737]);
    dataIncome.addRow(['Elpha', 12.7]);

    dataIncome.sort({column: 1, desc: true});

    dataManpower.addColumn('string', 'Joueur');
    dataManpower.addColumn('number', 'Session 1');

    dataManpower.addRow(['Miox', 18696]);
    dataManpower.addRow(['Sharqu', 44751]);
    dataManpower.addRow(['Poseidon', 28886]);
    dataManpower.addRow(['Darmius', 23089]);
    dataManpower.addRow(['VÃ©lo', 14478]);
    dataManpower.addRow(['Assassin blanc', 18213]);
    dataManpower.addRow(['Meteo', 48812]);
    dataManpower.addRow(['UAV-alpha', 24229]);
    dataManpower.addRow(['Thitub', 22097]);
    dataManpower.addRow(['Shingacook', 25100]);
    dataManpower.addRow(['Prince', 15099]);
    dataManpower.addRow(['El Battory', 15509]);
    dataManpower.addRow(['Sephirt', 15396]);
    dataManpower.addRow(['Nalox', 14598]);
    dataManpower.addRow(['Buffalo', 20391]);
    dataManpower.addRow(['Emacab', 16674]);
    dataManpower.addRow(['Ohroms', 29778]);
    dataManpower.addRow(['Bnlover', 18372]);
    dataManpower.addRow(['Robindesoibs', 17440]);
    dataManpower.addRow(['Pietrobu', 17426]);
    dataManpower.addRow(['Scoutix', 16942]);
    dataManpower.addRow(['Skarn', 15789]);
    dataManpower.addRow(['Sisao', 19793]);
    dataManpower.addRow(['Azrock', 22226]);
    dataManpower.addRow(['Zeleph', 20114]);
    dataManpower.addRow(['Aikiko', 15631]);
    dataManpower.addRow(['Labtec', 16316]);
    dataManpower.addRow(['Ormace', 22708]);
    dataManpower.addRow(['Ocelot', 18248]);
    dataManpower.addRow(['Sasaynel', 20078]);
    dataManpower.addRow(['Stellaria', 12557]);
    dataManpower.addRow(['Tokipant', 19521]);
    dataManpower.addRow(['Jayllos112', 16765]);
    dataManpower.addRow(['Genesis', 16955]);
    dataManpower.addRow(['Geronimo', 16811]);
    dataManpower.addRow(['Morgenstar', 21316]);
    dataManpower.addRow(['Elpha', 16741]);

    dataManpower.sort({column: 1, desc: true});

    dataForceLimit.addColumn('string', 'Joueur');
    dataForceLimit.addColumn('number', 'Session 1');

    dataForceLimit.addRow(['Miox', 20]);
    dataForceLimit.addRow(['Sharqu', 41]);
    dataForceLimit.addRow(['Poseidon', 31]);
    dataForceLimit.addRow(['Darmius', 21]);
    dataForceLimit.addRow(['VÃ©lo', 15]);
    dataForceLimit.addRow(['Assassin blanc', 18]);
    dataForceLimit.addRow(['Meteo', 22]);
    dataForceLimit.addRow(['UAV-alpha', 35]);
    dataForceLimit.addRow(['Thitub', 34]);
    dataForceLimit.addRow(['Shingacook', 29]);
    dataForceLimit.addRow(['Prince', 15]);
    dataForceLimit.addRow(['El Battory', 14]);
    dataForceLimit.addRow(['Sephirt', 19]);
    dataForceLimit.addRow(['Nalox', 12]);
    dataForceLimit.addRow(['Buffalo', 26]);
    dataForceLimit.addRow(['Emacab', 16]);
    dataForceLimit.addRow(['Ohroms', 35]);
    dataForceLimit.addRow(['Bnlover', 20]);
    dataForceLimit.addRow(['Robindesoibs', 23]);
    dataForceLimit.addRow(['Pietrobu', 18]);
    dataForceLimit.addRow(['Scoutix', 16]);
    dataForceLimit.addRow(['Skarn', 14]);
    dataForceLimit.addRow(['Sisao', 17]);
    dataForceLimit.addRow(['Azrock', 22]);
    dataForceLimit.addRow(['Zeleph', 30]);
    dataForceLimit.addRow(['Aikiko', 13]);
    dataForceLimit.addRow(['Labtec', 16]);
    dataForceLimit.addRow(['Ormace', 34]);
    dataForceLimit.addRow(['Ocelot', 17]);
    dataForceLimit.addRow(['Sasaynel', 20]);
    dataForceLimit.addRow(['Stellaria', 9]);
    dataForceLimit.addRow(['Tokipant', 19]);
    dataForceLimit.addRow(['Jayllos112', 18]);
    dataForceLimit.addRow(['Genesis', 15]);
    dataForceLimit.addRow(['Geronimo', 16]);
    dataForceLimit.addRow(['Morgenstar', 24]);
    dataForceLimit.addRow(['Elpha', 19]);

    dataForceLimit.sort({column: 1, desc: true});

    dataNbProvinces.addColumn('string', 'Joueur');
    dataNbProvinces.addColumn('number', 'Session 1');

    dataNbProvinces.addRow(['Miox', 18]);
    dataNbProvinces.addRow(['Sharqu', 32]);
    dataNbProvinces.addRow(['Poseidon', 26]);
    dataNbProvinces.addRow(['Darmius', 21]);
    dataNbProvinces.addRow(['VÃ©lo', 10]);
    dataNbProvinces.addRow(['Assassin blanc', 18]);
    dataNbProvinces.addRow(['Meteo', 13]);
    dataNbProvinces.addRow(['UAV-alpha', 31]);
    dataNbProvinces.addRow(['Thitub', 19]);
    dataNbProvinces.addRow(['Shingacook', 19]);
    dataNbProvinces.addRow(['Prince', 13]);
    dataNbProvinces.addRow(['El Battory', 21]);
    dataNbProvinces.addRow(['Sephirt', 11]);
    dataNbProvinces.addRow(['Nalox', 5]);
    dataNbProvinces.addRow(['Buffalo', 27]);
    dataNbProvinces.addRow(['Emacab', 11]);
    dataNbProvinces.addRow(['Ohroms', 51]);
    dataNbProvinces.addRow(['Bnlover', 21]);
    dataNbProvinces.addRow(['Robindesoibs', 13]);
    dataNbProvinces.addRow(['Pietrobu', 15]);
    dataNbProvinces.addRow(['Scoutix', 13]);
    dataNbProvinces.addRow(['Skarn', 10]);
    dataNbProvinces.addRow(['Sisao', 29]);
    dataNbProvinces.addRow(['Azrock', 17]);
    dataNbProvinces.addRow(['Zeleph', 45]);
    dataNbProvinces.addRow(['Aikiko', 11]);
    dataNbProvinces.addRow(['Labtec', 9]);
    dataNbProvinces.addRow(['Ormace', 27]);
    dataNbProvinces.addRow(['Ocelot', 14]);
    dataNbProvinces.addRow(['Sasaynel', 21]);
    dataNbProvinces.addRow(['Stellaria', 4]);
    dataNbProvinces.addRow(['Tokipant', 6]);
    dataNbProvinces.addRow(['Jayllos112', 10]);
    dataNbProvinces.addRow(['Genesis', 9]);
    dataNbProvinces.addRow(['Geronimo', 20]);
    dataNbProvinces.addRow(['Morgenstar', 13]);
    dataNbProvinces.addRow(['Elpha', 17]);

    dataNbProvinces.sort({column: 1, desc: true});

    dataLosses.addColumn('string', 'Joueur');
    dataLosses.addColumn('number', 'Session 1');

    dataLosses.addRow(['Miox', 24803]);
    dataLosses.addRow(['Sharqu', 50279]);
    dataLosses.addRow(['Poseidon', 40869]);
    dataLosses.addRow(['Darmius', 56632]);
    dataLosses.addRow(['VÃ©lo', 33618]);
    dataLosses.addRow(['Assassin blanc', 32136]);
    dataLosses.addRow(['Meteo', 75350]);
    dataLosses.addRow(['UAV-alpha', 22961]);
    dataLosses.addRow(['Thitub', 46424]);
    dataLosses.addRow(['Shingacook', 40729]);
    dataLosses.addRow(['Prince', 47319]);
    dataLosses.addRow(['El Battory', 28368]);
    dataLosses.addRow(['Sephirt', 35003]);
    dataLosses.addRow(['Nalox', 17666]);
    dataLosses.addRow(['Buffalo', 54635]);
    dataLosses.addRow(['Emacab', 19961]);
    dataLosses.addRow(['Ohroms', 67064]);
    dataLosses.addRow(['Bnlover', 21247]);
    dataLosses.addRow(['Robindesoibs', 23752]);
    dataLosses.addRow(['Pietrobu', 18641]);
    dataLosses.addRow(['Scoutix', 63174]);
    dataLosses.addRow(['Skarn', 109014]);
    dataLosses.addRow(['Sisao', 30951]);
    dataLosses.addRow(['Azrock', 40275]);
    dataLosses.addRow(['Zeleph', 45906]);
    dataLosses.addRow(['Aikiko', 34331]);
    dataLosses.addRow(['Labtec', 33556]);
    dataLosses.addRow(['Ormace', 39806]);
    dataLosses.addRow(['Ocelot', 34263]);
    dataLosses.addRow(['Sasaynel', 27575]);
    dataLosses.addRow(['Stellaria', 10853]);
    dataLosses.addRow(['Tokipant', 15031]);
    dataLosses.addRow(['Jayllos112', 45137]);
    dataLosses.addRow(['Genesis', 25221]);
    dataLosses.addRow(['Geronimo', 32814]);
    dataLosses.addRow(['Morgenstar', 52572]);
    dataLosses.addRow(['Elpha', 15299]);

    dataLosses.sort({column: 1, desc: true});

    dataProfessionalism.addColumn('string', 'Joueur');
    dataProfessionalism.addColumn('number', 'Session 1');

    dataProfessionalism.addRow(['Miox', 0.439]);
    dataProfessionalism.addRow(['Sharqu', 7.901]);
    dataProfessionalism.addRow(['Poseidon', 16.660]);
    dataProfessionalism.addRow(['Darmius', 0.000]);
    dataProfessionalism.addRow(['VÃ©lo', 7.703]);
    dataProfessionalism.addRow(['Assassin blanc', 4.001]);
    dataProfessionalism.addRow(['Meteo', 6.702]);
    dataProfessionalism.addRow(['UAV-alpha', 1.999]);
    dataProfessionalism.addRow(['Thitub', 0.000]);
    dataProfessionalism.addRow(['Shingacook', 0.000]);
    dataProfessionalism.addRow(['Prince', 9.064]);
    dataProfessionalism.addRow(['El Battory', 0.702]);
    dataProfessionalism.addRow(['Sephirt', 3.702]);
    dataProfessionalism.addRow(['Nalox', 8.002]);
    dataProfessionalism.addRow(['Buffalo', 2.356]);
    dataProfessionalism.addRow(['Emacab', 14.536]);
    dataProfessionalism.addRow(['Ohroms', 3.412]);
    dataProfessionalism.addRow(['Bnlover', 0.000]);
    dataProfessionalism.addRow(['Robindesoibs', 9.512]);
    dataProfessionalism.addRow(['Pietrobu', 4.999]);
    dataProfessionalism.addRow(['Scoutix', 0.000]);
    dataProfessionalism.addRow(['Skarn', 0.000]);
    dataProfessionalism.addRow(['Sisao', 2.292]);
    dataProfessionalism.addRow(['Azrock', 1.172]);
    dataProfessionalism.addRow(['Zeleph', 1.001]);
    dataProfessionalism.addRow(['Aikiko', 0.006]);
    dataProfessionalism.addRow(['Labtec', 4.553]);
    dataProfessionalism.addRow(['Ormace', 6.754]);
    dataProfessionalism.addRow(['Ocelot', 2.640]);
    dataProfessionalism.addRow(['Sasaynel', 6.351]);
    dataProfessionalism.addRow(['Stellaria', 7.349]);
    dataProfessionalism.addRow(['Tokipant', 9.473]);
    dataProfessionalism.addRow(['Jayllos112', 0.745]);
    dataProfessionalism.addRow(['Genesis', 3.003]);
    dataProfessionalism.addRow(['Geronimo', 0.000]);
    dataProfessionalism.addRow(['Morgenstar', 2.304]);
    dataProfessionalism.addRow(['Elpha', 4.660]);

    dataProfessionalism.sort({column: 1, desc: true});

    dashboardGeneral.bind(stringFilterGeneral, chartGeneral);

    sessionTitleDiv.innerText = 'Session 1'
    mapRef.href = './images/sessions/session1.jpg'
    mapImg.src = './images/sessions/session1.jpg'
    dashboardGeneral.draw(dataGeneral);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};

let drawSession2 = function () {

    cleanTables();

    dataGeneral.addRow(['Miox (Orissa)', 335, 35.914, 28132, 35, 32, 63410, 0, 0.000]);
    dataGeneral.addRow(['Sharqu (France)', 485, 47.333, 47333, 48, 35, 220435, 1056, 10.825]);
    dataGeneral.addRow(['Poseidon (Castile)', 434, 37.639, 32587, 38, 36, 62476, 0, 16.510]);
    dataGeneral.addRow(['Darmius (Candar)', 275, 16.68, 21137, 23, 28, 89919, 0, 0.000]);
    dataGeneral.addRow(['VÃ©lo (Vijayanagar)', 183, 18.82, 17153, 22, 15, 63321, 0, 8.105]);
    dataGeneral.addRow(['Assassin blanc (Jerusalem)', 231, 12.738, 19913, 21, 23, 55970, 0, 4.001]);
    dataGeneral.addRow(['Meteo (Austria)', 205, 32.821, 40675, 26, 14, 260438, 636, 4.300]);
    dataGeneral.addRow(['UAV-alpha (Muscovy)', 382, 26.998, 28796, 40, 46, 62237, 189, 5.002]);
    dataGeneral.addRow(['Thitub (Poland)', 345, 27.032, 24840, 38, 28, 99504, 0, 0.046]);
    dataGeneral.addRow(['Shingacook (Kazan)', 170, 13.889, 24518, 30, 26, 100077, 0, 3.500]);
    dataGeneral.addRow(['Prince (Mewar)', 181, 14.799, 22291, 20, 22, 69384, 0, 13.058]);
    dataGeneral.addRow(['El Battory (Khorasan)', 184, 15.553, 16843, 17, 27, 65517, 190, 1.553]);
    dataGeneral.addRow(['Sephirt (Nepal)', 241, 17.194, 19545, 33, 19, 60023, 442, 1.804]);
    dataGeneral.addRow(['Nalox (Brabant)', 167, 23.741, 17235, 16, 10, 52350, 86, 4.443]);
    dataGeneral.addRow(['Buffalo (Ethiopia)', 359, 21.083, 21811, 29, 62, 134425, 1643, 0.000]);
    dataGeneral.addRow(['Emacab (Switzerland)', 173, 12.404, 17264, 17, 15, 70639, 738, 23.770]);
    dataGeneral.addRow(['Ohroms (England)', 414, 44.442, 28335, 35, 54, 140596, 0, 4.413]);
    dataGeneral.addRow(['Bnlover (Tunis)', 171, 12.157, 19817, 22, 25, 81321, 174, 0.769]);
    dataGeneral.addRow(['Robindesoibs (Venice)', 232, 15.194, 21665, 24, 16, 88287, 2858, 6.839]);
    dataGeneral.addRow(['Pietrobu (Portugal)', 267, 26.273, 22833, 26, 24, 57170, 0, 4.999]);
    dataGeneral.addRow(['Scoutix (Denmark)', 195, 22.386, 21967, 21, 17, 72992, 0, 8.676]);
    dataGeneral.addRow(['Skarn (Byzantium)', 218, 13.681, 21263, 24, 18, 198035, 1122, 1.257]);
    dataGeneral.addRow(['Sisao (Sweden)', 156, 11.281, 21587, 21, 29, 38634, 233, 2.292]);
    dataGeneral.addRow(['Azrock (Chagatai)', 275, 16.749, 28384, 34, 39, 85731, 0, 1.025]);
    dataGeneral.addRow(['Zeleph (Lithuania)', 345, 20.38, 22585, 35, 45, 134339, 179, 3.903]);
    dataGeneral.addRow(['Aikiko (Shirvan)', 183, 12.212, 16404, 16, 21, 74234, 0, 0.000]);
    dataGeneral.addRow(['Labtec (Madurai)', 177, 17.847, 17785, 18, 16, 64778, 0, 5.972]);
    dataGeneral.addRow(['Ormace (Hungary)', 279, 36.659, 30917, 36, 31, 81141, 0, 7.755]);
    dataGeneral.addRow(['Ocelot (Bahmanis)', 169, 17.845, 19089, 23, 16, 50860, 0, 12.350]);
    dataGeneral.addRow(['Sasaynel (Mushasha)', 211, 13.39, 24396, 24, 27, 69542, 0, 7.352]);
    dataGeneral.addRow(['Stellaria (Hesse)', 64, 8.583, 14583, 12, 4, 27660, 0, 12.872]);
    dataGeneral.addRow(['Tokipant (Milan)', 205, 24.57, 28814, 26, 9, 96859, 1802, 5.072]);
    dataGeneral.addRow(['Jayllos112 (Punjab)', 210, 17.128, 21409, 23, 15, 79531, 0, 3.598]);
    dataGeneral.addRow(['Genesis (Brandenburg)', 166, 15.049, 20469, 20, 15, 58015, 0, 12.698]);
    dataGeneral.addRow(['Geronimo (Yemen)', 224, 13.868, 29619, 24, 30, 74041, 0, 1.257]);
    dataGeneral.addRow(['Morgenstar (Naples)', 208, 19.491, 28465, 26, 14, 155753, 2732, 7.675]);
    dataGeneral.addRow(['Elpha (Morocco)', 213, 27.636, 19807, 26, 23, 38652, 0, 15.906]);


    dataDev.addColumn('string', 'Joueur');
    dataDev.addColumn('number', 'Session 2');
    dataDev.addColumn({type:'string', role:'annotation'});
    dataDev.addColumn('number', 'Session 1');

    dataDev.addRow(['Miox', 335, '+70%', 197]);
    dataDev.addRow(['Sharqu', 485, '+13%', 429]);
    dataDev.addRow(['Poseidon', 434, '+45%', 298]);
    dataDev.addRow(['Darmius', 275, '+24%', 221]);
    dataDev.addRow(['VÃ©lo', 183, '+61%', 113]);
    dataDev.addRow(['Assassin blanc', 231, '+43%', 161]);
    dataDev.addRow(['Meteo', 205, '+9%', 187]);
    dataDev.addRow(['UAV-alpha', 382, '+45%', 263]);
    dataDev.addRow(['Thitub', 345, '+33%', 258]);
    dataDev.addRow(['Shingacook', 170, '+23%', 138]);
    dataDev.addRow(['Prince', 181, '+50%', 120]);
    dataDev.addRow(['El Battory', 184, '+25%', 147]);
    dataDev.addRow(['Sephirt', 241, '+148%', 97]);
    dataDev.addRow(['Nalox', 167, '+101%', 83]);
    dataDev.addRow(['Buffalo', 359, '+109%', 171]);
    dataDev.addRow(['Emacab', 173, '+50%', 115]);
    dataDev.addRow(['Ohroms', 414, '+12%', 367]);
    dataDev.addRow(['Bnlover', 171, '+24%', 137]);
    dataDev.addRow(['Robindesoibs', 232, '+30%', 178]);
    dataDev.addRow(['Pietrobu', 267, '+62%', 164]);
    dataDev.addRow(['Scoutix', 195, '+32%', 147]);
    dataDev.addRow(['Skarn', 218, '+81%', 120]);
    dataDev.addRow(['Sisao', 156, '+7%', 145]);
    dataDev.addRow(['Azrock', 275, '+147%', 111]);
    dataDev.addRow(['Zeleph', 345, '+1%', 341]);
    dataDev.addRow(['Aikiko', 183, '+86%', 98]);
    dataDev.addRow(['Labtec', 177, '+50%', 118]);
    dataDev.addRow(['Ormace', 279, '+13%', 246]);
    dataDev.addRow(['Ocelot', 169, '+27%', 133]);
    dataDev.addRow(['Sasaynel', 211, '+35%', 156]);
    dataDev.addRow(['Stellaria', 64, '+36%', 47]);
    dataDev.addRow(['Tokipant', 205, '+60%', 128]);
    dataDev.addRow(['Jayllos112', 210, '+38%', 152]);
    dataDev.addRow(['Genesis', 166, '+61%', 103]);
    dataDev.addRow(['Geronimo', 224, '+64%', 136]);
    dataDev.addRow(['Morgenstar', 208, '+20%', 173]);
    dataDev.addRow(['Elpha', 213, '+47%', 144]);

    dataDev.sort({column: 1, desc: true});

    dataIncome.addColumn('string', 'Joueur');
    dataIncome.addColumn('number', 'Session 2');
    dataIncome.addColumn({type:'string', role:'annotation'});
    dataIncome.addColumn('number', 'Session 1');

    dataIncome.addRow(['Miox', 35.914, '+73%', 20.725]);
    dataIncome.addRow(['Sharqu', 47.333, '+43%', 32.968]);
    dataIncome.addRow(['Poseidon', 37.639, '+50%', 25.001]);
    dataIncome.addRow(['Darmius', 16.68, '+46%', 11.419]);
    dataIncome.addRow(['VÃ©lo', 18.82, '+87%', 10.047]);
    dataIncome.addRow(['Assassin blanc', 12.738, '+69%', 7.535]);
    dataIncome.addRow(['Meteo', 32.821, '+41%', 23.26]);
    dataIncome.addRow(['UAV-alpha', 26.998, '+58%', 16.995]);
    dataIncome.addRow(['Thitub', 27.032, '+30%', 20.73]);
    dataIncome.addRow(['Shingacook', 13.889, '+17%', 11.854]);
    dataIncome.addRow(['Prince', 14.799, '+148%', 5.96]);
    dataIncome.addRow(['El Battory', 15.553, '+34%', 11.562]);
    dataIncome.addRow(['Sephirt', 17.194, '+184%', 6.049]);
    dataIncome.addRow(['Nalox', 23.741, '+92%', 12.304]);
    dataIncome.addRow(['Buffalo', 21.083, '+54%', 13.635]);
    dataIncome.addRow(['Emacab', 12.404, '+34%', 9.22]);
    dataIncome.addRow(['Ohroms', 44.442, '+27%', 34.785]);
    dataIncome.addRow(['Bnlover', 12.157, '+17%', 10.36]);
    dataIncome.addRow(['Robindesoibs', 15.194, '+0%', 15.092]);
    dataIncome.addRow(['Pietrobu', 26.273, '+93%', 13.589]);
    dataIncome.addRow(['Scoutix', 22.386, '+67%', 13.391]);
    dataIncome.addRow(['Skarn', 13.681, '+60%', 8.502]);
    dataIncome.addRow(['Sisao', 11.281, '+23%', 9.135]);
    dataIncome.addRow(['Azrock', 16.749, '+155%', 6.56]);
    dataIncome.addRow(['Zeleph', 20.38, '+38%', 14.678]);
    dataIncome.addRow(['Aikiko', 12.212, '+23%', 9.875]);
    dataIncome.addRow(['Labtec', 17.847, '+48%', 12.036]);
    dataIncome.addRow(['Ormace', 36.659, '+41%', 25.833]);
    dataIncome.addRow(['Ocelot', 17.845, '+49%', 11.927]);
    dataIncome.addRow(['Sasaynel', 13.39, '+25%', 10.666]);
    dataIncome.addRow(['Stellaria', 8.583, '+87%', 4.57]);
    dataIncome.addRow(['Tokipant', 24.57, '+61%', 15.175]);
    dataIncome.addRow(['Jayllos112', 17.128, '+95%', 8.775]);
    dataIncome.addRow(['Genesis', 15.049, '+105%', 7.321]);
    dataIncome.addRow(['Geronimo', 13.868, '+77%', 7.8]);
    dataIncome.addRow(['Morgenstar', 19.491, '+9%', 17.737]);
    dataIncome.addRow(['Elpha', 27.636, '+117%', 12.7]);

    dataIncome.sort({column: 1, desc: true});

    dataManpower.addColumn('string', 'Joueur');
    dataManpower.addColumn('number', 'Session 2');
    dataManpower.addColumn({type:'string', role:'annotation'});
    dataManpower.addColumn('number', 'Session 1');

    dataManpower.addRow(['Miox', 28132, '+50%', 18696]);
    dataManpower.addRow(['Sharqu', 47333, '+5%', 44751]);
    dataManpower.addRow(['Poseidon', 32587, '+12%', 28886]);
    dataManpower.addRow(['Darmius', 21137, '-8%', 23089]);
    dataManpower.addRow(['VÃ©lo', 17153, '+18%', 14478]);
    dataManpower.addRow(['Assassin blanc', 19913, '+9%', 18213]);
    dataManpower.addRow(['Meteo', 40675, '-16%', 48812]);
    dataManpower.addRow(['UAV-alpha', 28796, '+18%', 24229]);
    dataManpower.addRow(['Thitub', 24840, '+12%', 22097]);
    dataManpower.addRow(['Shingacook', 24518, '-2%', 25100]);
    dataManpower.addRow(['Prince', 22291, '+47%', 15099]);
    dataManpower.addRow(['El Battory', 16843, '+8%', 15509]);
    dataManpower.addRow(['Sephirt', 19545, '+26%', 15396]);
    dataManpower.addRow(['Nalox', 17235, '+18%', 14598]);
    dataManpower.addRow(['Buffalo', 21811, '+6%', 20391]);
    dataManpower.addRow(['Emacab', 17264, '+3%', 16674]);
    dataManpower.addRow(['Ohroms', 28335, '-4%', 29778]);
    dataManpower.addRow(['Bnlover', 19817, '+7%', 18372]);
    dataManpower.addRow(['Robindesoibs', 21665, '+24%', 17440]);
    dataManpower.addRow(['Pietrobu', 22833, '+31%', 17426]);
    dataManpower.addRow(['Scoutix', 21967, '+29%', 16942]);
    dataManpower.addRow(['Skarn', 21263, '+34%', 15789]);
    dataManpower.addRow(['Sisao', 21587, '+9%', 19793]);
    dataManpower.addRow(['Azrock', 28384, '+27%', 22226]);
    dataManpower.addRow(['Zeleph', 22585, '+12%', 20114]);
    dataManpower.addRow(['Aikiko', 16404, '+4%', 15631]);
    dataManpower.addRow(['Labtec', 17785, '+9%', 16316]);
    dataManpower.addRow(['Ormace', 30917, '+36%', 22708]);
    dataManpower.addRow(['Ocelot', 19089, '+4%', 18248]);
    dataManpower.addRow(['Sasaynel', 24396, '+21%', 20078]);
    dataManpower.addRow(['Stellaria', 14583, '+16%', 12557]);
    dataManpower.addRow(['Tokipant', 28814, '+47%', 19521]);
    dataManpower.addRow(['Jayllos112', 21409, '+27%', 16765]);
    dataManpower.addRow(['Genesis', 20469, '+20%', 16955]);
    dataManpower.addRow(['Geronimo', 29619, '+76%', 16811]);
    dataManpower.addRow(['Morgenstar', 28465, '+33%', 21316]);
    dataManpower.addRow(['Elpha', 19807, '+18%', 16741]);

    dataManpower.sort({column: 1, desc: true});

    dataForceLimit.addColumn('string', 'Joueur');
    dataForceLimit.addColumn('number', 'Session 2');
    dataForceLimit.addColumn({type:'string', role:'annotation'});
    dataForceLimit.addColumn('number', 'Session 1');

    dataForceLimit.addRow(['Miox', 35, '+75%', 20]);
    dataForceLimit.addRow(['Sharqu', 48, '+17%', 41]);
    dataForceLimit.addRow(['Poseidon', 38, '+22%', 31]);
    dataForceLimit.addRow(['Darmius', 23, '+9%', 21]);
    dataForceLimit.addRow(['VÃ©lo', 22, '+46%', 15]);
    dataForceLimit.addRow(['Assassin blanc', 21, '+16%', 18]);
    dataForceLimit.addRow(['Meteo', 26, '+18%', 22]);
    dataForceLimit.addRow(['UAV-alpha', 40, '+14%', 35]);
    dataForceLimit.addRow(['Thitub', 38, '+11%', 34]);
    dataForceLimit.addRow(['Shingacook', 30, '+3%', 29]);
    dataForceLimit.addRow(['Prince', 20, '+33%', 15]);
    dataForceLimit.addRow(['El Battory', 17, '+21%', 14]);
    dataForceLimit.addRow(['Sephirt', 33, '+73%', 19]);
    dataForceLimit.addRow(['Nalox', 16, '+33%', 12]);
    dataForceLimit.addRow(['Buffalo', 29, '+11%', 26]);
    dataForceLimit.addRow(['Emacab', 17, '+6%', 16]);
    dataForceLimit.addRow(['Ohroms', 35, '+0%', 35]);
    dataForceLimit.addRow(['Bnlover', 22, '+10%', 20]);
    dataForceLimit.addRow(['Robindesoibs', 24, '+4%', 23]);
    dataForceLimit.addRow(['Pietrobu', 26, '+44%', 18]);
    dataForceLimit.addRow(['Scoutix', 21, '+31%', 16]);
    dataForceLimit.addRow(['Skarn', 24, '+71%', 14]);
    dataForceLimit.addRow(['Sisao', 21, '+23%', 17]);
    dataForceLimit.addRow(['Azrock', 34, '+54%', 22]);
    dataForceLimit.addRow(['Zeleph', 35, '+16%', 30]);
    dataForceLimit.addRow(['Aikiko', 16, '+23%', 13]);
    dataForceLimit.addRow(['Labtec', 18, '+12%', 16]);
    dataForceLimit.addRow(['Ormace', 36, '+5%', 34]);
    dataForceLimit.addRow(['Ocelot', 23, '+35%', 17]);
    dataForceLimit.addRow(['Sasaynel', 24, '+19%', 20]);
    dataForceLimit.addRow(['Stellaria', 12, '+33%', 9]);
    dataForceLimit.addRow(['Tokipant', 26, '+36%', 19]);
    dataForceLimit.addRow(['Jayllos112', 23, '+27%', 18]);
    dataForceLimit.addRow(['Genesis', 20, '+33%', 15]);
    dataForceLimit.addRow(['Geronimo', 24, '+50%', 16]);
    dataForceLimit.addRow(['Morgenstar', 26, '+8%', 24]);
    dataForceLimit.addRow(['Elpha', 26, '+36%', 19]);

    dataForceLimit.sort({column: 1, desc: true});

    dataNbProvinces.addColumn('string', 'Joueur');
    dataNbProvinces.addColumn('number', 'Session 2');
    dataNbProvinces.addColumn({type:'string', role:'annotation'});
    dataNbProvinces.addColumn('number', 'Session 1');

    dataNbProvinces.addRow(['Miox', 32, '+77%', 18]);
    dataNbProvinces.addRow(['Sharqu', 35, '+9%', 32]);
    dataNbProvinces.addRow(['Poseidon', 36, '+38%', 26]);
    dataNbProvinces.addRow(['Darmius', 28, '+33%', 21]);
    dataNbProvinces.addRow(['VÃ©lo', 15, '+50%', 10]);
    dataNbProvinces.addRow(['Assassin blanc', 23, '+27%', 18]);
    dataNbProvinces.addRow(['Meteo', 14, '+7%', 13]);
    dataNbProvinces.addRow(['UAV-alpha', 46, '+48%', 31]);
    dataNbProvinces.addRow(['Thitub', 28, '+47%', 19]);
    dataNbProvinces.addRow(['Shingacook', 26, '+36%', 19]);
    dataNbProvinces.addRow(['Prince', 22, '+69%', 13]);
    dataNbProvinces.addRow(['El Battory', 27, '+28%', 21]);
    dataNbProvinces.addRow(['Sephirt', 19, '+72%', 11]);
    dataNbProvinces.addRow(['Nalox', 10, '+100%', 5]);
    dataNbProvinces.addRow(['Buffalo', 62, '+129%', 27]);
    dataNbProvinces.addRow(['Emacab', 15, '+36%', 11]);
    dataNbProvinces.addRow(['Ohroms', 54, '+5%', 51]);
    dataNbProvinces.addRow(['Bnlover', 25, '+19%', 21]);
    dataNbProvinces.addRow(['Robindesoibs', 16, '+23%', 13]);
    dataNbProvinces.addRow(['Pietrobu', 24, '+60%', 15]);
    dataNbProvinces.addRow(['Scoutix', 17, '+30%', 13]);
    dataNbProvinces.addRow(['Skarn', 18, '+80%', 10]);
    dataNbProvinces.addRow(['Sisao', 29, '+0%', 29]);
    dataNbProvinces.addRow(['Azrock', 39, '+129%', 17]);
    dataNbProvinces.addRow(['Zeleph', 45, '+0%', 45]);
    dataNbProvinces.addRow(['Aikiko', 21, '+90%', 11]);
    dataNbProvinces.addRow(['Labtec', 16, '+77%', 9]);
    dataNbProvinces.addRow(['Ormace', 31, '+14%', 27]);
    dataNbProvinces.addRow(['Ocelot', 16, '+14%', 14]);
    dataNbProvinces.addRow(['Sasaynel', 27, '+28%', 21]);
    dataNbProvinces.addRow(['Stellaria', 4, '+0%', 4]);
    dataNbProvinces.addRow(['Tokipant', 9, '+50%', 6]);
    dataNbProvinces.addRow(['Jayllos112', 15, '+50%', 10]);
    dataNbProvinces.addRow(['Genesis', 15, '+66%', 9]);
    dataNbProvinces.addRow(['Geronimo', 30, '+50%', 20]);
    dataNbProvinces.addRow(['Morgenstar', 14, '+7%', 13]);
    dataNbProvinces.addRow(['Elpha', 23, '+35%', 17]);

    dataNbProvinces.sort({column: 1, desc: true});

    dataLosses.addColumn('string', 'Joueur');
    dataLosses.addColumn('number', 'Session 2');
    dataLosses.addColumn({type:'string', role:'annotation'});
    dataLosses.addColumn('number', 'Session 1');

    dataLosses.addRow(['Miox', 63410, '+155%', 24803]);
    dataLosses.addRow(['Sharqu', 220435, '+338%', 50279]);
    dataLosses.addRow(['Poseidon', 62476, '+52%', 40869]);
    dataLosses.addRow(['Darmius', 89919, '+58%', 56632]);
    dataLosses.addRow(['VÃ©lo', 63321, '+88%', 33618]);
    dataLosses.addRow(['Assassin blanc', 55970, '+74%', 32136]);
    dataLosses.addRow(['Meteo', 260438, '+245%', 75350]);
    dataLosses.addRow(['UAV-alpha', 62237, '+171%', 22961]);
    dataLosses.addRow(['Thitub', 99504, '+114%', 46424]);
    dataLosses.addRow(['Shingacook', 100077, '+145%', 40729]);
    dataLosses.addRow(['Prince', 69384, '+46%', 47319]);
    dataLosses.addRow(['El Battory', 65517, '+130%', 28368]);
    dataLosses.addRow(['Sephirt', 60023, '+71%', 35003]);
    dataLosses.addRow(['Nalox', 52350, '+196%', 17666]);
    dataLosses.addRow(['Buffalo', 134425, '+146%', 54635]);
    dataLosses.addRow(['Emacab', 70639, '+253%', 19961]);
    dataLosses.addRow(['Ohroms', 140596, '+109%', 67064]);
    dataLosses.addRow(['Bnlover', 81321, '+282%', 21247]);
    dataLosses.addRow(['Robindesoibs', 88287, '+271%', 23752]);
    dataLosses.addRow(['Pietrobu', 57170, '+206%', 18641]);
    dataLosses.addRow(['Scoutix', 72992, '+15%', 63174]);
    dataLosses.addRow(['Skarn', 198035, '+81%', 109014]);
    dataLosses.addRow(['Sisao', 38634, '+24%', 30951]);
    dataLosses.addRow(['Azrock', 85731, '+112%', 40275]);
    dataLosses.addRow(['Zeleph', 134339, '+192%', 45906]);
    dataLosses.addRow(['Aikiko', 74234, '+116%', 34331]);
    dataLosses.addRow(['Labtec', 64778, '+93%', 33556]);
    dataLosses.addRow(['Ormace', 81141, '+103%', 39806]);
    dataLosses.addRow(['Ocelot', 50860, '+48%', 34263]);
    dataLosses.addRow(['Sasaynel', 69542, '+152%', 27575]);
    dataLosses.addRow(['Stellaria', 27660, '+154%', 10853]);
    dataLosses.addRow(['Tokipant', 96859, '+544%', 15031]);
    dataLosses.addRow(['Jayllos112', 79531, '+76%', 45137]);
    dataLosses.addRow(['Genesis', 58015, '+130%', 25221]);
    dataLosses.addRow(['Geronimo', 74041, '+125%', 32814]);
    dataLosses.addRow(['Morgenstar', 155753, '+196%', 52572]);
    dataLosses.addRow(['Elpha', 38652, '+152%', 15299]);

    dataLosses.sort({column: 1, desc: true});

    dataProfessionalism.addColumn('string', 'Joueur');
    dataProfessionalism.addColumn('number', 'Session 2');
    dataProfessionalism.addColumn({type:'string', role:'annotation'});
    dataProfessionalism.addColumn('number', 'Session 1');

    dataProfessionalism.addRow(['Miox', 0.000, '-100%', 0.439]);
    dataProfessionalism.addRow(['Sharqu', 10.825, '+37%', 7.901]);
    dataProfessionalism.addRow(['Poseidon', 16.510, '+0%', 16.660]);
    dataProfessionalism.addRow(['Darmius', 0.000, '+0%', 0.000]);
    dataProfessionalism.addRow(['VÃ©lo', 8.105, '+5%', 7.703]);
    dataProfessionalism.addRow(['Assassin blanc', 4.001, '+0%', 4.001]);
    dataProfessionalism.addRow(['Meteo', 4.300, '-35%', 6.702]);
    dataProfessionalism.addRow(['UAV-alpha', 5.002, '+150%', 1.999]);
    dataProfessionalism.addRow(['Thitub', 0.046, '+0%', 0.000]);
    dataProfessionalism.addRow(['Shingacook', 3.500, '+0%', 0.000]);
    dataProfessionalism.addRow(['Prince', 13.058, '+44%', 9.064]);
    dataProfessionalism.addRow(['El Battory', 1.553, '+121%', 0.702]);
    dataProfessionalism.addRow(['Sephirt', 1.804, '-51%', 3.702]);
    dataProfessionalism.addRow(['Nalox', 4.443, '-44%', 8.002]);
    dataProfessionalism.addRow(['Buffalo', 0.000, '-100%', 2.356]);
    dataProfessionalism.addRow(['Emacab', 23.770, '+63%', 14.536]);
    dataProfessionalism.addRow(['Ohroms', 4.413, '+29%', 3.412]);
    dataProfessionalism.addRow(['Bnlover', 0.769, '+0%', 0.000]);
    dataProfessionalism.addRow(['Robindesoibs', 6.839, '-28%', 9.512]);
    dataProfessionalism.addRow(['Pietrobu', 4.999, '+0%', 4.999]);
    dataProfessionalism.addRow(['Scoutix', 8.676, '+0%', 0.000]);
    dataProfessionalism.addRow(['Skarn', 1.257, '+0%', 0.000]);
    dataProfessionalism.addRow(['Sisao', 2.292, '+0%', 2.292]);
    dataProfessionalism.addRow(['Azrock', 1.025, '-12%', 1.172]);
    dataProfessionalism.addRow(['Zeleph', 3.903, '+289%', 1.001]);
    dataProfessionalism.addRow(['Aikiko', 0.000, '+0%', 0.006]);
    dataProfessionalism.addRow(['Labtec', 5.972, '+31%', 4.553]);
    dataProfessionalism.addRow(['Ormace', 7.755, '+14%', 6.754]);
    dataProfessionalism.addRow(['Ocelot', 12.350, '+367%', 2.640]);
    dataProfessionalism.addRow(['Sasaynel', 7.352, '+15%', 6.351]);
    dataProfessionalism.addRow(['Stellaria', 12.872, '+75%', 7.349]);
    dataProfessionalism.addRow(['Tokipant', 5.072, '-46%', 9.473]);
    dataProfessionalism.addRow(['Jayllos112', 3.598, '+382%', 0.745]);
    dataProfessionalism.addRow(['Genesis', 12.698, '+322%', 3.003]);
    dataProfessionalism.addRow(['Geronimo', 1.257, '+0%', 0.000]);
    dataProfessionalism.addRow(['Morgenstar', 7.675, '+233%', 2.304]);
    dataProfessionalism.addRow(['Elpha', 15.906, '+241%', 4.660]);

    dataProfessionalism.sort({column: 1, desc: true});

    dashboardGeneral.bind(stringFilterGeneral, chartGeneral);

    sessionTitleDiv.innerText = 'Session 2'
    mapRef.href = './images/sessions/session2.jpg'
    mapImg.src = './images/sessions/session2.jpg'
    dashboardGeneral.draw(dataGeneral);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};

let drawSession3 = function () {

    cleanTables();

    dataGeneral.addRow(['Miox (Orissa)', 399, 54.934, 41947, 51, 32, 149303, 414, 2.246]);
    dataGeneral.addRow(['Sharqu (France)', 697, 70.466, 66062, 87, 47, 250873, 0, 13.504]);
    dataGeneral.addRow(['Poseidon (Castile)', 389, 54.228, 39408, 49, 29, 94578, 0, 25.589]);
    dataGeneral.addRow(['Darmius (Candar)', 283, 25.706, 25663, 31, 29, 129260, 0, 0.223]);
    dataGeneral.addRow(['VÃ©lo (Vijayanagar)', 208, 26.292, 22137, 24, 17, 134022, 819, 3.168]);
    dataGeneral.addRow(['Assassin blanc (Jerusalem)', 343, 27.34, 25326, 32, 35, 88400, 0, 4.001]);
    dataGeneral.addRow(['Meteo (Austria)', 325, 43.476, 38536, 35, 22, 289020, 0, 20.355]);
    dataGeneral.addRow(['UAV-alpha (Muscovy)', 394, 41.575, 35518, 52, 46, 64427, 0, 16.504]);
    dataGeneral.addRow(['Thitub (Poland)', 365, 35.737, 39714, 51, 27, 151126, 0, 0.046]);
    dataGeneral.addRow(['Shingacook (Kazan)', 245, 18.173, 31815, 32, 36, 149536, 0, 7.001]);
    dataGeneral.addRow(['Prince (Mewar)', 189, 17.692, 27564, 24, 23, 94041, 96, 24.332]);
    dataGeneral.addRow(['El Battory (Persia)', 257, 24.15, 24309, 29, 35, 93113, 0, 5.554]);
    dataGeneral.addRow(['Sephirt (Nepal)', 259, 28.217, 24466, 40, 20, 94351, 0, 2.805]);
    dataGeneral.addRow(['Nalox (Brabant)', 239, 46.312, 22163, 34, 15, 88690, 0, 14.899]);
    dataGeneral.addRow(['Buffalo (Ethiopia)', 340, 28.521, 26650, 35, 64, 172648, 1939, 6.000]);
    dataGeneral.addRow(['Emacab (Switzerland)', 210, 15.406, 18441, 20, 17, 89830, 0, 26.007]);
    dataGeneral.addRow(['Ohroms (England)', 530, 54.067, 34271, 50, 63, 173238, 0, 5.264]);
    dataGeneral.addRow(['Bnlover (Tunis)', 184, 17.378, 21159, 25, 25, 99291, 0, 0.497]);
    dataGeneral.addRow(['Robindesoibs (Venice)', 256, 28.46, 19706, 26, 18, 99158, 0, 12.994]);
    dataGeneral.addRow(['Pietrobu (Portugal)', 342, 43.828, 21425, 36, 29, 92506, 167, 6.000]);
    dataGeneral.addRow(['Scoutix (Denmark)', 227, 33.244, 23626, 30, 17, 116714, 0, 11.609]);
    dataGeneral.addRow(['Skarn (Byzantium)', 258, 24.433, 29035, 31, 21, 227795, 134, 0.000]);
    dataGeneral.addRow(['Sisao (Sweden)', 176, 18.023, 22127, 25, 31, 55735, 506, 5.792]);
    dataGeneral.addRow(['Azrock (Chagatai)', 373, 27.353, 35891, 42, 51, 91687, 0, 5.670]);
    dataGeneral.addRow(['Zeleph (Lithuania)', 417, 24.178, 22696, 38, 52, 156829, 0, 6.982]);
    dataGeneral.addRow(['Aikiko (Shirvan)', 291, 19.799, 24612, 25, 32, 99808, 0, 1.578]);
    dataGeneral.addRow(['Labtec (Madurai)', 177, 24.234, 22081, 22, 16, 71824, 0, 16.248]);
    dataGeneral.addRow(['Ormace (Hungary)', 405, 48.036, 50121, 46, 39, 88321, 0, 12.756]);
    dataGeneral.addRow(['Ocelot (Bahmanis)', 186, 21.146, 22893, 26, 17, 72316, 0, 21.838]);
    dataGeneral.addRow(['Sasaynel (Mushasha)', 258, 21.802, 26305, 29, 32, 95742, 0, 12.354]);
    dataGeneral.addRow(['Stellaria (Hesse)', 186, 21.834, 17782, 19, 9, 59149, 0, 22.162]);
    dataGeneral.addRow(['Tokipant (Milan)', 237, 29.565, 23366, 28, 11, 170394, 0, 6.265]);
    dataGeneral.addRow(['Jayllos112 (Punjab)', 242, 23.544, 21615, 31, 18, 111026, 0, 14.148]);
    dataGeneral.addRow(['Genesis (Brandenburg)', 206, 19.608, 20392, 24, 17, 110357, 209, 2.765]);
    dataGeneral.addRow(['Geronimo (Yemen)', 252, 20.308, 30202, 27, 30, 103746, 0, 6.555]);
    dataGeneral.addRow(['Morgenstar (Naples)', 161, 17.321, 24591, 22, 10, 215401, 0, 1.370]);
    dataGeneral.addRow(['Elpha (Morocco)', 279, 31.184, 20363, 29, 31, 88745, 0, 13.406]);


    dataDev.addColumn('string', 'Joueur');
    dataDev.addColumn('number', 'Session 3');
    dataDev.addColumn({type: 'string', role: 'annotation'});
    dataDev.addColumn('number', 'Session 2');

    dataDev.addRow(['Miox', 399, '+19%', 335]);
    dataDev.addRow(['Sharqu', 697, '+43%', 485]);
    dataDev.addRow(['Poseidon', 389, '-10%', 434]);
    dataDev.addRow(['Darmius', 283, '+2%', 275]);
    dataDev.addRow(['VÃ©lo', 208, '+13%', 183]);
    dataDev.addRow(['Assassin blanc', 343, '+48%', 231]);
    dataDev.addRow(['Meteo', 325, '+58%', 205]);
    dataDev.addRow(['UAV-alpha', 394, '+3%', 382]);
    dataDev.addRow(['Thitub', 365, '+5%', 345]);
    dataDev.addRow(['Shingacook', 245, '+44%', 170]);
    dataDev.addRow(['Prince', 189, '+4%', 181]);
    dataDev.addRow(['El Battory', 257, '+39%', 184]);
    dataDev.addRow(['Sephirt', 259, '+7%', 241]);
    dataDev.addRow(['Nalox', 239, '+43%', 167]);
    dataDev.addRow(['Buffalo', 340, '-5%', 359]);
    dataDev.addRow(['Emacab', 210, '+21%', 173]);
    dataDev.addRow(['Ohroms', 530, '+28%', 414]);
    dataDev.addRow(['Bnlover', 184, '+7%', 171]);
    dataDev.addRow(['Robindesoibs', 256, '+10%', 232]);
    dataDev.addRow(['Pietrobu', 342, '+28%', 267]);
    dataDev.addRow(['Scoutix', 227, '+16%', 195]);
    dataDev.addRow(['Skarn', 258, '+18%', 218]);
    dataDev.addRow(['Sisao', 176, '+12%', 156]);
    dataDev.addRow(['Azrock', 373, '+35%', 275]);
    dataDev.addRow(['Zeleph', 417, '+20%', 345]);
    dataDev.addRow(['Aikiko', 291, '+59%', 183]);
    dataDev.addRow(['Labtec', 177, '+0%', 177]);
    dataDev.addRow(['Ormace', 405, '+45%', 279]);
    dataDev.addRow(['Ocelot', 186, '+10%', 169]);
    dataDev.addRow(['Sasaynel', 258, '+22%', 211]);
    dataDev.addRow(['Stellaria', 186, '+190%', 64]);
    dataDev.addRow(['Tokipant', 237, '+15%', 205]);
    dataDev.addRow(['Jayllos112', 242, '+15%', 210]);
    dataDev.addRow(['Genesis', 206, '+24%', 166]);
    dataDev.addRow(['Geronimo', 252, '+12%', 224]);
    dataDev.addRow(['Morgenstar', 161, '-22%', 208]);
    dataDev.addRow(['Elpha', 279, '+30%', 213]);

    dataDev.sort({column: 1, desc: true});

    dataIncome.addColumn('string', 'Joueur');
    dataIncome.addColumn('number', 'Session 3');
    dataIncome.addColumn({type: 'string', role: 'annotation'});
    dataIncome.addColumn('number', 'Session 2');

    dataIncome.addRow(['Miox', 54.934, '+52%', 35.914]);
    dataIncome.addRow(['Sharqu', 70.466, '+48%', 47.333]);
    dataIncome.addRow(['Poseidon', 54.228, '+44%', 37.639]);
    dataIncome.addRow(['Darmius', 25.706, '+54%', 16.68]);
    dataIncome.addRow(['VÃ©lo', 26.292, '+39%', 18.82]);
    dataIncome.addRow(['Assassin blanc', 27.34, '+114%', 12.738]);
    dataIncome.addRow(['Meteo', 43.476, '+32%', 32.821]);
    dataIncome.addRow(['UAV-alpha', 41.575, '+53%', 26.998]);
    dataIncome.addRow(['Thitub', 35.737, '+32%', 27.032]);
    dataIncome.addRow(['Shingacook', 18.173, '+30%', 13.889]);
    dataIncome.addRow(['Prince', 17.692, '+19%', 14.799]);
    dataIncome.addRow(['El Battory', 24.15, '+55%', 15.553]);
    dataIncome.addRow(['Sephirt', 28.217, '+64%', 17.194]);
    dataIncome.addRow(['Nalox', 46.312, '+95%', 23.741]);
    dataIncome.addRow(['Buffalo', 28.521, '+35%', 21.083]);
    dataIncome.addRow(['Emacab', 15.406, '+24%', 12.404]);
    dataIncome.addRow(['Ohroms', 54.067, '+21%', 44.442]);
    dataIncome.addRow(['Bnlover', 17.378, '+42%', 12.157]);
    dataIncome.addRow(['Robindesoibs', 28.46, '+87%', 15.194]);
    dataIncome.addRow(['Pietrobu', 43.828, '+66%', 26.273]);
    dataIncome.addRow(['Scoutix', 33.244, '+48%', 22.386]);
    dataIncome.addRow(['Skarn', 24.433, '+78%', 13.681]);
    dataIncome.addRow(['Sisao', 18.023, '+59%', 11.281]);
    dataIncome.addRow(['Azrock', 27.353, '+63%', 16.749]);
    dataIncome.addRow(['Zeleph', 24.178, '+18%', 20.38]);
    dataIncome.addRow(['Aikiko', 19.799, '+62%', 12.212]);
    dataIncome.addRow(['Labtec', 24.234, '+35%', 17.847]);
    dataIncome.addRow(['Ormace', 48.036, '+31%', 36.659]);
    dataIncome.addRow(['Ocelot', 21.146, '+18%', 17.845]);
    dataIncome.addRow(['Sasaynel', 21.802, '+62%', 13.39]);
    dataIncome.addRow(['Stellaria', 21.834, '+154%', 8.583]);
    dataIncome.addRow(['Tokipant', 29.565, '+20%', 24.57]);
    dataIncome.addRow(['Jayllos112', 23.544, '+37%', 17.128]);
    dataIncome.addRow(['Genesis', 19.608, '+30%', 15.049]);
    dataIncome.addRow(['Geronimo', 20.308, '+46%', 13.868]);
    dataIncome.addRow(['Morgenstar', 17.321, '-11%', 19.491]);
    dataIncome.addRow(['Elpha', 31.184, '+12%', 27.636]);

    dataIncome.sort({column: 1, desc: true});

    dataManpower.addColumn('string', 'Joueur');
    dataManpower.addColumn('number', 'Session 3');
    dataManpower.addColumn({type: 'string', role: 'annotation'});
    dataManpower.addColumn('number', 'Session 2');

    dataManpower.addRow(['Miox', 41947, '+49%', 28132]);
    dataManpower.addRow(['Sharqu', 66062, '+39%', 47333]);
    dataManpower.addRow(['Poseidon', 39408, '+20%', 32587]);
    dataManpower.addRow(['Darmius', 25663, '+21%', 21137]);
    dataManpower.addRow(['VÃ©lo', 22137, '+29%', 17153]);
    dataManpower.addRow(['Assassin blanc', 25326, '+27%', 19913]);
    dataManpower.addRow(['Meteo', 38536, '-5%', 40675]);
    dataManpower.addRow(['UAV-alpha', 35518, '+23%', 28796]);
    dataManpower.addRow(['Thitub', 39714, '+59%', 24840]);
    dataManpower.addRow(['Shingacook', 31815, '+29%', 24518]);
    dataManpower.addRow(['Prince', 27564, '+23%', 22291]);
    dataManpower.addRow(['El Battory', 24309, '+44%', 16843]);
    dataManpower.addRow(['Sephirt', 24466, '+25%', 19545]);
    dataManpower.addRow(['Nalox', 22163, '+28%', 17235]);
    dataManpower.addRow(['Buffalo', 26650, '+22%', 21811]);
    dataManpower.addRow(['Emacab', 18441, '+6%', 17264]);
    dataManpower.addRow(['Ohroms', 34271, '+20%', 28335]);
    dataManpower.addRow(['Bnlover', 21159, '+6%', 19817]);
    dataManpower.addRow(['Robindesoibs', 19706, '-9%', 21665]);
    dataManpower.addRow(['Pietrobu', 21425, '-6%', 22833]);
    dataManpower.addRow(['Scoutix', 23626, '+7%', 21967]);
    dataManpower.addRow(['Skarn', 29035, '+36%', 21263]);
    dataManpower.addRow(['Sisao', 22127, '+2%', 21587]);
    dataManpower.addRow(['Azrock', 35891, '+26%', 28384]);
    dataManpower.addRow(['Zeleph', 22696, '+0%', 22585]);
    dataManpower.addRow(['Aikiko', 24612, '+50%', 16404]);
    dataManpower.addRow(['Labtec', 22081, '+24%', 17785]);
    dataManpower.addRow(['Ormace', 50121, '+62%', 30917]);
    dataManpower.addRow(['Ocelot', 22893, '+19%', 19089]);
    dataManpower.addRow(['Sasaynel', 26305, '+7%', 24396]);
    dataManpower.addRow(['Stellaria', 17782, '+21%', 14583]);
    dataManpower.addRow(['Tokipant', 23366, '-18%', 28814]);
    dataManpower.addRow(['Jayllos112', 21615, '+0%', 21409]);
    dataManpower.addRow(['Genesis', 20392, '+0%', 20469]);
    dataManpower.addRow(['Geronimo', 30202, '+1%', 29619]);
    dataManpower.addRow(['Morgenstar', 24591, '-13%', 28465]);
    dataManpower.addRow(['Elpha', 20363, '+2%', 19807]);

    dataManpower.sort({column: 1, desc: true});

    dataForceLimit.addColumn('string', 'Joueur');
    dataForceLimit.addColumn('number', 'Session 3');
    dataForceLimit.addColumn({type: 'string', role: 'annotation'});
    dataForceLimit.addColumn('number', 'Session 2');

    dataForceLimit.addRow(['Miox', 51, '+45%', 35]);
    dataForceLimit.addRow(['Sharqu', 87, '+81%', 48]);
    dataForceLimit.addRow(['Poseidon', 49, '+28%', 38]);
    dataForceLimit.addRow(['Darmius', 31, '+34%', 23]);
    dataForceLimit.addRow(['VÃ©lo', 24, '+9%', 22]);
    dataForceLimit.addRow(['Assassin blanc', 32, '+52%', 21]);
    dataForceLimit.addRow(['Meteo', 35, '+34%', 26]);
    dataForceLimit.addRow(['UAV-alpha', 52, '+30%', 40]);
    dataForceLimit.addRow(['Thitub', 51, '+34%', 38]);
    dataForceLimit.addRow(['Shingacook', 32, '+6%', 30]);
    dataForceLimit.addRow(['Prince', 24, '+19%', 20]);
    dataForceLimit.addRow(['El Battory', 29, '+70%', 17]);
    dataForceLimit.addRow(['Sephirt', 40, '+21%', 33]);
    dataForceLimit.addRow(['Nalox', 34, '+112%', 16]);
    dataForceLimit.addRow(['Buffalo', 35, '+20%', 29]);
    dataForceLimit.addRow(['Emacab', 20, '+17%', 17]);
    dataForceLimit.addRow(['Ohroms', 50, '+42%', 35]);
    dataForceLimit.addRow(['Bnlover', 25, '+13%', 22]);
    dataForceLimit.addRow(['Robindesoibs', 26, '+8%', 24]);
    dataForceLimit.addRow(['Pietrobu', 36, '+38%', 26]);
    dataForceLimit.addRow(['Scoutix', 30, '+42%', 21]);
    dataForceLimit.addRow(['Skarn', 31, '+29%', 24]);
    dataForceLimit.addRow(['Sisao', 25, '+19%', 21]);
    dataForceLimit.addRow(['Azrock', 42, '+23%', 34]);
    dataForceLimit.addRow(['Zeleph', 38, '+8%', 35]);
    dataForceLimit.addRow(['Aikiko', 25, '+56%', 16]);
    dataForceLimit.addRow(['Labtec', 22, '+22%', 18]);
    dataForceLimit.addRow(['Ormace', 46, '+27%', 36]);
    dataForceLimit.addRow(['Ocelot', 26, '+13%', 23]);
    dataForceLimit.addRow(['Sasaynel', 29, '+20%', 24]);
    dataForceLimit.addRow(['Stellaria', 19, '+58%', 12]);
    dataForceLimit.addRow(['Tokipant', 28, '+7%', 26]);
    dataForceLimit.addRow(['Jayllos112', 31, '+34%', 23]);
    dataForceLimit.addRow(['Genesis', 24, '+19%', 20]);
    dataForceLimit.addRow(['Geronimo', 27, '+12%', 24]);
    dataForceLimit.addRow(['Morgenstar', 22, '-15%', 26]);
    dataForceLimit.addRow(['Elpha', 29, '+11%', 26]);

    dataForceLimit.sort({column: 1, desc: true});

    dataNbProvinces.addColumn('string', 'Joueur');
    dataNbProvinces.addColumn('number', 'Session 3');
    dataNbProvinces.addColumn({type: 'string', role: 'annotation'});
    dataNbProvinces.addColumn('number', 'Session 2');

    dataNbProvinces.addRow(['Miox', 32, '+0%', 32]);
    dataNbProvinces.addRow(['Sharqu', 47, '+34%', 35]);
    dataNbProvinces.addRow(['Poseidon', 29, '-19%', 36]);
    dataNbProvinces.addRow(['Darmius', 29, '+3%', 28]);
    dataNbProvinces.addRow(['VÃ©lo', 17, '+13%', 15]);
    dataNbProvinces.addRow(['Assassin blanc', 35, '+52%', 23]);
    dataNbProvinces.addRow(['Meteo', 22, '+57%', 14]);
    dataNbProvinces.addRow(['UAV-alpha', 46, '+0%', 46]);
    dataNbProvinces.addRow(['Thitub', 27, '-3%', 28]);
    dataNbProvinces.addRow(['Shingacook', 36, '+38%', 26]);
    dataNbProvinces.addRow(['Prince', 23, '+4%', 22]);
    dataNbProvinces.addRow(['El Battory', 35, '+29%', 27]);
    dataNbProvinces.addRow(['Sephirt', 20, '+5%', 19]);
    dataNbProvinces.addRow(['Nalox', 15, '+50%', 10]);
    dataNbProvinces.addRow(['Buffalo', 64, '+3%', 62]);
    dataNbProvinces.addRow(['Emacab', 17, '+13%', 15]);
    dataNbProvinces.addRow(['Ohroms', 63, '+16%', 54]);
    dataNbProvinces.addRow(['Bnlover', 25, '+0%', 25]);
    dataNbProvinces.addRow(['Robindesoibs', 18, '+12%', 16]);
    dataNbProvinces.addRow(['Pietrobu', 29, '+20%', 24]);
    dataNbProvinces.addRow(['Scoutix', 17, '+0%', 17]);
    dataNbProvinces.addRow(['Skarn', 21, '+16%', 18]);
    dataNbProvinces.addRow(['Sisao', 31, '+6%', 29]);
    dataNbProvinces.addRow(['Azrock', 51, '+30%', 39]);
    dataNbProvinces.addRow(['Zeleph', 52, '+15%', 45]);
    dataNbProvinces.addRow(['Aikiko', 32, '+52%', 21]);
    dataNbProvinces.addRow(['Labtec', 16, '+0%', 16]);
    dataNbProvinces.addRow(['Ormace', 39, '+25%', 31]);
    dataNbProvinces.addRow(['Ocelot', 17, '+6%', 16]);
    dataNbProvinces.addRow(['Sasaynel', 32, '+18%', 27]);
    dataNbProvinces.addRow(['Stellaria', 9, '+125%', 4]);
    dataNbProvinces.addRow(['Tokipant', 11, '+22%', 9]);
    dataNbProvinces.addRow(['Jayllos112', 18, '+19%', 15]);
    dataNbProvinces.addRow(['Genesis', 17, '+13%', 15]);
    dataNbProvinces.addRow(['Geronimo', 30, '+0%', 30]);
    dataNbProvinces.addRow(['Morgenstar', 10, '-28%', 14]);
    dataNbProvinces.addRow(['Elpha', 31, '+34%', 23]);

    dataNbProvinces.sort({column: 1, desc: true});

    dataLosses.addColumn('string', 'Joueur');
    dataLosses.addColumn('number', 'Session 3');
    dataLosses.addColumn({type: 'string', role: 'annotation'});
    dataLosses.addColumn('number', 'Session 2');

    dataLosses.addRow(['Miox', 149303, '+135%', 63410]);
    dataLosses.addRow(['Sharqu', 250873, '+13%', 220435]);
    dataLosses.addRow(['Poseidon', 94578, '+51%', 62476]);
    dataLosses.addRow(['Darmius', 129260, '+43%', 89919]);
    dataLosses.addRow(['VÃ©lo', 134022, '+111%', 63321]);
    dataLosses.addRow(['Assassin blanc', 88400, '+57%', 55970]);
    dataLosses.addRow(['Meteo', 289020, '+10%', 260438]);
    dataLosses.addRow(['UAV-alpha', 64427, '+3%', 62237]);
    dataLosses.addRow(['Thitub', 151126, '+51%', 99504]);
    dataLosses.addRow(['Shingacook', 149536, '+49%', 100077]);
    dataLosses.addRow(['Prince', 94041, '+35%', 69384]);
    dataLosses.addRow(['El Battory', 93113, '+42%', 65517]);
    dataLosses.addRow(['Sephirt', 94351, '+57%', 60023]);
    dataLosses.addRow(['Nalox', 88690, '+69%', 52350]);
    dataLosses.addRow(['Buffalo', 172648, '+28%', 134425]);
    dataLosses.addRow(['Emacab', 89830, '+27%', 70639]);
    dataLosses.addRow(['Ohroms', 173238, '+23%', 140596]);
    dataLosses.addRow(['Bnlover', 99291, '+22%', 81321]);
    dataLosses.addRow(['Robindesoibs', 99158, '+12%', 88287]);
    dataLosses.addRow(['Pietrobu', 92506, '+61%', 57170]);
    dataLosses.addRow(['Scoutix', 116714, '+59%', 72992]);
    dataLosses.addRow(['Skarn', 227795, '+15%', 198035]);
    dataLosses.addRow(['Sisao', 55735, '+44%', 38634]);
    dataLosses.addRow(['Azrock', 91687, '+6%', 85731]);
    dataLosses.addRow(['Zeleph', 156829, '+16%', 134339]);
    dataLosses.addRow(['Aikiko', 99808, '+34%', 74234]);
    dataLosses.addRow(['Labtec', 71824, '+10%', 64778]);
    dataLosses.addRow(['Ormace', 88321, '+8%', 81141]);
    dataLosses.addRow(['Ocelot', 72316, '+42%', 50860]);
    dataLosses.addRow(['Sasaynel', 95742, '+37%', 69542]);
    dataLosses.addRow(['Stellaria', 59149, '+113%', 27660]);
    dataLosses.addRow(['Tokipant', 170394, '+75%', 96859]);
    dataLosses.addRow(['Jayllos112', 111026, '+39%', 79531]);
    dataLosses.addRow(['Genesis', 110357, '+90%', 58015]);
    dataLosses.addRow(['Geronimo', 103746, '+40%', 74041]);
    dataLosses.addRow(['Morgenstar', 215401, '+38%', 155753]);
    dataLosses.addRow(['Elpha', 88745, '+129%', 38652]);

    dataLosses.sort({column: 1, desc: true});

    dataProfessionalism.addColumn('string', 'Joueur');
    dataProfessionalism.addColumn('number', 'Session 3');
    dataProfessionalism.addColumn({type: 'string', role: 'annotation'});
    dataProfessionalism.addColumn('number', 'Session 2');

    dataProfessionalism.addRow(['Miox', 2.246, '+0%', 0.000]);
    dataProfessionalism.addRow(['Sharqu', 13.504, '+24%', 10.825]);
    dataProfessionalism.addRow(['Poseidon', 25.589, '+54%', 16.510]);
    dataProfessionalism.addRow(['Darmius', 0.223, '+0%', 0.000]);
    dataProfessionalism.addRow(['VÃ©lo', 3.168, '-60%', 8.105]);
    dataProfessionalism.addRow(['Assassin blanc', 4.001, '+0%', 4.001]);
    dataProfessionalism.addRow(['Meteo', 20.355, '+373%', 4.300]);
    dataProfessionalism.addRow(['UAV-alpha', 16.504, '+229%', 5.002]);
    dataProfessionalism.addRow(['Thitub', 0.046, '+0%', 0.046]);
    dataProfessionalism.addRow(['Shingacook', 7.001, '+100%', 3.500]);
    dataProfessionalism.addRow(['Prince', 24.332, '+86%', 13.058]);
    dataProfessionalism.addRow(['El Battory', 5.554, '+257%', 1.553]);
    dataProfessionalism.addRow(['Sephirt', 2.805, '+55%', 1.804]);
    dataProfessionalism.addRow(['Nalox', 14.899, '+235%', 4.443]);
    dataProfessionalism.addRow(['Buffalo', 6.000, '+0%', 0.000]);
    dataProfessionalism.addRow(['Emacab', 26.007, '+9%', 23.770]);
    dataProfessionalism.addRow(['Ohroms', 5.264, '+19%', 4.413]);
    dataProfessionalism.addRow(['Bnlover', 0.497, '-35%', 0.769]);
    dataProfessionalism.addRow(['Robindesoibs', 12.994, '+89%', 6.839]);
    dataProfessionalism.addRow(['Pietrobu', 6.000, '+20%', 4.999]);
    dataProfessionalism.addRow(['Scoutix', 11.609, '+33%', 8.676]);
    dataProfessionalism.addRow(['Skarn', 0.000, '-100%', 1.257]);
    dataProfessionalism.addRow(['Sisao', 5.792, '+152%', 2.292]);
    dataProfessionalism.addRow(['Azrock', 5.670, '+453%', 1.025]);
    dataProfessionalism.addRow(['Zeleph', 6.982, '+78%', 3.903]);
    dataProfessionalism.addRow(['Aikiko', 1.578, '+0%', 0.000]);
    dataProfessionalism.addRow(['Labtec', 16.248, '+172%', 5.972]);
    dataProfessionalism.addRow(['Ormace', 12.756, '+64%', 7.755]);
    dataProfessionalism.addRow(['Ocelot', 21.838, '+76%', 12.350]);
    dataProfessionalism.addRow(['Sasaynel', 12.354, '+68%', 7.352]);
    dataProfessionalism.addRow(['Stellaria', 22.162, '+72%', 12.872]);
    dataProfessionalism.addRow(['Tokipant', 6.265, '+23%', 5.072]);
    dataProfessionalism.addRow(['Jayllos112', 14.148, '+293%', 3.598]);
    dataProfessionalism.addRow(['Genesis', 2.765, '-78%', 12.698]);
    dataProfessionalism.addRow(['Geronimo', 6.555, '+421%', 1.257]);
    dataProfessionalism.addRow(['Morgenstar', 1.370, '-82%', 7.675]);
    dataProfessionalism.addRow(['Elpha', 13.406, '-15%', 15.906]);

    dataProfessionalism.sort({column: 1, desc: true});

    dashboardGeneral.bind(stringFilterGeneral, chartGeneral);

    sessionTitleDiv.innerText = 'Session 3'
    mapRef.href = './images/sessions/session3.jpg'
    mapImg.src = './images/sessions/session3.jpg'
    dashboardGeneral.draw(dataGeneral);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};

let drawSession4 = function () {

    cleanTables();

    dataGeneral.addRow(['Miox (Orissa)', 485, 78.444, 55754, 74, 36, 187305, 0, 12.286]);
    dataGeneral.addRow(['Sharqu (France)', 839, 106.128, 86248, 110, 51, 434932, 0, 23.157]);
    dataGeneral.addRow(['Poseidon (Spain)', 627, 86.72, 47340, 84, 48, 221459, 317, 24.991]);
    dataGeneral.addRow(['Darmius (Candar)', 400, 47.277, 34211, 40, 37, 201098, 924, 0.000]);
    dataGeneral.addRow(['VÃ©lo (Vijayanagar)', 236, 36.91, 22811, 27, 17, 151017, 0, 3.168]);
    dataGeneral.addRow(['Assassin blanc (Jerusalem)', 423, 37.175, 33529, 36, 46, 150958, 0, 5.255]);
    dataGeneral.addRow(['Meteo (Austria)', 498, 70.692, 44370, 60, 34, 372441, 0, 29.739]);
    dataGeneral.addRow(['UAV-alpha (Russia)', 530, 54.592, 74642, 93, 56, 81550, 0, 23.505]);
    dataGeneral.addRow(['Thitub (Poland)', 404, 46.826, 38470, 54, 30, 346651, 0, 0.000]);
    dataGeneral.addRow(['Shingacook (Kazan)', 296, 30.578, 26299, 34, 42, 188372, 0, 9.000]);
    dataGeneral.addRow(['Prince (Mewar)', 210, 20.95, 29558, 25, 26, 136288, 0, 28.143]);
    dataGeneral.addRow(['El Battory (Persia)', 293, 33.982, 37585, 34, 37, 167210, 294, 4.358]);
    dataGeneral.addRow(['Sephirt (Nepal)', 290, 36.711, 34643, 44, 22, 151712, 0, 2.698]);
    dataGeneral.addRow(['Nalox (Brabant)', 294, 49.165, 23746, 43, 19, 172108, 0, 3.430]);
    dataGeneral.addRow(['Buffalo (Ethiopia)', 351, 39.468, 26897, 40, 63, 206700, 0, 7.501]);
    dataGeneral.addRow(['Emacab (Switzerland)', 257, 26.598, 23009, 28, 18, 106900, 125, 37.729]);
    dataGeneral.addRow(['Ohroms (Great Britain)', 614, 80.557, 40965, 72, 72, 245693, 328, 15.265]);
    dataGeneral.addRow(['Bnlover (Tunis)', 271, 21.903, 22510, 29, 37, 152757, 0, 2.081]);
    dataGeneral.addRow(['Robindesoibs (Venice)', 268, 44.284, 23486, 31, 18, 100437, 0, 26.089]);
    dataGeneral.addRow(['Pietrobu (Portugal)', 437, 44.703, 24042, 40, 38, 151159, 0, 5.850]);
    dataGeneral.addRow(['Scoutix (Denmark)', 301, 38.127, 29148, 34, 23, 221294, 0, 8.017]);
    dataGeneral.addRow(['Skarn (Byzantium)', 217, 30.135, 28351, 29, 16, 259588, 938, 5.353]);
    dataGeneral.addRow(['Sisao (Sweden)', 226, 28.314, 25389, 27, 36, 128586, 437, 2.798]);
    dataGeneral.addRow(['Azrock (Chagatai)', 434, 42.022, 35556, 41, 55, 168352, 0, 8.670]);
    dataGeneral.addRow(['Zeleph (Ruthenia)', 428, 38.931, 39586, 52, 49, 208721, 0, 12.982]);
    dataGeneral.addRow(['Aikiko (Shirvan)', 342, 34.361, 30272, 30, 35, 117101, 0, 2.908]);
    dataGeneral.addRow(['Labtec (Madurai)', 236, 28.07, 26217, 30, 19, 119076, 0, 12.415]);
    dataGeneral.addRow(['Ormace (Hungary)', 484, 64.548, 63337, 61, 38, 160581, 0, 15.479]);
    dataGeneral.addRow(['Ocelot (Bahmanis)', 243, 33.765, 23340, 32, 19, 146614, 0, 0.003]);
    dataGeneral.addRow(['Sasaynel (Mushasha)', 306, 24.235, 30111, 33, 34, 144518, 318, 17.407]);
    dataGeneral.addRow(['Stellaria (Westphalia)', 358, 48.855, 24546, 60, 18, 100134, 0, 23.315]);
    dataGeneral.addRow(['Tokipant (Milan)', 328, 40.476, 28582, 37, 17, 199536, 0, 11.365]);
    dataGeneral.addRow(['Jayllos112 (Punjab)', 221, 23.35, 40591, 26, 16, 145040, 0, 23.080]);
    dataGeneral.addRow(['Genesis (Brandenburg)', 235, 23.643, 24895, 27, 18, 211322, 0, 3.964]);
    dataGeneral.addRow(['Geronimo (Yemen)', 299, 21.178, 33115, 32, 40, 145815, 310, 25.296]);
    dataGeneral.addRow(['Morgenstar (Naples)', 262, 31.032, 30764, 29, 14, 237640, 0, 0.064]);
    dataGeneral.addRow(['Elpha (Morocco)', 291, 33.093, 23523, 30, 31, 137326, 0, 11.908]);

    dataDev.addColumn('string', 'Joueur');
    dataDev.addColumn('number', 'Session 4');
    dataDev.addColumn({type: 'string', role: 'annotation'});
    dataDev.addColumn('number', 'Session 3');

    dataDev.addRow(['Miox', 485, '+21%', 399]);
    dataDev.addRow(['Sharqu', 839, '+20%', 697]);
    dataDev.addRow(['Poseidon', 627, '+61%', 389]);
    dataDev.addRow(['Darmius', 400, '+41%', 283]);
    dataDev.addRow(['VÃ©lo', 236, '+13%', 208]);
    dataDev.addRow(['Assassin blanc', 423, '+23%', 343]);
    dataDev.addRow(['Meteo', 498, '+53%', 325]);
    dataDev.addRow(['UAV-alpha', 530, '+34%', 394]);
    dataDev.addRow(['Thitub', 404, '+10%', 365]);
    dataDev.addRow(['Shingacook', 296, '+20%', 245]);
    dataDev.addRow(['Prince', 210, '+11%', 189]);
    dataDev.addRow(['El Battory', 293, '+14%', 257]);
    dataDev.addRow(['Sephirt', 290, '+11%', 259]);
    dataDev.addRow(['Nalox', 294, '+23%', 239]);
    dataDev.addRow(['Buffalo', 351, '+3%', 340]);
    dataDev.addRow(['Emacab', 257, '+22%', 210]);
    dataDev.addRow(['Ohroms', 614, '+15%', 530]);
    dataDev.addRow(['Bnlover', 271, '+47%', 184]);
    dataDev.addRow(['Robindesoibs', 268, '+4%', 256]);
    dataDev.addRow(['Pietrobu', 437, '+27%', 342]);
    dataDev.addRow(['Scoutix', 301, '+32%', 227]);
    dataDev.addRow(['Skarn', 217, '-15%', 258]);
    dataDev.addRow(['Sisao', 226, '+28%', 176]);
    dataDev.addRow(['Azrock', 434, '+16%', 373]);
    dataDev.addRow(['Zeleph', 428, '+2%', 417]);
    dataDev.addRow(['Aikiko', 342, '+17%', 291]);
    dataDev.addRow(['Labtec', 236, '+33%', 177]);
    dataDev.addRow(['Ormace', 484, '+19%', 405]);
    dataDev.addRow(['Ocelot', 243, '+30%', 186]);
    dataDev.addRow(['Sasaynel', 306, '+18%', 258]);
    dataDev.addRow(['Stellaria', 358, '+92%', 186]);
    dataDev.addRow(['Tokipant', 328, '+38%', 237]);
    dataDev.addRow(['Jayllos112', 221, '-8%', 242]);
    dataDev.addRow(['Genesis', 235, '+14%', 206]);
    dataDev.addRow(['Geronimo', 299, '+18%', 252]);
    dataDev.addRow(['Morgenstar', 262, '+62%', 161]);
    dataDev.addRow(['Elpha', 291, '+4%', 279]);

    dataDev.sort({column: 1, desc: true});

    dataIncome.addColumn('string', 'Joueur');
    dataIncome.addColumn('number', 'Session 4');
    dataIncome.addColumn({type: 'string', role: 'annotation'});
    dataIncome.addColumn('number', 'Session 3');

    dataIncome.addRow(['Miox', 78.444, '+42%', 54.934]);
    dataIncome.addRow(['Sharqu', 106.128, '+50%', 70.466]);
    dataIncome.addRow(['Poseidon', 86.72, '+59%', 54.228]);
    dataIncome.addRow(['Darmius', 47.277, '+83%', 25.706]);
    dataIncome.addRow(['VÃ©lo', 36.91, '+40%', 26.292]);
    dataIncome.addRow(['Assassin blanc', 37.175, '+35%', 27.34]);
    dataIncome.addRow(['Meteo', 70.692, '+62%', 43.476]);
    dataIncome.addRow(['UAV-alpha', 54.592, '+31%', 41.575]);
    dataIncome.addRow(['Thitub', 46.826, '+31%', 35.737]);
    dataIncome.addRow(['Shingacook', 30.578, '+68%', 18.173]);
    dataIncome.addRow(['Prince', 20.95, '+18%', 17.692]);
    dataIncome.addRow(['El Battory', 33.982, '+40%', 24.15]);
    dataIncome.addRow(['Sephirt', 36.711, '+30%', 28.217]);
    dataIncome.addRow(['Nalox', 49.165, '+6%', 46.312]);
    dataIncome.addRow(['Buffalo', 39.468, '+38%', 28.521]);
    dataIncome.addRow(['Emacab', 26.598, '+72%', 15.406]);
    dataIncome.addRow(['Ohroms', 80.557, '+48%', 54.067]);
    dataIncome.addRow(['Bnlover', 21.903, '+26%', 17.378]);
    dataIncome.addRow(['Robindesoibs', 44.284, '+55%', 28.46]);
    dataIncome.addRow(['Pietrobu', 44.703, '+1%', 43.828]);
    dataIncome.addRow(['Scoutix', 38.127, '+14%', 33.244]);
    dataIncome.addRow(['Skarn', 30.135, '+23%', 24.433]);
    dataIncome.addRow(['Sisao', 28.314, '+57%', 18.023]);
    dataIncome.addRow(['Azrock', 42.022, '+53%', 27.353]);
    dataIncome.addRow(['Zeleph', 38.931, '+61%', 24.178]);
    dataIncome.addRow(['Aikiko', 34.361, '+73%', 19.799]);
    dataIncome.addRow(['Labtec', 28.07, '+15%', 24.234]);
    dataIncome.addRow(['Ormace', 64.548, '+34%', 48.036]);
    dataIncome.addRow(['Ocelot', 33.765, '+59%', 21.146]);
    dataIncome.addRow(['Sasaynel', 24.235, '+11%', 21.802]);
    dataIncome.addRow(['Stellaria', 48.855, '+123%', 21.834]);
    dataIncome.addRow(['Tokipant', 40.476, '+36%', 29.565]);
    dataIncome.addRow(['Jayllos112', 23.35, '+0%', 23.544]);
    dataIncome.addRow(['Genesis', 23.643, '+20%', 19.608]);
    dataIncome.addRow(['Geronimo', 21.178, '+4%', 20.308]);
    dataIncome.addRow(['Morgenstar', 31.032, '+79%', 17.321]);
    dataIncome.addRow(['Elpha', 33.093, '+6%', 31.184]);

    dataIncome.sort({column: 1, desc: true});

    dataManpower.addColumn('string', 'Joueur');
    dataManpower.addColumn('number', 'Session 4');
    dataManpower.addColumn({type: 'string', role: 'annotation'});
    dataManpower.addColumn('number', 'Session 3');

    dataManpower.addRow(['Miox', 55754, '+32%', 41947]);
    dataManpower.addRow(['Sharqu', 86248, '+30%', 66062]);
    dataManpower.addRow(['Poseidon', 47340, '+20%', 39408]);
    dataManpower.addRow(['Darmius', 34211, '+33%', 25663]);
    dataManpower.addRow(['VÃ©lo', 22811, '+3%', 22137]);
    dataManpower.addRow(['Assassin blanc', 33529, '+32%', 25326]);
    dataManpower.addRow(['Meteo', 44370, '+15%', 38536]);
    dataManpower.addRow(['UAV-alpha', 74642, '+110%', 35518]);
    dataManpower.addRow(['Thitub', 38470, '-3%', 39714]);
    dataManpower.addRow(['Shingacook', 26299, '-17%', 31815]);
    dataManpower.addRow(['Prince', 29558, '+7%', 27564]);
    dataManpower.addRow(['El Battory', 37585, '+54%', 24309]);
    dataManpower.addRow(['Sephirt', 34643, '+41%', 24466]);
    dataManpower.addRow(['Nalox', 23746, '+7%', 22163]);
    dataManpower.addRow(['Buffalo', 26897, '+0%', 26650]);
    dataManpower.addRow(['Emacab', 23009, '+24%', 18441]);
    dataManpower.addRow(['Ohroms', 40965, '+19%', 34271]);
    dataManpower.addRow(['Bnlover', 22510, '+6%', 21159]);
    dataManpower.addRow(['Robindesoibs', 23486, '+19%', 19706]);
    dataManpower.addRow(['Pietrobu', 24042, '+12%', 21425]);
    dataManpower.addRow(['Scoutix', 29148, '+23%', 23626]);
    dataManpower.addRow(['Skarn', 28351, '-2%', 29035]);
    dataManpower.addRow(['Sisao', 25389, '+14%', 22127]);
    dataManpower.addRow(['Azrock', 35556, '+0%', 35891]);
    dataManpower.addRow(['Zeleph', 39586, '+74%', 22696]);
    dataManpower.addRow(['Aikiko', 30272, '+22%', 24612]);
    dataManpower.addRow(['Labtec', 26217, '+18%', 22081]);
    dataManpower.addRow(['Ormace', 63337, '+26%', 50121]);
    dataManpower.addRow(['Ocelot', 23340, '+1%', 22893]);
    dataManpower.addRow(['Sasaynel', 30111, '+14%', 26305]);
    dataManpower.addRow(['Stellaria', 24546, '+38%', 17782]);
    dataManpower.addRow(['Tokipant', 28582, '+22%', 23366]);
    dataManpower.addRow(['Jayllos112', 40591, '+87%', 21615]);
    dataManpower.addRow(['Genesis', 24895, '+22%', 20392]);
    dataManpower.addRow(['Geronimo', 33115, '+9%', 30202]);
    dataManpower.addRow(['Morgenstar', 30764, '+25%', 24591]);
    dataManpower.addRow(['Elpha', 23523, '+15%', 20363]);

    dataManpower.sort({column: 1, desc: true});

    dataForceLimit.addColumn('string', 'Joueur');
    dataForceLimit.addColumn('number', 'Session 4');
    dataForceLimit.addColumn({type: 'string', role: 'annotation'});
    dataForceLimit.addColumn('number', 'Session 3');

    dataForceLimit.addRow(['Miox', 74, '+45%', 51]);
    dataForceLimit.addRow(['Sharqu', 110, '+26%', 87]);
    dataForceLimit.addRow(['Poseidon', 84, '+71%', 49]);
    dataForceLimit.addRow(['Darmius', 40, '+29%', 31]);
    dataForceLimit.addRow(['VÃ©lo', 27, '+12%', 24]);
    dataForceLimit.addRow(['Assassin blanc', 36, '+12%', 32]);
    dataForceLimit.addRow(['Meteo', 60, '+71%', 35]);
    dataForceLimit.addRow(['UAV-alpha', 93, '+78%', 52]);
    dataForceLimit.addRow(['Thitub', 54, '+5%', 51]);
    dataForceLimit.addRow(['Shingacook', 34, '+6%', 32]);
    dataForceLimit.addRow(['Prince', 25, '+4%', 24]);
    dataForceLimit.addRow(['El Battory', 34, '+17%', 29]);
    dataForceLimit.addRow(['Sephirt', 44, '+10%', 40]);
    dataForceLimit.addRow(['Nalox', 43, '+26%', 34]);
    dataForceLimit.addRow(['Buffalo', 40, '+14%', 35]);
    dataForceLimit.addRow(['Emacab', 28, '+39%', 20]);
    dataForceLimit.addRow(['Ohroms', 72, '+43%', 50]);
    dataForceLimit.addRow(['Bnlover', 29, '+15%', 25]);
    dataForceLimit.addRow(['Robindesoibs', 31, '+19%', 26]);
    dataForceLimit.addRow(['Pietrobu', 40, '+11%', 36]);
    dataForceLimit.addRow(['Scoutix', 34, '+13%', 30]);
    dataForceLimit.addRow(['Skarn', 29, '-6%', 31]);
    dataForceLimit.addRow(['Sisao', 27, '+8%', 25]);
    dataForceLimit.addRow(['Azrock', 41, '-2%', 42]);
    dataForceLimit.addRow(['Zeleph', 52, '+36%', 38]);
    dataForceLimit.addRow(['Aikiko', 30, '+19%', 25]);
    dataForceLimit.addRow(['Labtec', 30, '+36%', 22]);
    dataForceLimit.addRow(['Ormace', 61, '+32%', 46]);
    dataForceLimit.addRow(['Ocelot', 32, '+23%', 26]);
    dataForceLimit.addRow(['Sasaynel', 33, '+13%', 29]);
    dataForceLimit.addRow(['Stellaria', 60, '+215%', 19]);
    dataForceLimit.addRow(['Tokipant', 37, '+32%', 28]);
    dataForceLimit.addRow(['Jayllos112', 26, '-16%', 31]);
    dataForceLimit.addRow(['Genesis', 27, '+12%', 24]);
    dataForceLimit.addRow(['Geronimo', 32, '+18%', 27]);
    dataForceLimit.addRow(['Morgenstar', 29, '+31%', 22]);
    dataForceLimit.addRow(['Elpha', 30, '+3%', 29]);

    dataForceLimit.sort({column: 1, desc: true});

    dataNbProvinces.addColumn('string', 'Joueur');
    dataNbProvinces.addColumn('number', 'Session 4');
    dataNbProvinces.addColumn({type: 'string', role: 'annotation'});
    dataNbProvinces.addColumn('number', 'Session 3');

    dataNbProvinces.addRow(['Miox', 36, '+12%', 32]);
    dataNbProvinces.addRow(['Sharqu', 51, '+8%', 47]);
    dataNbProvinces.addRow(['Poseidon', 48, '+65%', 29]);
    dataNbProvinces.addRow(['Darmius', 37, '+27%', 29]);
    dataNbProvinces.addRow(['VÃ©lo', 17, '+0%', 17]);
    dataNbProvinces.addRow(['Assassin blanc', 46, '+31%', 35]);
    dataNbProvinces.addRow(['Meteo', 34, '+54%', 22]);
    dataNbProvinces.addRow(['UAV-alpha', 56, '+21%', 46]);
    dataNbProvinces.addRow(['Thitub', 30, '+11%', 27]);
    dataNbProvinces.addRow(['Shingacook', 42, '+16%', 36]);
    dataNbProvinces.addRow(['Prince', 26, '+13%', 23]);
    dataNbProvinces.addRow(['El Battory', 37, '+5%', 35]);
    dataNbProvinces.addRow(['Sephirt', 22, '+10%', 20]);
    dataNbProvinces.addRow(['Nalox', 19, '+26%', 15]);
    dataNbProvinces.addRow(['Buffalo', 63, '-1%', 64]);
    dataNbProvinces.addRow(['Emacab', 18, '+5%', 17]);
    dataNbProvinces.addRow(['Ohroms', 72, '+14%', 63]);
    dataNbProvinces.addRow(['Bnlover', 37, '+48%', 25]);
    dataNbProvinces.addRow(['Robindesoibs', 18, '+0%', 18]);
    dataNbProvinces.addRow(['Pietrobu', 38, '+31%', 29]);
    dataNbProvinces.addRow(['Scoutix', 23, '+35%', 17]);
    dataNbProvinces.addRow(['Skarn', 16, '-23%', 21]);
    dataNbProvinces.addRow(['Sisao', 36, '+16%', 31]);
    dataNbProvinces.addRow(['Azrock', 55, '+7%', 51]);
    dataNbProvinces.addRow(['Zeleph', 49, '-5%', 52]);
    dataNbProvinces.addRow(['Aikiko', 35, '+9%', 32]);
    dataNbProvinces.addRow(['Labtec', 19, '+18%', 16]);
    dataNbProvinces.addRow(['Ormace', 38, '-2%', 39]);
    dataNbProvinces.addRow(['Ocelot', 19, '+11%', 17]);
    dataNbProvinces.addRow(['Sasaynel', 34, '+6%', 32]);
    dataNbProvinces.addRow(['Stellaria', 18, '+100%', 9]);
    dataNbProvinces.addRow(['Tokipant', 17, '+54%', 11]);
    dataNbProvinces.addRow(['Jayllos112', 16, '-11%', 18]);
    dataNbProvinces.addRow(['Genesis', 18, '+5%', 17]);
    dataNbProvinces.addRow(['Geronimo', 40, '+33%', 30]);
    dataNbProvinces.addRow(['Morgenstar', 14, '+39%', 10]);
    dataNbProvinces.addRow(['Elpha', 31, '+0%', 31]);

    dataNbProvinces.sort({column: 1, desc: true});

    dataLosses.addColumn('string', 'Joueur');
    dataLosses.addColumn('number', 'Session 4');
    dataLosses.addColumn({type: 'string', role: 'annotation'});
    dataLosses.addColumn('number', 'Session 3');

    dataLosses.addRow(['Miox', 187305, '+25%', 149303]);
    dataLosses.addRow(['Sharqu', 434932, '+73%', 250873]);
    dataLosses.addRow(['Poseidon', 221459, '+134%', 94578]);
    dataLosses.addRow(['Darmius', 201098, '+55%', 129260]);
    dataLosses.addRow(['VÃ©lo', 151017, '+12%', 134022]);
    dataLosses.addRow(['Assassin blanc', 150958, '+70%', 88400]);
    dataLosses.addRow(['Meteo', 372441, '+28%', 289020]);
    dataLosses.addRow(['UAV-alpha', 81550, '+26%', 64427]);
    dataLosses.addRow(['Thitub', 346651, '+129%', 151126]);
    dataLosses.addRow(['Shingacook', 188372, '+25%', 149536]);
    dataLosses.addRow(['Prince', 136288, '+44%', 94041]);
    dataLosses.addRow(['El Battory', 167210, '+79%', 93113]);
    dataLosses.addRow(['Sephirt', 151712, '+60%', 94351]);
    dataLosses.addRow(['Nalox', 172108, '+94%', 88690]);
    dataLosses.addRow(['Buffalo', 206700, '+19%', 172648]);
    dataLosses.addRow(['Emacab', 106900, '+19%', 89830]);
    dataLosses.addRow(['Ohroms', 245693, '+41%', 173238]);
    dataLosses.addRow(['Bnlover', 152757, '+53%', 99291]);
    dataLosses.addRow(['Robindesoibs', 100437, '+1%', 99158]);
    dataLosses.addRow(['Pietrobu', 151159, '+63%', 92506]);
    dataLosses.addRow(['Scoutix', 221294, '+89%', 116714]);
    dataLosses.addRow(['Skarn', 259588, '+13%', 227795]);
    dataLosses.addRow(['Sisao', 128586, '+130%', 55735]);
    dataLosses.addRow(['Azrock', 168352, '+83%', 91687]);
    dataLosses.addRow(['Zeleph', 208721, '+33%', 156829]);
    dataLosses.addRow(['Aikiko', 117101, '+17%', 99808]);
    dataLosses.addRow(['Labtec', 119076, '+65%', 71824]);
    dataLosses.addRow(['Ormace', 160581, '+81%', 88321]);
    dataLosses.addRow(['Ocelot', 146614, '+102%', 72316]);
    dataLosses.addRow(['Sasaynel', 144518, '+50%', 95742]);
    dataLosses.addRow(['Stellaria', 100134, '+69%', 59149]);
    dataLosses.addRow(['Tokipant', 199536, '+17%', 170394]);
    dataLosses.addRow(['Jayllos112', 145040, '+30%', 111026]);
    dataLosses.addRow(['Genesis', 211322, '+91%', 110357]);
    dataLosses.addRow(['Geronimo', 145815, '+40%', 103746]);
    dataLosses.addRow(['Morgenstar', 237640, '+10%', 215401]);
    dataLosses.addRow(['Elpha', 137326, '+54%', 88745]);

    dataLosses.sort({column: 1, desc: true});

    dataProfessionalism.addColumn('string', 'Joueur');
    dataProfessionalism.addColumn('number', 'Session 4');
    dataProfessionalism.addColumn({type: 'string', role: 'annotation'});
    dataProfessionalism.addColumn('number', 'Session 3');

    dataProfessionalism.addRow(['Miox', 12.286, '+447%', 2.246]);
    dataProfessionalism.addRow(['Sharqu', 23.157, '+71%', 13.504]);
    dataProfessionalism.addRow(['Poseidon', 24.991, '-2%', 25.589]);
    dataProfessionalism.addRow(['Darmius', 0.000, '-100%', 0.223]);
    dataProfessionalism.addRow(['VÃ©lo', 3.168, '+0%', 3.168]);
    dataProfessionalism.addRow(['Assassin blanc', 5.255, '+31%', 4.001]);
    dataProfessionalism.addRow(['Meteo', 29.739, '+46%', 20.355]);
    dataProfessionalism.addRow(['UAV-alpha', 23.505, '+42%', 16.504]);
    dataProfessionalism.addRow(['Thitub', 0.000, '+0%', 0.046]);
    dataProfessionalism.addRow(['Shingacook', 9.000, '+28%', 7.001]);
    dataProfessionalism.addRow(['Prince', 28.143, '+15%', 24.332]);
    dataProfessionalism.addRow(['El Battory', 4.358, '-21%', 5.554]);
    dataProfessionalism.addRow(['Sephirt', 2.698, '-3%', 2.805]);
    dataProfessionalism.addRow(['Nalox', 3.430, '-76%', 14.899]);
    dataProfessionalism.addRow(['Buffalo', 7.501, '+25%', 6.000]);
    dataProfessionalism.addRow(['Emacab', 37.729, '+45%', 26.007]);
    dataProfessionalism.addRow(['Ohroms', 15.265, '+189%', 5.264]);
    dataProfessionalism.addRow(['Bnlover', 2.081, '+318%', 0.497]);
    dataProfessionalism.addRow(['Robindesoibs', 26.089, '+100%', 12.994]);
    dataProfessionalism.addRow(['Pietrobu', 5.850, '-2%', 6.000]);
    dataProfessionalism.addRow(['Scoutix', 8.017, '-30%', 11.609]);
    dataProfessionalism.addRow(['Skarn', 5.353, '+0%', 0.000]);
    dataProfessionalism.addRow(['Sisao', 2.798, '-51%', 5.792]);
    dataProfessionalism.addRow(['Azrock', 8.670, '+52%', 5.670]);
    dataProfessionalism.addRow(['Zeleph', 12.982, '+85%', 6.982]);
    dataProfessionalism.addRow(['Aikiko', 2.908, '+84%', 1.578]);
    dataProfessionalism.addRow(['Labtec', 12.415, '-23%', 16.248]);
    dataProfessionalism.addRow(['Ormace', 15.479, '+21%', 12.756]);
    dataProfessionalism.addRow(['Ocelot', 0.003, '-99%', 21.838]);
    dataProfessionalism.addRow(['Sasaynel', 17.407, '+40%', 12.354]);
    dataProfessionalism.addRow(['Stellaria', 23.315, '+5%', 22.162]);
    dataProfessionalism.addRow(['Tokipant', 11.365, '+81%', 6.265]);
    dataProfessionalism.addRow(['Jayllos112', 23.080, '+63%', 14.148]);
    dataProfessionalism.addRow(['Genesis', 3.964, '+43%', 2.765]);
    dataProfessionalism.addRow(['Geronimo', 25.296, '+285%', 6.555]);
    dataProfessionalism.addRow(['Morgenstar', 0.064, '-95%', 1.370]);
    dataProfessionalism.addRow(['Elpha', 11.908, '-11%', 13.406]);

    dataProfessionalism.sort({column: 1, desc: true});

    dashboardGeneral.bind(stringFilterGeneral, chartGeneral);

    sessionTitleDiv.innerText = 'Session 4';
    mapRef.href = './images/sessions/session4.jpg';
    mapImg.src = './images/sessions/session4.jpg';
    dashboardGeneral.draw(dataGeneral);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};

let drawSession5 = function () {

    cleanTables();

    dataGeneral.addRow(['Miox (Orissa)', 624, 116.815, 68653, 106, 40, 371792, 0, 26.871]);
    dataGeneral.addRow(['Sharqu (France)', 905, 98.091, 86718, 137, 53, 618543, 0, 42.117]);
    dataGeneral.addRow(['Poseidon (Spain)', 693, 121.381, 54652, 107, 48, 308353, 0, 24.991]);
    dataGeneral.addRow(['Darmius (Candar)', 505, 86.778, 44891, 56, 43, 261813, 0, 0.998]);
    dataGeneral.addRow(['VÃ©lo (Vijayanagar)', 329, 43.279, 28480, 35, 24, 163977, 0, 7.434]);
    dataGeneral.addRow(['Assassin blanc (Jerusalem)', 440, 38.516, 35262, 43, 46, 241513, 932, 2.667]);
    dataGeneral.addRow(['Meteo (Austria)', 572, 94.586, 42420, 93, 34, 386668, 0, 41.458]);
    dataGeneral.addRow(['UAV-alpha (Russia)', 662, 72.565, 96307, 120, 70, 86608, 0, 25.677]);
    dataGeneral.addRow(['Thitub (Poland)', 407, 61.018, 34630, 59, 29, 492746, 430, 15.497]);
    dataGeneral.addRow(['Shingacook (Kazan)', 377, 39.566, 43732, 42, 52, 247505, 0, 10.001]);
    dataGeneral.addRow(['Prince (Mewar)', 210, 22.747, 30545, 26, 26, 160370, 0, 33.658]);
    dataGeneral.addRow(['El Battory (Persia)', 324, 35.9, 40008, 37, 38, 318806, 171, 1.071]);
    dataGeneral.addRow(['Sephirt (Nepal)', 354, 41.889, 34702, 50, 33, 188782, 0, 11.118]);
    dataGeneral.addRow(['Nalox (Netherlands)', 377, 73.91, 22558, 63, 25, 185331, 0, 20.975]);
    dataGeneral.addRow(['Buffalo (Ethiopia)', 425, 38.192, 32764, 49, 77, 236500, 0, 14.502]);
    dataGeneral.addRow(['Emacab (Switzerland)', 275, 34.204, 25524, 31, 19, 115590, 0, 55.234]);
    dataGeneral.addRow(['Ohroms (Great Britain)', 779, 119.128, 44932, 89, 80, 271341, 0, 22.763]);
    dataGeneral.addRow(['Bnlover (Tunis)', 312, 25.593, 25638, 35, 43, 184958, 0, 4.211]);
    dataGeneral.addRow(['Robindesoibs (Venice)', 322, 55.566, 25468, 35, 23, 180780, 0, 25.250]);
    dataGeneral.addRow(['Pietrobu (Portugal)', 447, 78.252, 20563, 57, 39, 196220, 0, 3.860]);
    dataGeneral.addRow(['Scoutix (Denmark)', 348, 46.987, 30460, 42, 23, 327579, 0, 20.026]);
    dataGeneral.addRow(['Sisao (Sweden)', 227, 30.068, 27352, 28, 36, 136502, 0, 7.312]);
    dataGeneral.addRow(['Azrock (Chagatai)', 436, 44.8, 44941, 46, 55, 295439, 0, 13.696]);
    dataGeneral.addRow(['Zeleph (Ruthenia)', 450, 49.212, 45283, 57, 49, 229904, 0, 14.984]);
    dataGeneral.addRow(['Aikiko (Shirvan)', 334, 27.055, 30809, 34, 33, 244692, 1770, 1.135]);
    dataGeneral.addRow(['Labtec (Madurai)', 236, 32.565, 31275, 38, 19, 139551, 0, 17.395]);
    dataGeneral.addRow(['Ormace (Hungary)', 556, 77.094, 63657, 66, 41, 288600, 0, 19.180]);
    dataGeneral.addRow(['Sasaynel (Mushasha)', 359, 31.615, 37650, 38, 39, 334260, 2507, 9.134]);
    dataGeneral.addRow(['Stellaria (Westphalia)', 430, 63.738, 33005, 74, 20, 178343, 0, 28.534]);
    dataGeneral.addRow(['Tokipant (Tuscany)', 340, 43.169, 28578, 39, 17, 293210, 0, 6.934]);
    dataGeneral.addRow(['Jayllos112 (Punjab)', 267, 28.196, 42303, 29, 21, 147101, 0, 41.098]);
    dataGeneral.addRow(['Genesis (Prussia)', 296, 34.328, 23730, 34, 22, 224560, 152, 2.679]);
    dataGeneral.addRow(['Geronimo (Yemen)', 281, 18.819, 31384, 31, 35, 225840, 0, 3.003]);
    dataGeneral.addRow(['Morgenstar (Naples)', 268, 40.451, 33068, 31, 14, 243953, 0, 8.231]);
    dataGeneral.addRow(['Elpha (Morocco)', 349, 37.213, 29063, 38, 42, 190525, 184, 10.382]);


    dataDev.addColumn('string', 'Joueur');
    dataDev.addColumn('number', 'Session 5');
    dataDev.addColumn({type: 'string', role: 'annotation'});
    dataDev.addColumn('number', 'Session 4');

    dataDev.addRow(['Miox', 624, '+28%', 485]);
    dataDev.addRow(['Sharqu', 905, '+7%', 839]);
    dataDev.addRow(['Poseidon', 693, '+10%', 627]);
    dataDev.addRow(['Darmius', 505, '+26%', 400]);
    dataDev.addRow(['VÃ©lo', 329, '+39%', 236]);
    dataDev.addRow(['Assassin blanc', 440, '+4%', 423]);
    dataDev.addRow(['Meteo', 572, '+14%', 498]);
    dataDev.addRow(['UAV-alpha', 662, '+24%', 530]);
    dataDev.addRow(['Thitub', 407, '+0%', 404]);
    dataDev.addRow(['Shingacook', 377, '+27%', 296]);
    dataDev.addRow(['Prince', 210, '+0%', 210]);
    dataDev.addRow(['El Battory', 324, '+10%', 293]);
    dataDev.addRow(['Sephirt', 354, '+22%', 290]);
    dataDev.addRow(['Nalox', 377, '+28%', 294]);
    dataDev.addRow(['Buffalo', 425, '+21%', 351]);
    dataDev.addRow(['Emacab', 275, '+7%', 257]);
    dataDev.addRow(['Ohroms', 779, '+26%', 614]);
    dataDev.addRow(['Bnlover', 312, '+15%', 271]);
    dataDev.addRow(['Robindesoibs', 322, '+20%', 268]);
    dataDev.addRow(['Pietrobu', 447, '+2%', 437]);
    dataDev.addRow(['Scoutix', 348, '+15%', 301]);
    dataDev.addRow(['Sisao', 227, '+0%', 226]);
    dataDev.addRow(['Azrock', 436, '+0%', 434]);
    dataDev.addRow(['Zeleph', 450, '+5%', 428]);
    dataDev.addRow(['Aikiko', 334, '-2%', 342]);
    dataDev.addRow(['Labtec', 236, '+0%', 236]);
    dataDev.addRow(['Ormace', 556, '+14%', 484]);
    dataDev.addRow(['Sasaynel', 359, '+17%', 306]);
    dataDev.addRow(['Stellaria', 430, '+20%', 358]);
    dataDev.addRow(['Tokipant', 340, '+3%', 328]);
    dataDev.addRow(['Jayllos112', 267, '+20%', 221]);
    dataDev.addRow(['Genesis', 296, '+25%', 235]);
    dataDev.addRow(['Geronimo', 281, '-6%', 299]);
    dataDev.addRow(['Morgenstar', 268, '+2%', 262]);
    dataDev.addRow(['Elpha', 349, '+19%', 291]);

    dataDev.sort({column: 1, desc: true});

    dataIncome.addColumn('string', 'Joueur');
    dataIncome.addColumn('number', 'Session 5');
    dataIncome.addColumn({type: 'string', role: 'annotation'});
    dataIncome.addColumn('number', 'Session 4');

    dataIncome.addRow(['Miox', 116.815, '+48%', 78.444]);
    dataIncome.addRow(['Sharqu', 98.091, '-7%', 106.128]);
    dataIncome.addRow(['Poseidon', 121.381, '+39%', 86.72]);
    dataIncome.addRow(['Darmius', 86.778, '+83%', 47.277]);
    dataIncome.addRow(['VÃ©lo', 43.279, '+17%', 36.91]);
    dataIncome.addRow(['Assassin blanc', 38.516, '+3%', 37.175]);
    dataIncome.addRow(['Meteo', 94.586, '+33%', 70.692]);
    dataIncome.addRow(['UAV-alpha', 72.565, '+32%', 54.592]);
    dataIncome.addRow(['Thitub', 61.018, '+30%', 46.826]);
    dataIncome.addRow(['Shingacook', 39.566, '+29%', 30.578]);
    dataIncome.addRow(['Prince', 22.747, '+8%', 20.95]);
    dataIncome.addRow(['El Battory', 35.9, '+5%', 33.982]);
    dataIncome.addRow(['Sephirt', 41.889, '+14%', 36.711]);
    dataIncome.addRow(['Nalox', 73.91, '+50%', 49.165]);
    dataIncome.addRow(['Buffalo', 38.192, '-3%', 39.468]);
    dataIncome.addRow(['Emacab', 34.204, '+28%', 26.598]);
    dataIncome.addRow(['Ohroms', 119.128, '+47%', 80.557]);
    dataIncome.addRow(['Bnlover', 25.593, '+16%', 21.903]);
    dataIncome.addRow(['Robindesoibs', 55.566, '+25%', 44.284]);
    dataIncome.addRow(['Pietrobu', 78.252, '+75%', 44.703]);
    dataIncome.addRow(['Scoutix', 46.987, '+23%', 38.127]);
    dataIncome.addRow(['Sisao', 30.068, '+6%', 28.314]);
    dataIncome.addRow(['Azrock', 44.8, '+6%', 42.022]);
    dataIncome.addRow(['Zeleph', 49.212, '+26%', 38.931]);
    dataIncome.addRow(['Aikiko', 27.055, '-21%', 34.361]);
    dataIncome.addRow(['Labtec', 32.565, '+16%', 28.07]);
    dataIncome.addRow(['Ormace', 77.094, '+19%', 64.548]);
    dataIncome.addRow(['Sasaynel', 31.615, '+30%', 24.235]);
    dataIncome.addRow(['Stellaria', 63.738, '+30%', 48.855]);
    dataIncome.addRow(['Tokipant', 43.169, '+6%', 40.476]);
    dataIncome.addRow(['Jayllos112', 28.196, '+20%', 23.35]);
    dataIncome.addRow(['Genesis', 34.328, '+45%', 23.643]);
    dataIncome.addRow(['Geronimo', 18.819, '-11%', 21.178]);
    dataIncome.addRow(['Morgenstar', 40.451, '+30%', 31.032]);
    dataIncome.addRow(['Elpha', 37.213, '+12%', 33.093]);

    dataIncome.sort({column: 1, desc: true});

    dataManpower.addColumn('string', 'Joueur');
    dataManpower.addColumn('number', 'Session 5');
    dataManpower.addColumn({type: 'string', role: 'annotation'});
    dataManpower.addColumn('number', 'Session 4');

    dataManpower.addRow(['Miox', 68653, '+23%', 55754]);
    dataManpower.addRow(['Sharqu', 86718, '+0%', 86248]);
    dataManpower.addRow(['Poseidon', 54652, '+15%', 47340]);
    dataManpower.addRow(['Darmius', 44891, '+31%', 34211]);
    dataManpower.addRow(['VÃ©lo', 28480, '+24%', 22811]);
    dataManpower.addRow(['Assassin blanc', 35262, '+5%', 33529]);
    dataManpower.addRow(['Meteo', 42420, '-4%', 44370]);
    dataManpower.addRow(['UAV-alpha', 96307, '+29%', 74642]);
    dataManpower.addRow(['Thitub', 34630, '-9%', 38470]);
    dataManpower.addRow(['Shingacook', 43732, '+66%', 26299]);
    dataManpower.addRow(['Prince', 30545, '+3%', 29558]);
    dataManpower.addRow(['El Battory', 40008, '+6%', 37585]);
    dataManpower.addRow(['Sephirt', 34702, '+0%', 34643]);
    dataManpower.addRow(['Nalox', 22558, '-5%', 23746]);
    dataManpower.addRow(['Buffalo', 32764, '+21%', 26897]);
    dataManpower.addRow(['Emacab', 25524, '+10%', 23009]);
    dataManpower.addRow(['Ohroms', 44932, '+9%', 40965]);
    dataManpower.addRow(['Bnlover', 25638, '+13%', 22510]);
    dataManpower.addRow(['Robindesoibs', 25468, '+8%', 23486]);
    dataManpower.addRow(['Pietrobu', 20563, '-14%', 24042]);
    dataManpower.addRow(['Scoutix', 30460, '+4%', 29148]);
    dataManpower.addRow(['Sisao', 27352, '+7%', 25389]);
    dataManpower.addRow(['Azrock', 44941, '+26%', 35556]);
    dataManpower.addRow(['Zeleph', 45283, '+14%', 39586]);
    dataManpower.addRow(['Aikiko', 30809, '+1%', 30272]);
    dataManpower.addRow(['Labtec', 31275, '+19%', 26217]);
    dataManpower.addRow(['Ormace', 63657, '+0%', 63337]);
    dataManpower.addRow(['Sasaynel', 37650, '+25%', 30111]);
    dataManpower.addRow(['Stellaria', 33005, '+34%', 24546]);
    dataManpower.addRow(['Tokipant', 28578, '+0%', 28582]);
    dataManpower.addRow(['Jayllos112', 42303, '+4%', 40591]);
    dataManpower.addRow(['Genesis', 23730, '-4%', 24895]);
    dataManpower.addRow(['Geronimo', 31384, '-5%', 33115]);
    dataManpower.addRow(['Morgenstar', 33068, '+7%', 30764]);
    dataManpower.addRow(['Elpha', 29063, '+23%', 23523]);

    dataManpower.sort({column: 1, desc: true});

    dataForceLimit.addColumn('string', 'Joueur');
    dataForceLimit.addColumn('number', 'Session 5');
    dataForceLimit.addColumn({type: 'string', role: 'annotation'});
    dataForceLimit.addColumn('number', 'Session 4');

    dataForceLimit.addRow(['Miox', 106, '+43%', 74]);
    dataForceLimit.addRow(['Sharqu', 137, '+24%', 110]);
    dataForceLimit.addRow(['Poseidon', 107, '+27%', 84]);
    dataForceLimit.addRow(['Darmius', 56, '+39%', 40]);
    dataForceLimit.addRow(['VÃ©lo', 35, '+29%', 27]);
    dataForceLimit.addRow(['Assassin blanc', 43, '+19%', 36]);
    dataForceLimit.addRow(['Meteo', 93, '+55%', 60]);
    dataForceLimit.addRow(['UAV-alpha', 120, '+29%', 93]);
    dataForceLimit.addRow(['Thitub', 59, '+9%', 54]);
    dataForceLimit.addRow(['Shingacook', 42, '+23%', 34]);
    dataForceLimit.addRow(['Prince', 26, '+4%', 25]);
    dataForceLimit.addRow(['El Battory', 37, '+8%', 34]);
    dataForceLimit.addRow(['Sephirt', 50, '+13%', 44]);
    dataForceLimit.addRow(['Nalox', 63, '+46%', 43]);
    dataForceLimit.addRow(['Buffalo', 49, '+22%', 40]);
    dataForceLimit.addRow(['Emacab', 31, '+10%', 28]);
    dataForceLimit.addRow(['Ohroms', 89, '+23%', 72]);
    dataForceLimit.addRow(['Bnlover', 35, '+20%', 29]);
    dataForceLimit.addRow(['Robindesoibs', 35, '+12%', 31]);
    dataForceLimit.addRow(['Pietrobu', 57, '+42%', 40]);
    dataForceLimit.addRow(['Scoutix', 42, '+23%', 34]);
    dataForceLimit.addRow(['Sisao', 28, '+3%', 27]);
    dataForceLimit.addRow(['Azrock', 46, '+12%', 41]);
    dataForceLimit.addRow(['Zeleph', 57, '+9%', 52]);
    dataForceLimit.addRow(['Aikiko', 34, '+13%', 30]);
    dataForceLimit.addRow(['Labtec', 38, '+26%', 30]);
    dataForceLimit.addRow(['Ormace', 66, '+8%', 61]);
    dataForceLimit.addRow(['Sasaynel', 38, '+15%', 33]);
    dataForceLimit.addRow(['Stellaria', 74, '+23%', 60]);
    dataForceLimit.addRow(['Tokipant', 39, '+5%', 37]);
    dataForceLimit.addRow(['Jayllos112', 29, '+11%', 26]);
    dataForceLimit.addRow(['Genesis', 34, '+25%', 27]);
    dataForceLimit.addRow(['Geronimo', 31, '-3%', 32]);
    dataForceLimit.addRow(['Morgenstar', 31, '+6%', 29]);
    dataForceLimit.addRow(['Elpha', 38, '+26%', 30]);

    dataForceLimit.sort({column: 1, desc: true});

    dataNbProvinces.addColumn('string', 'Joueur');
    dataNbProvinces.addColumn('number', 'Session 5');
    dataNbProvinces.addColumn({type: 'string', role: 'annotation'});
    dataNbProvinces.addColumn('number', 'Session 4');

    dataNbProvinces.addRow(['Miox', 40, '+11%', 36]);
    dataNbProvinces.addRow(['Sharqu', 53, '+3%', 51]);
    dataNbProvinces.addRow(['Poseidon', 48, '+0%', 48]);
    dataNbProvinces.addRow(['Darmius', 43, '+16%', 37]);
    dataNbProvinces.addRow(['VÃ©lo', 24, '+41%', 17]);
    dataNbProvinces.addRow(['Assassin blanc', 46, '+0%', 46]);
    dataNbProvinces.addRow(['Meteo', 34, '+0%', 34]);
    dataNbProvinces.addRow(['UAV-alpha', 70, '+25%', 56]);
    dataNbProvinces.addRow(['Thitub', 29, '-3%', 30]);
    dataNbProvinces.addRow(['Shingacook', 52, '+23%', 42]);
    dataNbProvinces.addRow(['Prince', 26, '+0%', 26]);
    dataNbProvinces.addRow(['El Battory', 38, '+2%', 37]);
    dataNbProvinces.addRow(['Sephirt', 33, '+50%', 22]);
    dataNbProvinces.addRow(['Nalox', 25, '+31%', 19]);
    dataNbProvinces.addRow(['Buffalo', 77, '+22%', 63]);
    dataNbProvinces.addRow(['Emacab', 19, '+5%', 18]);
    dataNbProvinces.addRow(['Ohroms', 80, '+11%', 72]);
    dataNbProvinces.addRow(['Bnlover', 43, '+16%', 37]);
    dataNbProvinces.addRow(['Robindesoibs', 23, '+27%', 18]);
    dataNbProvinces.addRow(['Pietrobu', 39, '+2%', 38]);
    dataNbProvinces.addRow(['Scoutix', 23, '+0%', 23]);
    dataNbProvinces.addRow(['Sisao', 36, '+0%', 36]);
    dataNbProvinces.addRow(['Azrock', 55, '+0%', 55]);
    dataNbProvinces.addRow(['Zeleph', 49, '+0%', 49]);
    dataNbProvinces.addRow(['Aikiko', 33, '-5%', 35]);
    dataNbProvinces.addRow(['Labtec', 19, '+0%', 19]);
    dataNbProvinces.addRow(['Ormace', 41, '+7%', 38]);
    dataNbProvinces.addRow(['Sasaynel', 39, '+14%', 34]);
    dataNbProvinces.addRow(['Stellaria', 20, '+11%', 18]);
    dataNbProvinces.addRow(['Tokipant', 17, '+0%', 17]);
    dataNbProvinces.addRow(['Jayllos112', 21, '+31%', 16]);
    dataNbProvinces.addRow(['Genesis', 22, '+22%', 18]);
    dataNbProvinces.addRow(['Geronimo', 35, '-12%', 40]);
    dataNbProvinces.addRow(['Morgenstar', 14, '+0%', 14]);
    dataNbProvinces.addRow(['Elpha', 42, '+35%', 31]);

    dataNbProvinces.sort({column: 1, desc: true});

    dataLosses.addColumn('string', 'Joueur');
    dataLosses.addColumn('number', 'Session 5');
    dataLosses.addColumn({type: 'string', role: 'annotation'});
    dataLosses.addColumn('number', 'Session 4');

    dataLosses.addRow(['Miox', 371792, '+98%', 187305]);
    dataLosses.addRow(['Sharqu', 618543, '+42%', 434932]);
    dataLosses.addRow(['Poseidon', 308353, '+39%', 221459]);
    dataLosses.addRow(['Darmius', 261813, '+30%', 201098]);
    dataLosses.addRow(['VÃ©lo', 163977, '+8%', 151017]);
    dataLosses.addRow(['Assassin blanc', 241513, '+59%', 150958]);
    dataLosses.addRow(['Meteo', 386668, '+3%', 372441]);
    dataLosses.addRow(['UAV-alpha', 86608, '+6%', 81550]);
    dataLosses.addRow(['Thitub', 492746, '+42%', 346651]);
    dataLosses.addRow(['Shingacook', 247505, '+31%', 188372]);
    dataLosses.addRow(['Prince', 160370, '+17%', 136288]);
    dataLosses.addRow(['El Battory', 318806, '+90%', 167210]);
    dataLosses.addRow(['Sephirt', 188782, '+24%', 151712]);
    dataLosses.addRow(['Nalox', 185331, '+7%', 172108]);
    dataLosses.addRow(['Buffalo', 236500, '+14%', 206700]);
    dataLosses.addRow(['Emacab', 115590, '+8%', 106900]);
    dataLosses.addRow(['Ohroms', 271341, '+10%', 245693]);
    dataLosses.addRow(['Bnlover', 184958, '+21%', 152757]);
    dataLosses.addRow(['Robindesoibs', 180780, '+79%', 100437]);
    dataLosses.addRow(['Pietrobu', 196220, '+29%', 151159]);
    dataLosses.addRow(['Scoutix', 327579, '+48%', 221294]);
    dataLosses.addRow(['Sisao', 136502, '+6%', 128586]);
    dataLosses.addRow(['Azrock', 295439, '+75%', 168352]);
    dataLosses.addRow(['Zeleph', 229904, '+10%', 208721]);
    dataLosses.addRow(['Aikiko', 244692, '+108%', 117101]);
    dataLosses.addRow(['Labtec', 139551, '+17%', 119076]);
    dataLosses.addRow(['Ormace', 288600, '+79%', 160581]);
    dataLosses.addRow(['Sasaynel', 334260, '+131%', 144518]);
    dataLosses.addRow(['Stellaria', 178343, '+78%', 100134]);
    dataLosses.addRow(['Tokipant', 293210, '+46%', 199536]);
    dataLosses.addRow(['Jayllos112', 147101, '+1%', 145040]);
    dataLosses.addRow(['Genesis', 224560, '+6%', 211322]);
    dataLosses.addRow(['Geronimo', 225840, '+54%', 145815]);
    dataLosses.addRow(['Morgenstar', 243953, '+2%', 237640]);
    dataLosses.addRow(['Elpha', 190525, '+38%', 137326]);

    dataLosses.sort({column: 1, desc: true});

    dataProfessionalism.addColumn('string', 'Joueur');
    dataProfessionalism.addColumn('number', 'Session 5');
    dataProfessionalism.addColumn({type: 'string', role: 'annotation'});
    dataProfessionalism.addColumn('number', 'Session 4');

    dataProfessionalism.addRow(['Miox', 26.871, '+118%', 12.286]);
    dataProfessionalism.addRow(['Sharqu', 42.117, '+81%', 23.157]);
    dataProfessionalism.addRow(['Poseidon', 24.991, '+0%', 24.991]);
    dataProfessionalism.addRow(['Darmius', 0.998, '+0%', 0.000]);
    dataProfessionalism.addRow(['VÃ©lo', 7.434, '+134%', 3.168]);
    dataProfessionalism.addRow(['Assassin blanc', 2.667, '-49%', 5.255]);
    dataProfessionalism.addRow(['Meteo', 41.458, '+39%', 29.739]);
    dataProfessionalism.addRow(['UAV-alpha', 25.677, '+9%', 23.505]);
    dataProfessionalism.addRow(['Thitub', 15.497, '+0%', 0.000]);
    dataProfessionalism.addRow(['Shingacook', 10.001, '+11%', 9.000]);
    dataProfessionalism.addRow(['Prince', 33.658, '+19%', 28.143]);
    dataProfessionalism.addRow(['El Battory', 1.071, '-75%', 4.358]);
    dataProfessionalism.addRow(['Sephirt', 11.118, '+312%', 2.698]);
    dataProfessionalism.addRow(['Nalox', 20.975, '+511%', 3.430]);
    dataProfessionalism.addRow(['Buffalo', 14.502, '+93%', 7.501]);
    dataProfessionalism.addRow(['Emacab', 55.234, '+46%', 37.729]);
    dataProfessionalism.addRow(['Ohroms', 22.763, '+49%', 15.265]);
    dataProfessionalism.addRow(['Bnlover', 4.211, '+102%', 2.081]);
    dataProfessionalism.addRow(['Robindesoibs', 25.250, '-3%', 26.089]);
    dataProfessionalism.addRow(['Pietrobu', 3.860, '-34%', 5.850]);
    dataProfessionalism.addRow(['Scoutix', 20.026, '+149%', 8.017]);
    dataProfessionalism.addRow(['Sisao', 7.312, '+161%', 2.798]);
    dataProfessionalism.addRow(['Azrock', 13.696, '+57%', 8.670]);
    dataProfessionalism.addRow(['Zeleph', 14.984, '+15%', 12.982]);
    dataProfessionalism.addRow(['Aikiko', 1.135, '-60%', 2.908]);
    dataProfessionalism.addRow(['Labtec', 17.395, '+40%', 12.415]);
    dataProfessionalism.addRow(['Ormace', 19.180, '+23%', 15.479]);
    dataProfessionalism.addRow(['Sasaynel', 9.134, '-47%', 17.407]);
    dataProfessionalism.addRow(['Stellaria', 28.534, '+22%', 23.315]);
    dataProfessionalism.addRow(['Tokipant', 6.934, '-38%', 11.365]);
    dataProfessionalism.addRow(['Jayllos112', 41.098, '+78%', 23.080]);
    dataProfessionalism.addRow(['Genesis', 2.679, '-32%', 3.964]);
    dataProfessionalism.addRow(['Geronimo', 3.003, '-88%', 25.296]);
    dataProfessionalism.addRow(['Morgenstar', 8.231, '+0%', 0.064]);
    dataProfessionalism.addRow(['Elpha', 10.382, '-12%', 11.908]);

    dataProfessionalism.sort({column: 1, desc: true});

    dashboardGeneral.bind(stringFilterGeneral, chartGeneral);

    sessionTitleDiv.innerText = 'Session 5';
    mapRef.href = './images/sessions/session5.jpg';
    mapImg.src = './images/sessions/session5.jpg';
    dashboardGeneral.draw(dataGeneral);
    chartDev.draw(dataDev, options);
    chartIncome.draw(dataIncome, options);
    chartManpower.draw(dataManpower, options);
    chartForceLimit.draw(dataForceLimit, options);
    chartNbProvinces.draw(dataNbProvinces, options);
    chartLosses.draw(dataLosses, options);
    chartProfessionalism.draw(dataProfessionalism, options);
};

