export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.rawg.io/api/games?key=1cf19380f4324d4198a3b44dd797dfc1&page_size=20"
    );

    const data = await response.json();

    const games = data.results.map(g => ({
      id: g.id,
      name: g.name,
      rating: g.rating,
      released: g.released,
      image: g.background_image,
      genres: g.genres?.map(x => x.name)
    }));

    res.status(200).json({
      games
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch RAWG data"
    });
  }
}
