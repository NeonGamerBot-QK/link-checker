// Writing my own version of fetch lol
const fetch = require('./fetch')
// Write your package code here.

let loaded = false;
const cams = []
const gambling =[]
const pirated = []
const ipg= [];
const scam = []
const nsfw  = []
const dating = []
async function reload() {
  const GetLinks = (d) => JSON.parse(Buffer.concat(d).toString()).links
  let cam_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/cams.json").then(GetLinks)
  let gambling_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/gambling.json").then(GetLinks)
  let pirated_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/pirate.json").then(GetLinks)
  let scam_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/scams.json").then(GetLinks)
  let nsfw_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/nsfw.json").then(GetLinks)
  let dating_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/dating.json").then(GetLinks)
  let ipg_loaded = await fetch("https://raw.githubusercontent.com/elbkr/bad-websites/main/separated/ipgrabbers.json").then(GetLinks)
// Load them into there arrays
return Promise.all([
formatLinks(cam_loaded, cams),
formatLinks(gambling_loaded, gambling),
formatLinks(pirated_loaded, pirated),
formatLinks(ipg_loaded, ipg),
formatLinks(scam_loaded, scam),
formatLinks(dating_loaded, dating),
formatLinks(nsfw_loaded, nsfw)
]).then(() => {
loaded = true;
})
}
function formatLinks(to, from) {
 return new Promise((res, _) => {
  to.forEach((d, i) => {
    from.push(d)
    if(i+1 == from.length) res()
  })
 })
}
reload().then(() => {
  if(loaded !== true) console.warn("[LINK-CHECKER]: loaded incorectly, to fix Call method Module#reload, to fix links")
})
function waitTilLoad() {
  return Promise.reject("Module has not been loaded to load run Module#reload!")
}
async function is_cam(text){
if(!loaded) await waitTilLoad()
   let val = "false";
   for (var i=0; i < cams.length; i++) {
        if (text.includes(cams[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_dating(text){
  if(!loaded) await waitTilLoad()
   let val = "false";
   for (var i=0; i < dating.length; i++) {
        if (text.includes(dating[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_gambling(text){
  if(!loaded) await waitTilLoad()
   for (var i=0; i < gambling.length; i++) {
        if (text.includes(gambling[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_pirated(text){
  if(!loaded) await waitTilLoad()
  let val = "false";
   for (var i=0; i < pirated.length; i++) {
        if (text.includes(pirated[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_ip_grabber(text){
  if(!loaded) await waitTilLoad() 
  let val = "false";
   for (var i=0; i < ipg.length; i++) {
        if (text.includes(ipg[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_nsfw(text){
   let val = "false";
   if(!loaded) await waitTilLoad()
   for (var i=0; i < nsfw.length; i++) {
        if (text.includes(nsfw[i])) {
          val = "true";
        }
   }
   return val;
}
async function is_scam(text){
  if(!loaded) await waitTilLoad()
  let val = "false";
   for (var i=0; i < scam.length; i++) {
        if (text.includes(scam[i])) {
          val = "true";
        }
   }
   return val;
}
module.exports ={
   is_cam,
  is_dating,
  is_gambling,
  is_pirated,
  is_ip_grabber,
  is_nsfw,
  is_scam,
  loaded,
  reload
}
