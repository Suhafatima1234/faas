// Simulated ML prediction: preload data
const predictedHot = true;    // pretend ML predicted this function will be called
let bigData = [];

if (predictedHot) {
    // Preload data to reduce cold start
    bigData = Array.from({length: 1e6}, (_, i) => i);
}

export default function handler(req, res) {
    const start = Date.now();

    // Simulate function work using preloaded data
    const result = bigData.length;  

    const duration = Date.now() - start;
    res.status(200).json({
        message: "Hello from Vercel!",
        predictedHot: predictedHot,
        initTime: duration + " ms"
    });
}
