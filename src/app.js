const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const statis_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(statis_path))

app.set('view engine', 'hbs');
app.set('views', templatePath)
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/wheather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg : "Opps! Page Not Found"
    });
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})