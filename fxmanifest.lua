fx_version "adamant"
game "gta5"

lua54 'on'

author "Mocko <3"
description "Minigame made by Mocko with <3"
version "1.0.0"

ui_page "html/index.html"
files {
    "html/index.html",
    "html/index.css",
    "html/index.js",
    "html/reset.css"
}

client_scripts {
    "client.lua",
    "config.lua"
}
exports {
    "Start",
    "Stop"
}

server_scripts {
    "server.lua",
    "config.lua"
}