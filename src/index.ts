import express from "express";
import mongoose from 'mongoose';
import jwwt from "jsonwebtoken";
import { UserModel } from "./db";

const app = express();
app.use(express.json());

app.post("api/v1/signin", async (req, res) => {
    //zod validation
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username: username,
        password: password 
    })

    res.json({
        message: "User signed in successfully"
    })
})

app.post("api/v1/content", (req, res) => {

})

app.get("api/v1/content", (req, res) => {

})

app.delete("api/v1/content", (req, res) => {

})

app.post("api/v1/braib/:shareLink", (req,res) => {

})