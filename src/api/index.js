const BlizzAPI = require("blizzapi");

class APIService {
  constructor() {
    this.blizzApi = new BlizzAPI({
      region: "us",
      clientId: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
      clientSecret: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET,
    });
    this.arenaBrackets = ["2v2", "3v3"];
  }

  async getImages(realmSlug, characterName) {
    return await this.blizzApi.query(
      `/profile/wow/character/${realmSlug}/${characterName}/character-media?namespace=profile-us`
    );
  }

  async getArenaBracket(realmSlug, characterName, pvpBracket) {
    try {
      const result = await this.blizzApi.query(
        `/profile/wow/character/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}?namespace=profile-us`
      );
      return { [pvpBracket]: result };
    } catch (error) {
      // Catching errors here since this API call returns a 404 anytime a character doesn't have arena data.
      // This will prevent Promise.all from erroring out when it really shouldn't
      return { [pvpBracket]: null };
    }
  }

  async getProfile(realmSlug, characterName, rname) {
    const result = await this.blizzApi.query(
      `/profile/wow/character/${realmSlug}/${characterName}?namespace=profile-us`
    );
    result.rname = rname;
    return result;
  }
}

export const api = new APIService();
