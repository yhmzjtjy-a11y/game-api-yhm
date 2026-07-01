import { readFile } from "fs/promises";

export default async function handler(req, res) {
  try {
    const data = await readFile("./game.json", "utf-8");
    const games = JSON.parse(data);

    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to load games" });
  }
}
