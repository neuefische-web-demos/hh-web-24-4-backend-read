//import { jokes } from "../../../lib/data.js";
import Joke from "../../../db/models/Joke";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }
}
