const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const StudentModel = require('./models/Users'); // Adjust import statement based on actual model location
const AdminModel = require('./models/admin');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Skillquest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});
app.get("/AdminDash",(req,res) =>{
    StudentModel.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json({ error: err.message }));
});
// Endpoint to create a user
app.post("/RegisterUser", (req, res) => {
    StudentModel.create(req.body)
        .then(student => res.json(student))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Endpoint to create an admin (assuming AdminModel exists)
app.post("/SignupAdmin", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if admin already exists
        let admin = await AdminModel.findOne({ email });

        if (admin) {
            return res.status(400).json({ error: "Admin already exists" });
        }

        // Create new admin
        admin = new AdminModel({
            username,
            email,
            password // Note: Password should be hashed before saving
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);

        // Save admin to database
        await admin.save();

        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.post("/LoginAdmin", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if admin exists
        let admin = await AdminModel.findOne({ email });

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Other endpoints for CRUD operations on users can be implemented similarly

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
