//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BIQzFSTUF4VlpEUUlXbzBqQ0JBMzBrWmRCcldWdE9TTGxYVDYzOHdrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2pWQnlmWWcyeDdjMElYbEMxQTlTZ3BVNWxTMUw0NG1IVDMwQ0l5elhCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR3V0c3NlSGFxUjQ5cmJQUEl6L1hMMGFaOG8xVWZzUHczQTc0U0t6MVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBMzl5QmhLZlhPMDU4WVZxRE5CNWpJTmx0RUlZZEs5WVNSVUdjRzJzVFNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLQ0ljUTlOZTlkMDhEMnpUV3FaQjRTZThNVHFnL0NidTdKSm95NVpVSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6V0pMM1JmYkFPdExxWTZnV1N4UE91SUJCU0ZSNjR4MGd3VlNJbGZiVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdUa3M3RUIvTEozUUtaSVdIMU1DNmdnNmJvenJacHRXVnlFMUQ0cGNudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFdGZVJrTHlySldxTi9lNGl1eENaU0FtR1o1VkVWSzd4MFIvQVkrK2hDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJwUmJuMU04NTN2NFo1MzhabFJkcUZnbVIyd1J3QnUwZHVqRHB2akxPOStIQjFrK2ZDTFNmNFpzNStLMnA5T2ptTjFweHNVVHRRaWZWNUxFb3hodGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJzUGhYV1NXNk95SU5uMEx3bCsyeGNmR1A2UGNLVEdVS3NySnNBTndCN2FzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBam1WU2hRUFJFcXpWUEt1VXl4dXp3IiwicGhvbmVJZCI6IjBkNjc5OThlLWQ0ZmQtNDZjZC05ZThkLWEyNGI3MGE4Njg2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMDhvWE1YUVExR01kcFM1Smd0d09FMWRaZ0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM09HOENwZkhUY2hsOGxuTHdFbmxFSy9oNFpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpHWk5WNTdXIiwibWUiOnsiaWQiOiI5NDcyOTUyNjg1MDoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJga2VzaGFyYSBwcmFiYXRoIiwibGlkIjoiMTIzMjMxNzA0OTc3NTExOjI3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTJzbW93Q0VJbkMyOElHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZnNTVTBwR1pCemNXZkN2Uld6TldyaU5mUFNxd1E0L28rVEhFY25ucHBEOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYXFJOGlDWVpaODEvYkJlZFh1NU9ySllEajF4dzNLTWdVUjFtNFVTUWhRVENSaUthaExKVVdCbUN5TjIvb21WSzZGOC9WZlQvRWpkNkQrdnpsa1poQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRGZlBqYmhNL3kzNlJDdUZGNzc5ZG9UcmwvUVMxZS93VENST25xTzUwazhMV3FGZlVwQ1doN2pIczMwT2pKT05tTi9JRVB4SmU1NGs2V0dVZTk0OGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Mjk1MjY4NTA6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDdFbE5LUm1RYzNGbndyMFZzelZxNGpYejBxc0VPUDZQa3h4SEo1NmFRLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUN3PT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTI0MTgyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3drIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
