const cohortName = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * Fetches all players from the API.
 * @param {function} updatePlayers to modify data with fetched players
 */
export const fetchAllPlayers = async (updatePlayers) => {
  try {
    const response = await fetch(API_URL + "/players");
    const json = await response.json();

    if (json.success) updatePlayers(json.data.players);
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

/**
 * Posts a player to the API.
 * @param {object} playerObj player to post
 * @param {function} updatePlayers to pass to fetchAllPlayers
 */
export const postPlayer = async (playerObj, updatePlayers) => {
  try {
    const response = await fetch(API_URL + "/players", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playerObj),
      }
    );
    const json = await response.json();
    fetchAllPlayers(updatePlayers);
  }
  catch (err) {
    console.error("Uh oh, trouble posting player!", err);
  }
}

/**
 * Deletes a player from the API.
 * @param {number or string} playerID id of the player to be deleted
 * @param {function} updatePlayers to pass to fetchAllPlayers
 */
export const deletePlayer = async (playerID, updatePlayers) => {
  try {
    const response = await fetch(API_URL + '/players/' + playerID,
      { method: 'DELETE', }
    );
    const result = await response.json();
    fetchAllPlayers(updatePlayers);
  } catch (err) {
    console.error("Uh oh, trouble deleting player!", err);
  }
}

/**
 * Fetches teams of players from the API.
 * @param {function} setTeams to modify data with fetched teams
 */
export const fetchTeams = async (setTeams) => {
  try {
    const response = await fetch(API_URL + "/teams");
    const json = await response.json();

    if (json.success) setTeams(json.data.teams);
  } catch (err) {
    console.error("Uh oh, trouble fetching teams!", err);
  }
};

/**
 * Converts team name into associated id
 * @param {string} teamName to convert
 * @param {object[]} teams acquired through previous api call (fetchTeams)
 * @returns 
 */
export const getTeamID = (teamName, teams) => {
  return teams?.find(t => t.name === teamName)?.id;
}

/**
 * Converts readable/displayed object data to api object data
 * @param {string} key 
 * @param {any} value 
 * @param {object} savedData relevant to conversion, acquired through previous api calls (eg. {players: fetchAllPlayers, teams: fetchTeams})
 * @returns 
 */
export const convertObjData = (key, value, savedData) => {
  let result = {key, value};
  if (key === "team") {
    result.key = "teamId";
    result.value = getTeamID(value, savedData?.teams);
  }
  return result;
}