/*
Endless Runner: Stick Run
Name: Keaton Shawhan
Date: 11/6/23
Hours spent: 8
Points hit (15/15):
  Use multiple Scene classes (dictated by your game's style) (1)
  Have some form of player input/control appropriate to your game design (1)
  Include one or more animated characters that use a texture atlas* (1)
  Implement proper collision detection (via Arcade Physics or a custom routine) (1)
  Be theoretically endless (1)
  Be playable for at least 15 seconds for a new player of low to moderate skill (1)
  Run without significant crashes or errors (1)
  Simulate scrolling with a tileSprite (or equivalent means) (1)
  Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (1)
  Use a minimum of four sound effects for key mechanics, UI, and/or significant events appropriate to your game design (1)
  Have looping background music (1)
  Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (1)
  Properly transition between Scenes and allow the player to restart w/out having to reload the page (1)
  Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (1)
  Include in-game credits for all roles, assets, music, etc. (1)

  Citations:
  https://pixabay.com/music/synthwave-synthwave-80s-110045/
  https://freesound.org/people/tim.kahn/sounds/44876/
  https://freesound.org/people/JustInvoke/sounds/138490/
  https://freesound.org/people/Eponn/sounds/619835/
*/

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    width: 1000,
    height: 600,
    scene: [ Menu, Play, Credits ]
    // scene: [ Play ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
