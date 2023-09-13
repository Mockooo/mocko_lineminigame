# Mocko-LINEMINIGAME
```lua

███╗░░░███╗░█████╗░░█████╗░██╗░░██╗░█████╗░  ░██████╗░█████╗░██████╗░██╗██████╗░████████╗░██████╗
████╗░████║██╔══██╗██╔══██╗██║░██╔╝██╔══██╗  ██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
██╔████╔██║██║░░██║██║░░╚═╝█████═╝░██║░░██║  ╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░╚█████╗░
██║╚██╔╝██║██║░░██║██║░░██╗██╔═██╗░██║░░██║  ░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░░╚═══██╗
██║░╚═╝░██║╚█████╔╝╚█████╔╝██║░╚██╗╚█████╔╝  ██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░██████╔╝
╚═╝░░░░░╚═╝░╚════╝░░╚════╝░╚═╝░░╚═╝░╚════╝░  ╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░╚═════╝░

```
## INSTALLATION

Step 1: rename Folder to "mocko_lineminigame"
Step 2: drag into "resources" Folder
Step 3: edit youre server.cfg and add ensure mocko_lineminigame somewhere after esx has been started
Step 4: Configurate the Colors in the index.css so it looks like youre Server
Step 5: Configurate the config.lua for youre Server
Step 6: Restart the Server and Enjoy the Script!
Step 7: Report any Bugs you find to my Discord @mockoo or Under the post!
Step 8: Have Fun!

## Usage

### Notify
```lua
-- BSP1.1               | Desprection                                                                               | BSP1.2    | Datatype
-----------------------------------------------------------------------------------------------------------------------------------------------
-- Lines                | The ammount of Lines the Player has to Complete.                                          | 5         | int (1-inf)
-- WaitBeforeStart      | The ammount of Time the Game Waits before it Starts to Rotate the Player.                 | 1000      | int (msec)
-- WaitInBetweeenLines  | The ammount of Time the Game Waits inbetween Lines.                                       | 500       | int (msec)
-- SameSpeed            | Decides wether or not the Lines all Carry the Same Speed for the Player                   | false     | boolean
-- SameDifficulty       | Decides wether or not the Lines all Carry the Same Difficulty for the Spot                | false     | boolean
-- MinLinesForWin       | The ammount of Lines the Player has to Complete to Win the Minigame                       | 5         | int (0-inf)
-----------------------------------------------------------------------------------------------------------------------------------------------
-- BSP2      | Desprection
-----------------------------------------------------------------------------------------------------------------------------------------------
-- Stops the Minigame Completly this is if you want the game to stop if the player dies or maybe he leaves the car or something else.
-----------------------------------------------------------------------------------------------------------------------------------------------

-- BSP1.1
exports.mocko_lineminigame:Start(lines, waitbeforeStart, waitinbetweeenround, SameSpeed, SameDifficulty, MinLinesForWin)
-- BSP1.2
exports.mocko_lineminigame:Start(5, 1000, 250, false, false, 5)

-- BSP2
exports.mocko_lineminigame:Stop()
```

### Commands
```lua
Command: /testcircleminigame
What is does: Starts a Minigame with the Values of BSP1.2 and then Prints if Won or Not
```