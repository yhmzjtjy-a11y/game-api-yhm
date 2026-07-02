export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Cyberpunk 2077", rating: 4.2 },
    { id: 2, name: "Elden Ring", rating: 4.8 },
    { id: 3, name: "Red Dead Redemption 2", rating: 4.9 }
  ]);
}
