// //First 
// // ---------



const getNoOfMatchesPlayed = (obj) => {
    let mtch = {};
    for (let i of obj) {
        mtch[i.season] ? mtch[i.season]++ : mtch[i.season] = 1;

    }
    // console.log(mtch);
    return mtch;
};

// // main
// // ---------------



const csv = require("csvtojson");
csv()
    .fromFile("matches.csv")
    .then(obj => {
        csv()
            .fromFile("deliveries.csv")
            .then(dObj => {
                var fs = require('fs');
                // getNoOfMatchesPlayed(obj);
                // getNoOfMatchesWonPerTeamPerYear(obj);
                // getExtraRunsPerTeamForYear(obj, dObj);
                // getEconomicalBowlersForYear(obj, dObj);
                let master = {
                    "Number of matches played per year for all the years in IPL": getNoOfMatchesPlayed(obj),
                    "Number of matches won of per team per year in IPL": getNoOfMatchesWonPerTeamPerYear(obj),
                    "Extra runs conceded per team in 2016": getExtraRunsPerTeamForYear(obj, dObj),
                    "Top 10 economical bowlers in 2015": getEconomicalBowlersForYear(obj, dObj)
                }

                // fs.writeFileSync('data.json', JSON.stringify(master), function (err) {
                //     if (err) throw err;
                // })
            });
    });

// // Second
// // --------------





const getNoOfMatchesWonPerTeamPerYear = (obj) => {
    let mtch = {};
    for (let i of obj) {
        if (mtch[i.winner]) {
            mtch[i.winner][i.season] ? mtch[i.winner][i.season]++ : mtch[i.winner][i.season] = 1;
        } else {
            mtch[i.winner] = {};
        }
    }
    // console.log(mtch);
    return mtch;
};


// // Third 
// // ---------------





const getExtraRunsPerTeamForYear = (obj, param) => {
    let param1 = {};
    let arr = [];
    for (let i of obj) {
        if (i.season === "2016") {
            arr.push(i.id);
        }
    }
    for (let j of param) {
        if (arr.includes(j.match_id)) {
            param1[j.bowling_team] ? param1[j.bowling_team] = parseInt(param1[j.bowling_team]) + parseInt(j.extra_runs) : param1[j.bowling_team] = parseInt(j.extra_runs);
        }
    }
    // console.log(param1);
    return param1;
};

// Last
// -----------

const getEconomicalBowlersForYear = (obj, param) => {
    let eco = {};
    let over = {};
    let besteco = [];
    let arr1 = [];
    let final = [];
    let top10 = {};

    for (let i of obj) {
        if (i.season === "2015") {
            arr1.push(i.id);
        }
    }
    for (let i of param) {
        if (i.wide_runs == 0 && i.noball_runs == 0 && arr1.includes(i.match_id)) {
            over[i.bowler] ? over[i.bowler]++ : over[i.bowler] = 1;
        }

    }
    for (let j of param) {
        if (j.legbye_runs == 0 && j.bye_runs == 0 && arr1.includes(j.match_id)) {
            eco[j.bowler] ? eco[j.bowler] = parseInt(eco[j.bowler]) + parseInt(j.total_runs) : eco[j.bowler] = parseInt(j.total_runs);
        }
    }
    for (i = 0; i < Object.keys(eco).length; i++) {
        besteco[i] = [Object.keys(eco)[i], (Object.values(eco)[i] * 6) / Object.values(over)[i]];

    }

    final = (besteco.sort(function (a, b) {
        return a[1] - b[1]

    }));
    for (let i = 0; i < 10; i++)
        top10[final[i][0]] = final[i][1];
    return top10;
};