{}import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import { prepareWAMessageMedia } from '@whiskeysockets/baileys'

global.botNumber = "" 
global.owner = ["201144523120", "201144523120", "201144523120", "201144523120", "201144523120", "201144523120"]
global.suittag = ["201144523120"] 
global.prems = []


global.vs = "^1.8.2 • Latest"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.kanekiAIJadibts = true

global.botname = "𖹭  ׄ  ְ 🍜 VILOUX ✩"
global.namebot = "VILOUX"
global.dev = "ᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ VILOUX STORE ©"
global.author = "VILOUX.ɾʋ"
global.etiqueta = "VILOUX ❄️ ⊹꙰ "
global.currency = "g᥆𝗍іᥴᥲs"
global.banner = "https://i.postimg.cc/02K2dVHR/IMG-6440.jpg](https://i.postimg.cc/02K2dVHR/IMG-6440.jpg"
global.icono = "https://i.postimg.cc/02K2dVHR/IMG-6440.jpg](https://i.postimg.cc/02K2dVHR/IMG-6440.jpg"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*


global.links = {
  group: "https://chat.whatsapp.com/GTobDpfUgMtFQwiBysz8op?mode=gi_t",
  community: "https://chat.whatsapp.com/GTobDpfUgMtFQwiBysz8op?mode=gi_t",
  channel: "https://whatsapp.com/channel/0029VbDl3FE2P59haP55rh0p",
  : "
  gmail: "vilouxbb@gmail.com",
  api: "https://nexus-light.onrender.com/",
}

global.ch = {
  ch1: "120363421367237421@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gojo = prepareWAMessageMedia
global.APIs = {
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
stellar: { url: "https://api.stellarwa.xyz", key: "this-xyz"},
light: { url: "https://nexus-light.onrender.com", key: "miku_sakura" } // poble att: el creador 
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings'"))
import(`${file}?update=${Date.now()}`)
})
