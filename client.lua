-- // Made by Mocko With Love

-- // Variables
local Playing = false
local Win = nil

-- // For the Setup
Citizen.CreateThread(function()
    Wait(500)
    SendNUIMessage({
        action = "setup",
        minspeed = Config.MinSpeed,
        maxspeed = Config.MaxSpeed,
        Hardest = Config.Hardest,
        Easyest = Config.Easyest
    })
end)

-- // Command for testing it
RegisterCommand("testlineminigame", function(source, args, raw)
    if (Start(5, 1000, 250, false, false, 5)) then
        print("You Have Won the Minigame")
    else
        print("You Have Lost the Minigame")
    end
end)

-- // Start Function that starts the game and recalls if the game was won or not
function Start(Lines, WaitBeforewStart, WaitInBetweeenLines, SameSpeed, SameDifficulty, MinLinesForWin)
    if (Playing) then return end
    Playing = true
    Win = nil
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "start",
        lines = Lines,
        wait1 = WaitBeforeStart,
        wait2 = WaitInBetweeenLines,
        samespeed = SameSpeed,
        samedifficulty = SameDifficulty,
        MinLinesForWin = MinLinesForWin
    })
    while (Playing) do Wait(100) end
    return Win
end

-- // Stop Function wich end the Game
function Stop()
    SendNUIMessage({
        action = "stop",
    })
end

-- // NuiCallBack to Catch the Exit out of the Game
RegisterNUICallback("exit", function(data)
    SetNuiFocus(false, false)
    Win = data.Win
    Playing = false
end)