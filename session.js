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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5yWklHRVh5dlU3YnMrT1ZFcU9tdE4wbUJad1FMZ0RaeTNCU3dMTU8zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXhFSUZMcDZwaFE1eFlmN3NDN0dobGdzTHhWOGwyWWN1ZGxIeDJhdjdEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UEltOFdmQWk4VEkxb1Y0RE1WSXB1TEU0a1p1aFRNdTc3M0FzMGxLYjFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCeDBTaHdmYWdvbjJoVXVGdGlnS0pQYkh5UFRVSEllOWtzaytpT29RaXpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIMk5aTHFwOTFTZWJSaHJSRDhIeTJiaG1HSXhHajl4WkhWUkhqb0NnVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVwb1lyNncrenh2WTVIZzR1ZCtrVjdZU3E2Vm12Y2Q1WXhzekx4c2hobWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUltMjkrWnZodnZxZ2FMa1lSaE96UkpNNjJySVFsK3Z2QVhQRlRiSUUzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRndFMGV0NTArOTZOV0lqaDdlNUt5TEw0SlIwZHRnTmM5TS9vWjJWajRudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJZZThJVU5vbXlIY1BKN1hzRzRzdFU4VVVhZ2tycUM3bm9jV3dJbi9XVUVqRStndEJQdXVXYzluYmdEdlAvNTRObU1kQWE2Z0lkTzBJV3E4ejc5TEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IlNFT0wxUC9zNkpxdjhIUERQeVpwK1dDQXVYREIwaHRWdGpmeFJkMWJ0Zjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9NTFliU2t6UnRpdDFiZDZiZUlEM3ciLCJwaG9uZUlkIjoiOGI5ZGRkODYtYzgxOS00NzM0LTk0NzktY2I1YzA3ZGE1MWQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0Ry9MbENOLzRJSmNkeS9pRVhWQlZrM1lPRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGNDekpKTmc5dUZFUUZyd2VhVFF5K3ZPTE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjU4SDJGRTUiLCJtZSI6eyJpZCI6Ijk0NzI5NTI2ODUwOjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImBrZXNoYXJhIHByYWJhdGgiLCJsaWQiOiIxMjMyMzE3MDQ5Nzc1MTE6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdXNtb3dDRUp2WjJNSUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmc1NVMHBHWkJ6Y1dmQ3ZSV3pOV3JpTmZQU3F3UTQvbytUSEVjbm5wcEQ4PSIsImFjY291bnRTaWduYXR1cmUiOiJnUUd0aVlVcm1YNGx6VmY4OHRmbTZGaElqclQwOEpJN0dUNXFxb3p0UnVNcys0ZzJqSlYrN3JBbXQreW9kZFlxV3dZN3JFOFFhdHlsbDFydjVDMGdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieHFwOHB3NEUvYXV2NzNDSUE0d1Y4dld1SUNwOFpEK3RVTzBTQ2VJb2pOTU5QSlRWZS9Ra282ZTd5SmhqaENGd2xsNkREMHAwUVBkSFVMbHFYeEMyQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTUyNjg1MDoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYN0VsTktSbVFjM0Zud3IwVnN6VnE0alh6MHFzRU9QNlBreHhISjU2YVEvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA0Nzc5OTIsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHd2sifQ==",
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
