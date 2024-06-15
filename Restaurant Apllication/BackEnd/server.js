import app from "./App.js";

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`)
});