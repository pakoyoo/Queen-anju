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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpYSzRUUkdBUkI1MVFHUTUyZmlYeW9tL0NDZ0l6UndzaHpoN3I1WVhHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam5XMjBUdU9kT3U5cTJCdEt4SmtldjV6T0paTUxuQ2pucmFQdktKYUhXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQVl5bFk5Uk1jUXVpa2VTSmJXcFlDeDdCUm9wZEdHcTVXamswSnBTaEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdStJRDVGaCtMTjJMVFM5ZGhJQTV1eUt4c2g0WVc4SHZMTkFTNkV3WHl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFdkUwUUZwUit6MDhtZHlMK0swTjFrUkgydGFLOUdOdWViWHgrbWVuR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJqd0FBbEMyK0pibjhVOGVvNmloSExPMVNyR25NeEkwQUJhWWNtaEpUQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEU0cWZUWUZlclAvL2RZcTRFcTJPVkVXYUU1WHRDNERqeWowb0V1dUduST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01OdXNJMzZ5NmZDczBPSkpzYWRiQVFBc2p5VG56MEY4bmxRUmM2NEIxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQzQ2pKdXR3TVdGd212Rm5XeExnck1aWGg4QVAreCtOYkpMNkRhUHZhaitDLzdES2tBbGMvVWNmZ2FFK3ZQYUF5M3NkT1pDZFdZQ01mZHo4RGFSWkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IlQ5L2l2TkhiRE44QXp0SlJvblErRzJxTFM5c2xWeVFldnNZa1RDS3c5UWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImI3eC10N204UzA2U0czU3FvM2FtT1EiLCJwaG9uZUlkIjoiMjQxYjQ4N2UtOWNiMC00YjA4LWFjZTEtYzQ4Y2VjODgzMWU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdaakZGQTNQeGZPWi9oS0I3c2NjdWorbDYxQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Y1RJc0RTamVIbkhucjlmZnZpM0I3ZUdZUjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFQzQUw2VlMiLCJtZSI6eyJpZCI6Ijk0NzI5NTI2ODUwOjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImBrZXNoYXJhIHByYWJhdGgiLCJsaWQiOiIxMjMyMzE3MDQ5Nzc1MTE6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMnNtb3dDRUlpRTI4SUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmc1NVMHBHWkJ6Y1dmQ3ZSV3pOV3JpTmZQU3F3UTQvbytUSEVjbm5wcEQ4PSIsImFjY291bnRTaWduYXR1cmUiOiJ5Y2lkMnFhNVhkWm5qRi84cXJDbFBtbzNIbmlHTGhqYjVkSGRiSjJQeXRYUTF0RnZubzA2NGU5Z1VWZElCUVlDMzlGZ2JQK2o4REhoaUF5OHNWVGFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZGNqRStFd1dJazIvZVlMOXN1VnFGc05KNTF1SWpPSkRlVHJiZDhwWUZqNGd1Tys1YktpNHdUdDhOb2tVMnBEQmFpRVZyd0RrUVBpYmhwQkVGSE1KRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTUyNjg1MDoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYN0VsTktSbVFjM0Zud3IwVnN6VnE0alh6MHFzRU9QNlBreHhISjU2YVEvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MTYyNDUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHd2sifQ==",
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
