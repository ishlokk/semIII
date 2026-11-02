const express = require("express");
const app = express();

app.use(express.json());

let student = {
    id: 1,
    name:"Rohan",
    rollno: 20,
    email: "abc@gmail.com",
    course: "BCA"
};

//GET(display)
app.get("/student", (req,res) => {
    res.send(student);
});

//POST(insert)
app.post("/student", (req,res) => {
    
})

//update

app.put("/student", (req,res) => {
    student = {...student, ...req.body};
    res.send("Student data updated successfully");
});


//delete
app.delete("/student", (req,res) => {
    student = {};
    res.send("Student data deleted successfully");
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});