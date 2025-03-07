const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
    try {
        await mongoose
            .connect(process.env.MONGODB_URL)
            .then(() => {
                console.log("Database Connected Successfully");
            })
            .catch((error) => {
                console.error("Database Connection Failed:", error);
                process.exit(1);
            });

        mongoose.connection.on("error", (err) => {
            console.error("Mongoose Connection Error:", err);
        });
    } catch (error) {
        console.error("An Error Occurred During Database Connection Setup:", error);
        process.exit(1);
    }
};