const predictedHot = true;
let bigData = [];

if (predictedHot) {
    // Preload large data to simulate cold start
    bigData = Array.from({length: 1e7}, (_, i) => i);
}

// Add simulated warm start
const simulatedWarmTime = 15; // ms

export default function handler(req, res) {
    const start = Date.now();

    // Simulate work
    const sum = bigData.reduce((a, b) => a + b, 0);

    const duration = Date.now() - start;

    res.status(200).json({
        message: "Hello from Vercel!",
        predictedHot: predictedHot,
        coldStartTime: duration + " ms",
        warmStartTime: simulatedWarmTime + " ms"
    });
}
