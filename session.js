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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEMyalpQN2YzVFZ6ODF2b2luSUZzNWR6b1NYcHY3WEJvb3RyZzZjQzhGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkZ0cXFhMVRyVE0rQlQrSDIybkN3SkdKMk5oTjA1RXdNU0I5d1BCSzN4bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTmxrMENDOFJMUTRZSEJVNnhhTENaNXUrbVNqaXB5QzZGcjBPR0FxeEVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWDVyWHc0QWxzMnoyTExyb081aFU5KzdSWExlK0JUV0lLTHh3R0pmK0NZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGYjhxb2R4SEJYS0FtNTdiSkpiNGl1RndBU0VrUVFTSkp1TkhvK0M0VXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QaURSNm1GUVZLYWZvd3d5WHlsamhuaHVISWI1UUdWSGZReXhXMWNjRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09makFuTEhkT3B6YlVaU014eDNqaDcrOUhONUt0SEthd0QyMWo5YkwyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzhEWjFod1RQd2NudE5lRk56US9GZjRSL3lJU3NuVUhHRXNsZCtUZkMyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDQk5ObkNXNFAxei9DejRBNTRxZGRsczlNL2ZEMjdMNzRSQWlEZ0lnMXB2VXpWT1lpcHNFNFNlM0hIaXJaWDlyV2RSd0J2N3c1RXJ1bVdrREoxQkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiIzL2UyK21jSVlRUmExUmVadXpEaEJpYUEwV0dzNTd4MTNFTWYwTU5BTjMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNTc5MDgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDM0U2MjIxNTk5Qjc0MEJBOTFFNURDNUZFQ0JDOURGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEyMDk3MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNTc5MDgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJENzIxNDExRjMxMTJBRjIzNTgwMzc5NDFFQjE0RTlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEyMDk3MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNTc5MDgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMwNzhFRDQ3OTNERDlERDZFNDY5NzhGNzk5QjdDMTVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEyMDk3MjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdtMGtVRFdtUVZDUmRiTHk3Sy1vVFEiLCJwaG9uZUlkIjoiYjdhZWY5ZTEtMzhkYS00Njg1LTg0NWMtOTY2YzExMTJiZDQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii92VXpOVUNacDdvUys4dkoyZHhWNmlQR0JjYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVHVuN3hXVnZIZHdJQWtmTS9RTDFLV1N2K009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVZQRDVUQlAiLCJtZSI6eyJpZCI6Ijk0NzAzNTc5MDgwOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDc1MDY3MDExNjg2NDk6MUBsaWQiLCJuYW1lIjoiSGFuc2lp4p2k77iP4oCN8J+pufCfkqYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IZzdxTUVFTzJ0aGNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRQbkp4TTRSRG1LTkNLejVGbXBINEpGU2tBZ2dHcnFEcitUa21lelhNVnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5PM0tFajZTOXJSU1hEL1pudDVuMCtZT0RzdVZhVnhSREg2aHByWEJNMXU2aEJ1SElIOG9MMS9Oc2s5WHFsN1BrdXZLM0xEN1doWmFIcnljTWltakNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkS1FHNktRNUpnbWN2SStkV2h6b0JlWVptbEFhelZ1M2g0NVVVVTRyR3BsbVVWRU9zVGtuNkZXUUFmTVJ1K0Jneng3cjVqRnVsUXBMdmJ4MmxqcjdDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAzNTc5MDgwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlQ1eWNUT0VRNWlqUWlzK1JacVIrQ1JVcEFJSUJxNmc2L2s1Sm5zMXpGYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMjA5NzIxLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURhNCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94703579080",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
