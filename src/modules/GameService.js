export const loadMonsters = async () => {
  try {
    const url = "https://www.dnd5eapi.co/api/monsters?challenge_rating=5";
    const response = await fetch(url);
    const json = await response.json();

    return json.results;
  } catch (error) {
    console.log("error", error);
  }
};
