//  export const getNoOfMatchesPlayed = (obj) => {
//      let mtch = {};
//      for (let i of obj) {
//          mtch[i.season] ? mtch[i.season]++ : mtch[i.season] = 1;

//      }
//      console.log(mtch);
//  };

const csv = require("csvtojson");
csv()
    .fromFile("matches.csv")
    .then(obj => {
        csv()
            .fromFile("deliveries.csv")
            .then(dObj => {
                //  getNoOfMatchesPlayed(obj);
                // getNoOfMatchesWonPerTeamPerYear(obj);
                getExtraRunsPerTeamForYear(obj, dObj);
            });
    });


// const getNoOfMatchesWonPerTeamPerYear = (obj) => {
//     let mtch = {};
//     for (let i of obj) {
//         if (mtch[i.winner]) {
//             mtch[i.winner][i.season] ? mtch[i.winner][i.season]++ : mtch[i.winner][i.season] = 1;
//         } else {
//             mtch[i.winner] = {};
//         }
//     }
//     console.log(mtch);
// };
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
            param1[j.bowling_team] ? param1[j.bowling_team][j.extra_runs] = parseInt(param1[j.bowling_team][j.extra_runs]) + parseInt(j.extra_runs) : param1[j.bowling_team][j.extra_runs] = parseInt(j.extra_runs);
        }
    }
    console.log(param1);
};
// export const getEconomicalBowlersForYear = () => {};