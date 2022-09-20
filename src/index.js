require("dotenv").config();
const express = require("express");
const { errorParser, notFound } = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/cars",carRoutes);
app.use(errorParser);
app.use(notFound);



app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
