# Aoi.js V5 Panel!
## Gotta change all this
## The first ever Aoi.js plugins package
### Requires Node V16+
## Downloading:  
```
npm i aoi.js-plugins
```
## Usage:
```js
const aoijs = require("aoi.js")
const plugin = require("aoi.js-plugins")

const bot = new aoijs.Bot({
token: "your very secret token", //Discord Bot Token
prefix: "abcdefg", //Discord Bot Prefix
intents: "all" //Discord Intents
})
plugin.load_funcs(bot)
// SAY COMMAND
bot.command({
  name:"say",
  code:`$say[$message;$userTag[$authorID]]`
})
// MEME COMMAND
bot.command({
  name:"meme",
  code: `
  $meme
  $title[1;$getVar[memetitle]]
  $image[1;$getVar[memeurl]]
  
  `
})

bot.onMessage()
```
More cool functions comming soon...