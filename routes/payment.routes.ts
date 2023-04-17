import { Express } from "express";

const stripe = require("stripe")(
  "sk_test_51MXchGCLZZaEdOAQhPVG5JGpygkXanZFW8FcALo8FV9pX6OtwhcSzv7cGAbyQlNmVIloy84bIHLpzBatMvIwu4EU00QMvX01t9"
);

export const paymentRoutes = (app: Express) => {
  //user
  app.post("/create-payment-intent", async (req, res) => {
    const { price } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1500,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

  //admin
  //   app.get("/get-all-feedbacks", FeedbackController.getAllFeedbacks);
};
