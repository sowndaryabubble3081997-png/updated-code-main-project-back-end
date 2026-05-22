const express = require("express");
const mongoose = require("mongoose");

//import model
const Account = require("../Models/User.Model");

const UserAccounts = require("../Models/User.Model");

// import hash
const { genHashData } = require("../Utils/genHash");
// import token
const {genAccessToken}=require("../Utils/token")



const createAccount = async (req, res) => {
  try {
    // 1. Collect data
    const { name, email, password, cpassword, role } = req.body;

    // 2. Generate hash password
    const hashData = await genHashData(password);

    if (hashData.isError) {
      return res.status(500).json({
        message: "Failed to secure password",
      });
    }

    // 3. Store data in database
    const newAccount = await UserAccounts.create({
      name,
      email,
      password: hashData.data,
      cpassword: hashData.data,
      role,
    });

    console.log("Data storing:", newAccount);

    // 4. Send response
    res.status(201).json({
      message: "Account created successfully",
      newAccount,
    });

  } catch (error) {
    console.log("Create Account Error:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//login user 


const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    //check user exits
    const isUserFound = await Account.findOne({ email }); // {}
    if (!isUserFound) {
      return res.json({
        error: true,
        message: `Invalid credentials....,Please Register`,
      });
    }

    // Gen : token
    const { isError, token, message } = genAccessToken({
      email: isUserFound.email,
      role: isUserFound.role,
    });
    if (isError) {
      throw new Error("failed to generate token");
    }

    res.status(200).json({ isError, token, message: "User Login success" });
  } catch (error) {
    res.json(`failed to find user!`);
  }
};



// 3. Get profile - user
const getUserProfile = async (req, res) => {
  const email = req?.payload.email || "";

  try {
    // find user
    const profile = await Account.findOne({ email });
    if (!profile) {
      throw new Error("No user found. Please login first!");
    }
    // success
    res
      .status(200)
      .json({ message: "User Profile fetched!", error: false, data: profile });
  } catch (error) {
    if (error) {
      res.status(401).json({ error: true, message: error.message });
    }
  }
};

// get all profiles
const getAllProfiles = async (req, res) => {
  const getprofile = await UserAccounts.find(req.body);
  console.log("data found", getprofile);
  res.status(200).json({ message: "data found", getprofile: req.body });
};

// Update Password

const updatePasswordById = async (req, res) => {
  const PasswordUpdate = await UserAccounts.updateOne(
    { _id: "69f2c6acf93b5ab6d1d61858" },
    { $set: { name: "Preethi", isActive: true } },
  );
  console.log("data found", PasswordUpdate);
  res.json({ message: " PASSWORD UPDATED", PasswordUpdate: req.body });
};

module.exports = { createAccount, getAllProfiles, updatePasswordById,LoginUser ,getUserProfile};
