const cohortName = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * Fetches all players from the API.
 * @param {function}  to modify data with fetched players
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