const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918157082630";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://ik.imagekit.io/eypz/1727518309305_P6nPdGPiI.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "918157082630";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_22_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3VZZ283bWlQOGQvQW5TMHlhMW5kRUFIbDMvMUdWQjhxUmhXQnQzUlNodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemlHNmxmRUxSS0dEWWNDd0JaQjFfQVwiLFxuICBcInBob25lSWRcIjogXCI2NjMwZGE0OS1iYmI5LTQ1OGItOGI0Mi02MWIyZjk2NDZkMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjM1LFxuICAgICAgMTM4LFxuICAgICAgMTk3LFxuICAgICAgMjIxLFxuICAgICAgMjUsXG4gICAgICAxNjUsXG4gICAgICA2NSxcbiAgICAgIDc5LFxuICAgICAgMTk3LFxuICAgICAgMSxcbiAgICAgIDE5OSxcbiAgICAgIDM5LFxuICAgICAgMTU3LFxuICAgICAgNTAsXG4gICAgICAxNjcsXG4gICAgICAxODQsXG4gICAgICAxNSxcbiAgICAgIDE5NyxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMjQsXG4gICAgICAzMCxcbiAgICAgIDY4LFxuICAgICAgNTYsXG4gICAgICAyOSxcbiAgICAgIDk4LFxuICAgICAgNzQsXG4gICAgICAyMTcsXG4gICAgICAxOTIsXG4gICAgICAyNCxcbiAgICAgIDEyMSxcbiAgICAgIDExNCxcbiAgICAgIDEzMyxcbiAgICAgIDc1LFxuICAgICAgMTM3LFxuICAgICAgMjcsXG4gICAgICAxODUsXG4gICAgICA4LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRMRjg0WE5QXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNTcwODI2MzA6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTQ4MjIzNTA4NDk2MjozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYUx1RllRN00zZnR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9DNW9NQ2FsWUZneEdZQWtDUHhaM2NGaGNrMWZoWTk2bVJ6SDNGTFl2WDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG04bXlJNFBGZnR3US9wbHFMODZUcHIvVmpVWU40bFA1ZkdEL0FtQzg4SWd3cFVuTEYrNkJITXdhcnlKVGxLSXZVenhuQTFKM0RYeFc4R3FZSEx0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUDNFb3NtN1NydnB6SkFmdThoSmswcm9JTGJoQnZSQWtnOWpxNzdTVk85b3N2QThNV3c2ZE1CcHdEY3ZybTBDNHpIdld5Y1NUdUk5djlDYVhpZTVwaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MTU3MDgyNjMwOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc1MjI1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPSHBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9IcC5qc29uIjogIntcImtleURhdGFcIjpcImNISktvemZ4eGVTMytXUEw2WEV4b1pQQURtRVlpTTZZRHNNcWVNVU5HSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxMjc0MDM2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3NTIwNTIzMjYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "阿姆阿楚",
  ownername:process.env.OWNER_NAME|| "阿姆阿楚",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
