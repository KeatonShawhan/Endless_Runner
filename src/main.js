/*
Endless Runner: Stick Run
Name: Keaton Shawhan
Date: 11/6/23
Hours spent: 8
Points hit (8/15):
  Use multiple Scene classes (dictated by your game's style) (1)
  Have some form of player input/control appropriate to your game design (1)
  Include one or more animated characters that use a texture atlas* (1)
  Implement proper collision detection (via Arcade Physics or a custom routine) (1)
  Be theoretically endless (1)
  Be playable for at least 15 seconds for a new player of low to moderate skill (1)
  Run without significant crashes or errors (1)
  Simulate scrolling with a tileSprite (or equivalent means) (1)


  Citations:
  https://pixabay.com/music/synthwave-synthwave-80s-110045/
*/
// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    width: 1000,
    height: 600,
    scene: [ Menu, Play ]
    // scene: [ Play ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
