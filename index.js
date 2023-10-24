import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  const foundtasks = tasks.filter((task) => task.date === getDate(0));
  res.render("index.ejs", { tasks: foundtasks });
});

app.get("/work", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs", { tasks: tasks });
});

app.post("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  tasks.push({ desc: req.body.newItem , date : getDate(0) });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const tasks = [
  { desc: "iş 1", date: getDate(-1) },
  { desc: "iş 2", date: getDate(-2) },
];



function getDate(i) {
    let date_ob = new Date();
    date_ob.setDate(date_ob.getDate() + Number(i)); // Yesterday!
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    return year + "-" + month + "-" + date;
  }