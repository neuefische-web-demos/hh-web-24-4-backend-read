//import { jokes } from "../../../lib/data.js";
import Joke from "../../../db/models/Joke";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const joke = await Joke.findById(id);
    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(joke);
  }
  //const joke = jokes.find((joke) => joke.id === id);
}
