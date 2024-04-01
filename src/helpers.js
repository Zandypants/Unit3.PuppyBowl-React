const cohortName = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * Fetches all players from the API.
 * @param {function} setPlayers to modify data with fetched players
 */
export const fetchAllPlayers = async (setPlayers) => {
  try {
    const response = await fetch(API_URL + "/players");
    const json = await response.json();

    if (json.success) setPlayers(json.data.players);
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};