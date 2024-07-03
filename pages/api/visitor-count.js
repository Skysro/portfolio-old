import mongoose from "mongoose";
import Visitors from "@/db/VisitorModel";
import axios from "axios";
require("@/db/connect");

export default async function handler(req, res) {
  const userAgent = req.headers["user-agent"];
  const { pageVisited, source } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed."
    });
  }

  if (!userAgent || !pageVisited) {
    return res.status(400).json({
      success: false,
      message: "Oops! It looks like the page URL you visited is missing."
    });
  }

  try {
    // Fetch user's public IP address
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    const ipAddress = ipResponse.data.ip;

    // Fetch IP details using ipinfo.io
    const ipDetailsResponse = await axios.get(`https://ipinfo.io/${ipAddress}/json?token=${process.env.IP_INFO_TOKEN}`);
    let ipDetails = ipDetailsResponse.data;

    // Stringify IP details after trimming any unexpected whitespace
    ipDetails = JSON.stringify(ipDetails).trim();

    // Create a new visitor document
    const newVisitor = new Visitors({
      ipAddress: ipAddress,
      ipDetails: ipDetails,
      userAgent: userAgent,
      pageVisited: pageVisited,
      source: source || "unknown"
    });

    // Save the visitor to MongoDB
    await newVisitor.save();

    console.log("Visitor saved:", newVisitor);

    res.status(201).json({
      success: true,
      message: "Visitor counted",
      visitor: newVisitor
    });
  } catch (error) {
    console.log(`Error occured while saving visitor source. Cause: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}