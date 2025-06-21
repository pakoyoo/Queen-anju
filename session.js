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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNpa3VyWGlPUWN5a0JZbHRoeTNOdGZxT0hoNnhZWGJJdVU0K2pVTllIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFDMGtXU3JqdFFJVkRRRmRDR2x0V0ZPZDZjdXJUcnhqZmIraitrZHpsVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSW92YWJmV2M4UTRKRXBIUzdSYmF1SnNNb3NSQU5hYm52anlEV1Ryc0hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVDUyRDN1dHdFWk5TRXp0ak9DQjFldjZ1bXVrM1NNVzdqVnE3cDlqMkJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLclN2NE9CU0hydSs1R2ZldnJtQUJ0YXZ5OVQvbWt4YW43Z3lnRURmVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ6SU5FNkpKdG5LRDRCeW1sVlJjc0hodWJHL0o0TWlKc1BvYXo3UVNoUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1ua052bjN2REVScWNydmE5aHlWWFlGdnZaNTVMMExDMW1HVXhoNWkwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTUzNHltVFJBdTB3a0pOdFBGZ2pPMXFaRU5JdVNFSXE2RGNaNGY5OWxRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNhUWkveXNweC9aVWs3bU1IdDBTN2c5WG9qTnNDazl6WmZHbVhMTi83SXNsNWRxajI3M3JPbEdxalZFSUFpUllWeFNoSWtNM3IxVmtQd0RlZ0RkVGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IjNaLzhONy93REpDK01TaU51a2Ira0orNjBab3lGeHIvdE1MMDJWakNlNnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5mQzlYRC02U05DbElpV2RncHFqMHciLCJwaG9uZUlkIjoiMzRiM2YyMTctYzRhOC00MmRkLTk5N2ItZTk3OTMzY2FlMWJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFsRlRwaDBsZ3BNQlgxQzBxY3dtdGswcXlIZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWlhkQkMwLzI0cUNmdTlob2lpQ1BIQi9BdEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0NZNFk1SkoiLCJtZSI6eyJpZCI6Ijk0NzI5NTI2ODUwOjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImBrZXNoYXJhIHByYWJhdGgiLCJsaWQiOiIxMjMyMzE3MDQ5Nzc1MTE6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMnNtb3dDRUplVzJzSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmc1NVMHBHWkJ6Y1dmQ3ZSV3pOV3JpTmZQU3F3UTQvbytUSEVjbm5wcEQ4PSIsImFjY291bnRTaWduYXR1cmUiOiJjbFhOYkpYZmlQYkNJQW1oQkY0RmluK2lwbTNPckVMc0w2V0U1R3JyMEtXbTVqb1RqL3BUZEl4aHJXaDhVNjZNSDNuUnZmQ25zQmhWdTlDNzIvWDdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWpKbWN0dktuRFZyRGsrbyt4d2ltZVFBa1pVR21jUHlsSnRlQVM2RWR3K3ltWW5oeHhQSUcxQitCbk41Um5TdFZGYXp1QkNTWHN1cmtTYjBQWVlYaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTUyNjg1MDoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYN0VsTktSbVFjM0Zud3IwVnN6VnE0alh6MHFzRU9QNlBreHhISjU2YVEvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JQ3c9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MDIxODAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHd2sifQ==",
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
