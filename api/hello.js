export default function handler(req, res) {
  const start = Date.now();

  // Simulate some work / preloaded data (your solution)
  let bigData = Array.from({length: 1e6}, (_, i) => i); 

  const duration = Date.now() - start;
  res.status(200).json({message: "Hello from Vercel!", initTime: duration + " ms"});
}
