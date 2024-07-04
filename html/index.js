// Made by Mocko with Love
$("body").fadeOut("fast")


let Hardest = 0;
let Easyest = 0;
let minspeed = 0;
let maxspeed = 0;

let waitbeforeStart = 0;
let waitbetweenRounds = 0;
let minlinesforwin = 0;

let samespeed = false;
let samedifficultybool = false;

let speed = {};
let samedifficulty = 0;

let Lineindex = 0;
let Won = 0;

let MinLocation = {};
let MaxLocation = {};
let PlayerLocation = 0;

let Playingindex = 1;
let Playing = null;

window.addEventListener("message", (event) => {

    let data = event.data;
    let action = data.action;

    switch(action){
        case "setup": 
            minspeed = data.minspeed;
            maxspeed = data.maxspeed;
            Hardest = data.Hardest;
            Easyest = data.Easyest;
            break;
        case "start":
            $("body").fadeIn("fast")
            let lines = data.lines;
            waitbeforeStart = data.wait1;
            waitbetweenRounds = data.wait2;
            samespeed = data.samespeed;
            samedifficultybool = data.samedifficulty;
            minlinesforwin = data.MinLinesForWin;
            if (samedifficultybool) {
                samedifficulty = Math.round(Math.random()*(Hardest-Easyest)+Easyest);
            }
            for (let i = 0; i<lines; i++) {
                Spot();
            }
            Start();
            break;
        case "stop":
            End(null);
            break;
    }
})

document.onclick = function (data) {
    if (Playing == null) { return; }
    End(SeeifWin())
    return;
}

document.onkeydown = function (data) {
    if (data.which == 27) { // ESC
        End(null)
        return
    }
    if (Playing == null) { return; }
    if (data.which == 32) { // Space
        End(SeeifWin())
        return;
    }
};

function Start() {
    if (Playingindex == 1) {
        let speedindex = Playingindex;
        if (samespeed) {speedindex = 1;}
        setTimeout(() => {
            if (!Playing) {
                Playing = setInterval(Player, speed[speedindex]);
            }
        }, waitbeforeStart);
    } else {
        let speedindex = Playingindex;
        if (samespeed) {speedindex = 1;}
        setTimeout(() => {
            if (!Playing) {
                Playing = setInterval(Player, speed[speedindex]);
            }
        }, waitbetweenRounds);
    }
}

function End(Win) {
    if (Win == null) {
        clearInterval(Playing);
        Playing = null;
        if (Won >= minlinesforwin) {
            $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({Win: true}));
        } else {
            $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({Win: false}));
        }
        $("#container").empty();
        $("body").fadeOut("fast")
        return;
    }
    clearInterval(Playing);
    Playing = null;
    if (Win) {
        Won++;
        $("#Spot-"+Playingindex).css("background-color", "var(--win-color)");
        $("#Spot-"+Playingindex).css("filter", "drop-shadow(0px 0px 4px var(--win-shadow))");
        $("#Player-"+Playingindex).css("opacity", "0");
    } else {
        $("#Spot-"+Playingindex).css("background-color", "var(--lose-color)");
        $("#Spot-"+Playingindex).css("filter", "drop-shadow(0px 0px 4px var(--lose-shadow))");
        $("#Player-"+Playingindex).css("opacity", "0");
    }
    Playingindex++;
    if (Playingindex > Lineindex) {
        if (Won >= minlinesforwin) {
            $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({Win: true}));
        } else {
            $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({Win: false}));
        }
        $("#container").empty();
        $("body").fadeOut("fast")
        return;
    }
    PlayerLocation = 0;
}

function Spot() {
    Lineindex++;
    $("#container").append(`
        <div id="Line-${Lineindex}" class="Line">
            <div id="Spot-${Lineindex}" class="Spot"></div>
            <div id="Player-${Lineindex}" class="Player"></div>
        </div>
    `);
    var diffuculty = Math.round(Math.random()*(Hardest-Easyest)+Easyest);
    if (samedifficultybool) {diffuculty = samedifficulty;}
    var location =  Math.round(Math.random()*100-diffuculty);
    while (location < 5) {location =  Math.round(Math.random()*100-diffuculty);}
    MinLocation[Lineindex] = location-2.5;
    MaxLocation[Lineindex] = location+diffuculty-2.5;
    speed[Lineindex] = Math.floor(Math.random()*(maxspeed-minspeed)+minspeed);
    $("#Spot-"+Lineindex).css("width", diffuculty+"%");
    $("#Spot-"+Lineindex).css("left", location+"%");
}

function Player() {
    if (PlayerLocation == 95) {End(false)}
    PlayerLocation++;
    $("#Player-"+Playingindex).css("left", PlayerLocation+"%")
}

function SeeifWin() {
    if (PlayerLocation >= MinLocation[Playingindex] && PlayerLocation <= MaxLocation[Playingindex]) {
        return true;
    }
    return false;
}
