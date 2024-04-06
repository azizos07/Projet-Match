// import app file
const app = require("./backend/app");

// Express Server is Listening on PORT 3000 (http://localhost:3000)
app.listen(3000, () => {
    console.log("Server is listening on PORT 3000 ...");
});