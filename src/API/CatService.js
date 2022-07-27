import axios from "axios";

export default class CatService {
  static async getRandom() {
    const response = await axios.get(
      " https://api.thecatapi.com/v1/images/search?api_key=67a24a31-42b3-4286-b272-655cd08a041b"
    );
    return response;
  }
}
