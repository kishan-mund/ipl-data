export const getNoOfMatchesPlayed = matches => {
  return matches.reduce((noOfMatchesPlayed, match) => {
    noOfMatchesPlayed[match.season] = noOfMatchesPlayed[match.season] || 0;
    noOfMatchesPlayed[match.season] += 1;
    return noOfMatchesPlayed;
  }, {});
};
export const getNoOfMatchesWonPerTeamPerYear = () => {};
export const getExtraRunsPerTeamForYear = () => {};
export const getEconomicalBowlersForYear = () => {};
