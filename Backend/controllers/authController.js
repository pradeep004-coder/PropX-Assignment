import userModel from "../models/user.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("User does not exists!!!");
            return res.status(404).json({ message: 'user does not exists, signup instesd', success: false });
        }
        if (user.password !== password) {
            console.log("Incorrect password!!!");
            return res.status(401).json({ message: 'Incorrect password', success: false });
        }
        return res.status(200).json({ name: user.name, message: "Login successful", success: true })
    } catch (error) {
        console.error("Login error:", error.message);
        return res.status(500).json({ message: 'internal server error', success: false });
    }
}

const singup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (user) {
            console.log("User already exists!!!");
            return res.status(409).json({ message: 'user already exists, login instesd', success: false });
        }
        const newUser = new userModel({ name, email, password });
        await newUser.save();
        return res.status(201).json({ message: "Signup successful", success: true });
    } catch (error) {
        console.error("Signup error:", error.message);
        return res.status(500).json({ message: 'internal server error', success: false });
    }
}

export { login, singup };