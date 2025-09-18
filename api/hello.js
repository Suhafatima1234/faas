// Simulated ML prediction: preload data
const predictedHot = true;
let bigData = [];

if (predictedHot) {
    // Preload large data to simulate cold start time
    bigData = Array.from({length: 1e7}, (_, i) => i);
}

export default function handler(req, res) {
    const start = Date.now();

    // Simulate some work using preloaded data
    const sum = bigData.reduce((a, b) => a + b, 0);

    const duration = Date.now() - start;
    res.status(200).json({
        message: "Hello from Vercel!",
        predictedHot: predictedHot,
        initTime: duration + " ms"
    });
}
