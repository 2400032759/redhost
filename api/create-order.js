import Razorpay from "razorpay";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: 1 * 100, // ₹1 for testing
            currency: "INR",
            receipt: "mvp_launchpad_receipt_" + Date.now(),
        };

        const order = await razorpay.orders.create(options);

        return res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Razorpay error", error);
        return res.status(500).json({
            success: false,
            message: "Could not create order",
        });
    }
}
