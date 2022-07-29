import axios from "axios";

export default class CatService {
  static async getRandom() {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CATS_APP_API_KEY}`
    );
    return response;
  }
}
